const b=document.getElementById('menuBtn'),m=document.getElementById('menu');

if(b&&m){
  b.addEventListener('click',()=>{
    const open=m.classList.toggle('open');
    b.setAttribute('aria-expanded',open?'true':'false');
  });

  document.querySelectorAll('.menu a').forEach(a=>{
    a.addEventListener('click',()=>m.classList.remove('open'));
  });
}


/* CTA DE PRÉ-LANÇAMENTO — PÁGINAS INTERNAS */

const path=window.location.pathname.split('/').pop()||'index.html';

const internalPages=[
  'black-signature.html',
  'colecao.html',
  'personalizacao.html',
  'zavqel.html'
];

if(internalPages.includes(path)&&!document.querySelector('.prelaunch-cta')){

  const style=document.createElement('style');

  style.textContent=`

    .prelaunch-cta{
      margin:90px 0 10px;
      padding:70px 28px;
      text-align:center;
      border-top:1px solid rgba(199,164,91,.25);
      border-bottom:1px solid rgba(199,164,91,.25);
      background:
        radial-gradient(
          circle at 50% 0%,
          rgba(199,164,91,.08),
          transparent 55%
        );
    }

    .prelaunch-cta__eyebrow{
      margin:0 0 18px;
      color:#c7a45b;
      font-size:10px;
      letter-spacing:.28em;
      text-transform:uppercase;
    }

    .prelaunch-cta h2{
      margin:0 auto 18px;
      max-width:760px;
      font:500 clamp(42px,6vw,72px)/.9 'Cormorant Garamond',serif;
      color:#eee9df;
    }

    .prelaunch-cta h2 em{
      color:#c7a45b;
      font-weight:400;
    }

    .prelaunch-cta p{
      max-width:560px;
      margin:0 auto 30px;
      color:#9d968d;
      font-size:13px;
      line-height:1.9;
    }

    .prelaunch-cta a{
      display:inline-flex;
      align-items:center;
      justify-content:center;
      border:1px solid rgba(199,164,91,.72);
      padding:16px 28px;
      color:#c7a45b;
      background:rgba(199,164,91,.015);
      font-size:10px;
      letter-spacing:.21em;
      text-transform:uppercase;
      transition:.35s;
      text-decoration:none;
    }

    .prelaunch-cta a:hover{
      background:#c7a45b;
      color:#070707;
      transform:translateY(-2px);
    }

    @media(max-width:800px){

      .prelaunch-cta{
        margin:70px 0 0;
        padding:55px 18px;
      }

      .prelaunch-cta h2{
        font-size:clamp(40px,12vw,58px);
      }

      .prelaunch-cta p{
        font-size:13px;
      }

    }

  `;

  document.head.appendChild(style);


  const footer=document.querySelector('footer');

  if(footer){

    const cta=document.createElement('section');

    cta.className='prelaunch-cta';

    cta.innerHTML=`

      <p class="prelaunch-cta__eyebrow">
        Acesso antecipado · ZAVQEL
      </p>

      <h2>
        O próximo capítulo começa
        <em>antes do lançamento.</em>
      </h2>

      <p>
        Entre para a lista privada ZAVQEL e seja um dos primeiros
        a conhecer nossas fragrâncias.
      </p>

      <a href="index.html#zavqel-prelaunch">
        QUERO FAZER PARTE
      </a>

    `;

    footer.parentNode.insertBefore(cta,footer);

  }

}
