const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('siteNav');

menuBtn.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded',open ? 'true' : 'false');
});

document.querySelectorAll('#siteNav a').forEach(link=>{
  link.addEventListener('click',()=>nav.classList.remove('open'));
});

document.getElementById('year').textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{threshold:.12});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
