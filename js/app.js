
const products=[
{id:1,name:'愛文芒果',desc:'香甜多汁・台灣在地',price:699,cat:'芒果',hot:true,img:'images/mango.svg'},
{id:2,name:'大湖草莓',desc:'鮮紅飽滿・香甜可口',price:599,cat:'莓果',hot:true,img:'images/strawberry.svg'},
{id:3,name:'麝香葡萄',desc:'皮薄多汁・香氣濃郁',price:799,cat:'葡萄',hot:true,img:'images/grape.svg'},
{id:4,name:'金鑽鳳梨',desc:'香甜不刺舌・台灣嚴選',price:499,cat:'鳳梨',hot:true,img:'images/pineapple.svg'},
{id:5,name:'青森蘋果',desc:'爽脆香甜・大顆漂亮',price:899,cat:'水果',hot:false,img:'images/apple.svg'},
{id:6,name:'奇異果家庭盒',desc:'酸甜均衡・日常補給',price:520,cat:'水果',hot:false,img:'images/kiwi.svg'},
{id:7,name:'綜合水果禮盒',desc:'節慶送禮・精美包裝',price:1280,cat:'禮盒',hot:true,img:'images/gift.svg'},
{id:8,name:'家庭水果箱',desc:'一週份量・全家共享',price:1099,cat:'禮盒',hot:true,img:'images/family.svg'}
];
let cart=JSON.parse(localStorage.getItem('cart')||'[]');
const money=n=>'NT$ '+n.toLocaleString();
function card(p){return `<article class="card"><img src="${p.img}" alt="${p.name}"><div class="info"><h3>${p.name}</h3><p>${p.desc}</p><div class="price">${money(p.price)} <small>/ 份</small></div></div><button class="buy" onclick="addCart(${p.id})">🛒</button></article>`}
function renderProducts(list=products,target='productGrid'){const el=document.getElementById(target);if(el)el.innerHTML=list.map(card).join('')}
function renderHome(){renderProducts(products.filter(p=>p.hot).slice(0,4),'homeHot')}
function filterProducts(cat,btn){document.querySelectorAll('.filter button').forEach(b=>b.classList.remove('active'));if(btn)btn.classList.add('active');renderProducts(cat==='全部'?products:products.filter(p=>p.cat.includes(cat)||p.name.includes(cat)))}
function searchProducts(q){q=q.trim();renderProducts(products.filter(p=>!q||p.name.includes(q)||p.desc.includes(q)||p.cat.includes(q)))}
function addCart(id){const p=products.find(x=>x.id===id);const item=cart.find(x=>x.id===id);item?item.qty++:cart.push({...p,qty:1});save();toast('已加入購物車：'+p.name)}
function save(){localStorage.setItem('cart',JSON.stringify(cart));updateCart()}
function updateCart(){const count=document.getElementById('cartCount');if(count)count.textContent=cart.reduce((s,i)=>s+i.qty,0);const items=document.getElementById('cartItems');if(items)items.innerHTML=cart.length?cart.map(i=>`<div class="cart-item"><img src="${i.img}"><div><b>${i.name}</b><small>${money(i.price)}</small></div><div class="qty"><button onclick="changeQty(${i.id},-1)">-</button> ${i.qty} <button onclick="changeQty(${i.id},1)">+</button></div></div>`).join(''):'<p style="color:#777">購物車目前是空的</p>';const total=document.getElementById('cartTotal');if(total)total.textContent='總計 '+money(cart.reduce((s,i)=>s+i.price*i.qty,0))}
function changeQty(id,n){const item=cart.find(i=>i.id===id);if(!item)return;item.qty+=n;if(item.qty<=0)cart=cart.filter(i=>i.id!==id);save()}
function toggleCart(){document.getElementById('cartPanel').classList.toggle('open')}
function checkout(){if(!cart.length)return toast('請先加入商品');location.href='checkout.html'}
function toast(t){const el=document.getElementById('toast');if(!el)return alert(t);el.textContent=t;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2200)}
document.addEventListener('DOMContentLoaded',()=>{renderHome();renderProducts();renderProducts(products.filter(p=>p.hot),'hotGrid');renderProducts(products.filter(p=>p.cat==='禮盒'),'giftGrid');updateCart();});
