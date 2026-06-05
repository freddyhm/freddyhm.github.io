/* Blueprint line-art: monochrome white technical drawing, generated parametrically. */
(function(){
  var W=1440,H=2900,P=[];
  function el(t,a){var s='<'+t;for(var k in a)s+=' '+k+'="'+a[k]+'"';return s+'></'+t+'>';}
  function path(d,c){P.push('<path d="'+d+'" class="'+(c||'s')+'"/>');}
  function line(x1,y1,x2,y2,c){P.push('<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" class="'+(c||'s')+'"/>');}
  function circ(cx,cy,r,c){P.push('<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" class="'+(c||'s')+'"/>');}
  function txt(x,y,t,anc){P.push('<text x="'+x+'" y="'+y+'"'+(anc?' text-anchor="'+anc+'"':'')+'>'+t+'</text>');}
  function target(cx,cy,r){circ(cx,cy,r);circ(cx,cy,r*0.58,'sf');circ(cx,cy,2.5);
    line(cx-r-14,cy,cx+r+14,cy,'sf');line(cx,cy-r-14,cx,cy+r+14,'sf');}
  function arrow(x,y,dx){path('M'+x+' '+y+' l'+(11*dx)+' -4 M'+x+' '+y+' l'+(11*dx)+' 4');}
  function dimH(x1,x2,y,lbl){line(x1,y,x2,y);arrow(x1,y,1);arrow(x2,y,-1);
    line(x1,y-7,x1,y+7,'sf');line(x2,y-7,x2,y+7,'sf');txt((x1+x2)/2,y-9,lbl,'middle');}
  function dimV(x,y1,y2,lbl){line(x,y1,x,y2);arrow(x,y1,0);path('M'+x+' '+y1+' l-4 11 M'+x+' '+y1+' l4 11');path('M'+x+' '+y2+' l-4 -11 M'+x+' '+y2+' l4 -11');
    line(x-7,y1,x+7,y1,'sf');line(x-7,y2,x+7,y2,'sf');txt(x+8,(y1+y2)/2,lbl);}
  function boltCircle(cx,cy,r,n){circ(cx,cy,r,'sf');line(cx-r-16,cy,cx+r+16,cy,'sf');line(cx,cy-r-16,cx,cy+r+16,'sf');
    for(var i=0;i<n;i++){var a=i/n*Math.PI*2;circ(cx+Math.cos(a)*r,cy+Math.sin(a)*r,9);}}

  /* faint long construction lines */
  line(0,1010,W,1010,'sf');line(960,0,960,H,'sf');line(0,2180,W,2180,'sf');
  /* top region */
  target(1075,300,68);
  dimH(805,1170,176,'146.02');
  path('M70 645 C 200 560, 240 760, 360 700 S 540 600, 600 700','s');
  txt(150,720,'R 0.163');
  /* mid region */
  target(1185,1305,52);
  dimV(1330,1120,1360,'54.45');
  circ(560,1520,70,'s'); line(560,1450,560,1590,'sf'); line(490,1520,630,1520,'sf'); txt(575,1505,'Ø 32');
  path('M120 1700 q 90 -60 180 0 t 180 0','sf');
  /* part outline */
  P.push('<rect x="120" y="1850" width="300" height="172" rx="10" class="s"/>');
  line(120,1936,420,1936,'sf'); line(270,1850,270,2022,'sf');
  dimH(120,420,2050,'54.45'); circ(270,1936,18,'s');
  /* lower region */
  boltCircle(1230,1660,96,8);
  target(690,2540,62);
  dimH(430,690,2360,'89.0'); txt(900,2300,'139.25');
  path('M40 2480 C 160 2420, 200 2620, 320 2560','sf');
  circ(1010,2120,40,'s'); line(1010,2120,1120,2050,'sf'); circ(1120,2050,3.5,'s'); txt(1130,2046,'A');

  document.getElementById('bp').insertAdjacentHTML('beforeend',
    '<svg viewBox="0 0 '+W+' '+H+'" preserveAspectRatio="xMidYMid slice">'+P.join('')+'</svg>');
})();

/* Defer reveal animations until load settles. */
addEventListener('load',function(){setTimeout(function(){document.documentElement.classList.add('anim-done')},1500)});

/* Theme toggle: persist choice in localStorage, default dark, sync aria-pressed. */
(function(){
  var root=document.documentElement,btn=document.querySelector('.theme-toggle');
  if(!btn)return;
  function current(){return root.dataset.theme==='light'?'light':'dark';}
  function sync(){btn.setAttribute('aria-pressed',current()==='light'?'true':'false');}
  function apply(theme){
    if(theme==='light'){root.dataset.theme='light';}
    else{delete root.dataset.theme;}
    try{localStorage.setItem('theme',theme);}catch(e){}
    sync();
  }
  sync();
  btn.addEventListener('click',function(){apply(current()==='light'?'dark':'light');});
})();
