const b=document.getElementById('menuBtn'),m=document.getElementById('menu');
if(b&&m){b.addEventListener('click',()=>{const open=m.classList.toggle('open');b.setAttribute('aria-expanded',open?'true':'false')});
document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>m.classList.remove('open')));}
