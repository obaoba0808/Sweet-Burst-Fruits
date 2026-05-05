import urllib.request, urllib.parse, re, http.cookiejar, sys, json
sys.stdout.reconfigure(encoding='utf-8')

STORE_ID = 'GM2605018541234'
STORE_URL = 'https://myship.7-11.com.tw/general/detail?id=' + STORE_ID

# Step 1: Create a cookie jar and opener
cj = http.cookiejar.CookieJar()
opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))

# Step 2: Fetch the store page (with cookies)
print('=== Step 1: Fetch store page ===')
req = urllib.request.Request(STORE_URL, headers={'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
resp = opener.open(req, timeout=20)
html = resp.read().decode('utf-8')
print(f'Status: {resp.status}')
print(f'Cookies: {[c.name for c in cj]}')

# Step 3: Extract CSRF token
csrf_match = re.search(r'name="__RequestVerificationToken"[^>]*value="([^"]+)"', html)
if not csrf_match:
    print('ERROR: CSRF token not found!')
    sys.exit(1)
csrf_token = csrf_match.group(1)
print(f'CSRF token: {csrf_token[:50]}...')

# Step 4: Build POST data for checkout
# Test with one product: 樛文芒果禮盒
product_id = '2605021152246963'  # 愛文芒果水果禮盒
spec_id = '2605021152246964'
qty = '1'
min_qty = '1'

post_data = urllib.parse.urlencode({
    '__RequestVerificationToken': csrf_token,
    'StoreId': STORE_ID,
    'CarProduct': product_id + ',',
    'CarItem': spec_id + ',',
    'CarQty': qty + ',',
    'CarMinQty': min_qty + ',',
    'CspRef': '',
}).encode('utf-8')

# Step 5: POST the form
print('\n=== Step 2: POST checkout form ===')
post_url = 'https://myship.7-11.com.tw/general/detail'
post_req = urllib.request.Request(post_url, data=post_data, headers={
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Referer': STORE_URL,
})

# Don't auto-redirect - we want to capture the 302
class NoRedirectHandler(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        print(f'Redirect {code} -> {newurl}')
        return None  # Don't follow redirect

opener_no_redirect = urllib.request.build_opener(
    urllib.request.HTTPCookieProcessor(cj),
    NoRedirectHandler()
)

try:
    resp2 = opener_no_redirect.open(post_req, timeout=20)
    print(f'Status: {resp2.status}')
    body = resp2.read().decode('utf-8', errors='replace')
    print(f'Response length: {len(body)}')
    # Check for carmId in response
    carm_match = re.search(r'carmId=(\d+)', body)
    if carm_match:
        print(f'carmId found: {carm_match.group(1)}')
except urllib.error.HTTPError as e:
    print(f'HTTP Error: {e.code}')
    if e.code == 302:
        location = e.headers.get('Location', '')
        print(f'Redirect to: {location}')
        carm_match = re.search(r'carmId=(\d+)', location)
        if carm_match:
            carm_id = carm_match.group(1)
            print(f'\n=== SUCCESS! carmId = {carm_id} ===')
            confirm_url = f'https://myship.7-11.com.tw/cart/confirm/{STORE_ID}?carmId={carm_id}'
            print(f'Confirm URL: {confirm_url}')
            
            # Step 6: Try to access confirm page WITHOUT cookies
            print('\n=== Step 3: Test confirm page without cookies ===')
            try:
                no_cookie_req = urllib.request.Request(confirm_url, headers={'User-Agent':'Mozilla/5.0'})
                no_cookie_resp = urllib.request.urlopen(no_cookie_req, timeout=15)
                no_cookie_html = no_cookie_resp.read().decode('utf-8', errors='replace')
                print(f'Status: {no_cookie_resp.status}')
                print(f'HTML length: {len(no_cookie_html)}')
                # Check if cart items are visible
                if product_id in no_cookie_html or '愛文芒果' in no_cookie_html:
                    print('Cart items VISIBLE without cookies!')
                else:
                    # Check for product names in the page
                    product_names = re.findall(r'class="[^"]*product[^"]*"[^>]*>([^<]+)', no_cookie_html)
                    print(f'Product elements found: {len(product_names)}')
                    if len(no_cookie_html) < 5000:
                        print('Short page - likely redirect or error')
                    else:
                        print('Full page - might contain cart data')
            except Exception as ex:
                print(f'Error accessing confirm page: {ex}')
    else:
        body = e.read().decode('utf-8', errors='replace')
        print(f'Response body (first 500): {body[:500]}')
except Exception as e:
    print(f'Error: {e}')
