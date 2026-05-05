import urllib.request, sys, re
sys.stdout.reconfigure(encoding='utf-8')

# Test confirm page with and without cookies
confirm_url = 'https://myship.7-11.com.tw/cart/confirm/GM2605018541234?carmId=548433973'

# Without cookies
print('=== Without cookies ===')
req = urllib.request.Request(confirm_url, headers={'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
resp = urllib.request.urlopen(req, timeout=15)
html = resp.read().decode('utf-8', errors='replace')
print(f'Status: {resp.status}, Length: {len(html)}')

# Look for key content
if '愛文芒果' in html or '芒果' in html:
    print('Product name FOUND in HTML!')
else:
    print('Product name NOT found')

if 'confirm' in html.lower() or '結帳' in html or '確認' in html:
    print('Checkout-related text found')

# Extract meaningful text
# Remove scripts and styles
text = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
text = re.sub(r'<style[^>]*>.*?</style>', '', text, flags=re.DOTALL)
text = re.sub(r'<[^>]+>', ' ', text)
text = re.sub(r'\s+', ' ', text).strip()
print(f'\nText content (first 1500):\n{text[:1500]}')

# Check for product IDs
if '2605021152246963' in html:
    print('\nProduct ID found in HTML!')
if '548433973' in html:
    print('carmId found in HTML!')
