import urllib.request, sys, re
sys.stdout.reconfigure(encoding='utf-8')
req = urllib.request.Request('https://myship.7-11.com.tw/general/detail?id=GM2605018541234', headers={'User-Agent':'Mozilla/5.0'})
html = urllib.request.urlopen(req, timeout=15).read().decode('utf-8')

# Extract key patterns
fields = ['__RequestVerificationToken','CarProduct','CarItem','CarQty','CarMinQty','CartID','CspRef','StoreId']
for f in fields:
    pat = rf'name="{re.escape(f)}"[^>]*value="([^"]*)"'
    m = re.search(pat, html)
    if m:
        val = m.group(1)[:100]
        print(f'{f} = {val}')
    else:
        # Try alternative: value before name
        pat2 = rf'value="([^"]*)"[^>]*name="{re.escape(f)}"'
        m2 = re.search(pat2, html)
        if m2:
            print(f'{f} = {m2.group(1)[:100]}')
        else:
            print(f'{f} = NOT FOUND')

# Check for formBuyProducts
if 'formBuyProducts' in html:
    print('\nformBuyProducts FOUND')
else:
    print('\nformBuyProducts NOT FOUND')

print(f'\nHTML length: {len(html)}')

# Also extract a sample of the CSRF token
csrf = re.search(r'name="__RequestVerificationToken".*?value="([^"]+)"', html)
if csrf:
    print(f'CSRF token sample: {csrf.group(1)[:60]}...')
