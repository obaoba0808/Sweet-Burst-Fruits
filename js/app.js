
const products = [{"id": 1, "name": "愛文芒果", "desc": "香氣濃郁・果肉細緻・人氣熱賣", "price": 699, "old": 880, "cat": "熱銷", "img": "./images/mango.jpg", "tag": "爆甜"}, {"id": 2, "name": "金鑽鳳梨", "desc": "香甜不咬舌・台灣嚴選", "price": 499, "old": 650, "cat": "熱銷", "img": "./images/pineapple.jpg", "tag": "回購"}, {"id": 3, "name": "巨峰葡萄", "desc": "皮薄多汁・濃郁果香", "price": 799, "old": 980, "cat": "熱銷", "img": "./images/grape.jpg", "tag": "人氣"}, {"id": 4, "name": "香吉士", "desc": "酸甜平衡・多汁清爽", "price": 399, "old": 520, "cat": "柑橘", "img": "./images/orange.jpg", "tag": "多汁"}, {"id": 5, "name": "奇異果", "desc": "酸甜爽口・日常水果補給", "price": 520, "old": 650, "cat": "健康", "img": "./images/kiwi.jpg", "tag": "健康"}, {"id": 6, "name": "紅心火龍果", "desc": "鮮紅多汁・清爽順口", "price": 459, "old": 590, "cat": "健康", "img": "./images/dragonfruit.jpg", "tag": "鮮紅"}, {"id": 7, "name": "藍莓", "desc": "小顆飽滿・適合早餐甜點", "price": 599, "old": 760, "cat": "莓果", "img": "./images/blueberry.jpg", "tag": "精選"}, {"id": 8, "name": "櫻桃", "desc": "飽滿甜脆・送禮自用皆宜", "price": 899, "old": 1180, "cat": "高級", "img": "./images/cherry.jpg", "tag": "高級"}, {"id": 9, "name": "水蜜桃", "desc": "粉嫩香甜・細緻多汁", "price": 760, "old": 960, "cat": "高級", "img": "./images/peach.jpg", "tag": "香甜"}, {"id": 10, "name": "哈密瓜", "desc": "果肉細緻・甜香爽口", "price": 680, "old": 850, "cat": "瓜果", "img": "./images/melon.jpg", "tag": "甜香"}, {"id": 11, "name": "木瓜", "desc": "熟度剛好・柔軟香甜", "price": 360, "old": 450, "cat": "瓜果", "img": "./images/papaya.jpg", "tag": "當季"}, {"id": 12, "name": "酪梨", "desc": "綿密滑順・沙拉早餐首選", "price": 420, "old": 550, "cat": "健康", "img": "./images/avocado.jpg", "tag": "營養"}, {"id": 13, "name": "榴槤", "desc": "濃郁香甜・愛好者必買", "price": 1299, "old": 1580, "cat": "高級", "img": "./images/durian.jpg", "tag": "限量"}];
let cart = JSON.parse(localStorage.getItem('sweetFruitCart') || '[]');
const money = n => 'NT$ ' + Number(n).toLocaleString();

function card(p){
  return `<article class="card">
    <span class="tag">${p.tag}</span>
    <div class="card-img"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
    <div class="info">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="price">${money(p.price)} <span class="old">${money(p.old)}</span></div>
    </div>
    <button class="buy" onclick="addCart(${p.id})">🛒</button>
  </article>`;
}
function render(target='productGrid', list=products){
  const el=document.getElementById(target);
  if(el) el.innerHTML = list.map(card).join('');
}
function init(){
  render('homeHot', products.slice(0,8));
  render('productGrid', products);
  render('hotGrid', products.filter(p=>['熱銷','高級'].includes(p.cat) || p.id<=4));
  render('giftGrid', products.filter(p=>['高級','熱銷'].includes(p.cat)).slice(0,8));
  updateCart();
  startCountdown();
}
function filterProducts(cat, btn){
  document.querySelectorAll('.filters button').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  render('productGrid', cat==='全部'?products:products.filter(p=>p.cat===cat || p.name.includes(cat)));
}
function searchProducts(q){
  q=q.trim();
  if(location.pathname.indexOf('products')===-1 && q) location.href='./products.html?search='+encodeURIComponent(q);
  render('productGrid', products.filter(p=>!q || p.name.includes(q) || p.desc.includes(q) || p.cat.includes(q)));
}
function addCart(id){
  const p=products.find(x=>x.id===id);
  const item=cart.find(x=>x.id===id);
  item ? item.qty++ : cart.push({...p, qty:1});
  saveCart();
  toast('已加入購物車：'+p.name);
}
function saveCart(){
  localStorage.setItem('sweetFruitCart', JSON.stringify(cart));
  updateCart();
}
function updateCart(){
  const count=document.getElementById('cartCount');
  if(count) count.textContent=cart.reduce((s,i)=>s+i.qty,0);
  const items=document.getElementById('cartItems');
  if(items){
    items.innerHTML = cart.length ? cart.map(i=>`<div class="cart-item">
      <img src="${i.img}" alt="${i.name}">
      <div><b>${i.name}</b><small>${money(i.price)}</small></div>
      <div class="qty"><button onclick="changeQty(${i.id},-1)">-</button><span>${i.qty}</span><button onclick="changeQty(${i.id},1)">+</button></div>
    </div>`).join('') : '<p style="color:#777;font-weight:800">購物車目前是空的</p>';
  }
  const total=document.getElementById('cartTotal');
  if(total) total.textContent='總計 '+money(cart.reduce((s,i)=>s+i.price*i.qty,0));
}
function changeQty(id,n){
  const item=cart.find(i=>i.id===id);
  if(!item) return;
  item.qty += n;
  if(item.qty<=0) cart=cart.filter(i=>i.id!==id);
  saveCart();
}
function toggleCart(){document.getElementById('cartPanel').classList.toggle('open')}
function checkout(){
  if(!cart.length) return toast('請先加入商品');
  location.href='./checkout.html';
}
function lineOrder(){
  window.open('https://line.me/R/ti/p/@938nzmjr', '_blank');
}
function addWeeklyBox(plan='standard'){
  const weekly = {id: plan==='premium'?1000:999,name: plan==='premium'?'豪華一週家庭水果箱':'一週家庭水果箱',desc:'7天營養搭配・全家共享・新鮮直送',price: plan==='premium'?1680:999,old: plan==='premium'?2180:1399,cat:'水果箱',img:'./images/banner-weekly-box.png',tag:'一週份量'};
  const item=cart.find(x=>x.id===weekly.id);
  item ? item.qty++ : cart.push({...weekly,qty:1});
  saveCart();
  toast('已加入購物車：'+weekly.name);
}
function toast(t){
  const el=document.getElementById('toast');
  if(!el) return alert(t);
  el.textContent=t; el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),2200);
}
function startCountdown(){
  const els=['hh','mm','ss'].map(id=>document.getElementById(id));
  if(els.some(x=>!x)) return;
  let sec=3*3600+26*60+18;
  setInterval(()=>{
    sec=Math.max(0,sec-1);
    els[0].textContent=String(Math.floor(sec/3600)).padStart(2,'0');
    els[1].textContent=String(Math.floor(sec%3600/60)).padStart(2,'0');
    els[2].textContent=String(sec%60).padStart(2,'0');
  },1000);
}
document.addEventListener('DOMContentLoaded',()=>{
  const qs=new URLSearchParams(location.search); const s=qs.get('search');
  init(); if(s) searchProducts(s);
});
