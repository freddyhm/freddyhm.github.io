/* Shared blog scripts: blueprint backdrop + mobile nav toggle. */
(function(){
  /* Blueprint line-art — same generator as the homepage. */
  var bp=document.getElementById('bp');
  if(bp){
    var W=1440,H=2900,P=[];
    function path(d,c){P.push('<path d="'+d+'" class="'+(c||'s')+'"/>');}
    function line(x1,y1,x2,y2,c){P.push('<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" class="'+(c||'s')+'"/>');}
    function circ(cx,cy,r,c){P.push('<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" class="'+(c||'s')+'"/>');}
    function txt(x,y,t,anc){P.push('<text x="'+x+'" y="'+y+'"'+(anc?' text-anchor="'+anc+'"':'')+'>'+t+'</text>');}
    function gear(cx,cy,ro,ri,teeth){
      var d='',step=Math.PI*2/teeth,tw=step*0.30;
      for(var i=0;i<teeth;i++){var a=i*step-Math.PI/2;
        var pts=[[a-tw,ri],[a-tw*0.55,ro],[a+tw*0.55,ro],[a+tw,ri]];
        for(var j=0;j<4;j++){var x=cx+Math.cos(pts[j][0])*pts[j][1],y=cy+Math.sin(pts[j][0])*pts[j][1];
          d+=(i===0&&j===0?'M':'L')+x.toFixed(1)+' '+y.toFixed(1);}}
      path(d+'Z');circ(cx,cy,ri*0.50);circ(cx,cy,ro*0.13);
      for(var k=0;k<6;k++){var aa=k/6*Math.PI*2;circ(cx+Math.cos(aa)*ri*0.30,cy+Math.sin(aa)*ri*0.30,ro*0.045,'sf');}
    }
    function target(cx,cy,r){circ(cx,cy,r);circ(cx,cy,r*0.58,'sf');circ(cx,cy,2.5);
      line(cx-r-14,cy,cx+r+14,cy,'sf');line(cx,cy-r-14,cx,cy+r+14,'sf');}
    function arrow(x,y,dx){path('M'+x+' '+y+' l'+(11*dx)+' -4 M'+x+' '+y+' l'+(11*dx)+' 4');}
    function dimH(x1,x2,y,lbl){line(x1,y,x2,y);arrow(x1,y,1);arrow(x2,y,-1);
      line(x1,y-7,x1,y+7,'sf');line(x2,y-7,x2,y+7,'sf');txt((x1+x2)/2,y-9,lbl,'middle');}

    line(0,1010,W,1010,'sf');line(960,0,960,H,'sf');line(0,2180,W,2180,'sf');
    gear(1255,430,118,90,20); gear(1130,322,56,40,12);
    target(1075,300,68);
    dimH(805,1170,176,'146.02');
    path('M70 645 C 200 560, 240 760, 360 700 S 540 600, 600 700','s');
    txt(150,720,'R 0.163');
    gear(225,1190,92,70,18);
    target(1185,1305,52);
    circ(560,1520,70,'s'); line(560,1450,560,1590,'sf'); line(490,1520,630,1520,'sf'); txt(575,1505,'Ø 32');
    gear(1185,2420,84,63,16);
    target(690,2540,62);
    dimH(430,690,2360,'89.0'); txt(900,2300,'139.25');

    bp.insertAdjacentHTML('beforeend',
      '<svg viewBox="0 0 '+W+' '+H+'" preserveAspectRatio="xMidYMid slice">'+P.join('')+'</svg>');
  }

  /* Mobile nav toggle */
  var nav=document.querySelector('nav'),btn=document.querySelector('.nav-toggle');
  if(nav&&btn){
    function setOpen(open){
      nav.classList.toggle('open',open);
      btn.setAttribute('aria-expanded',open?'true':'false');
      btn.setAttribute('aria-label',open?'Close menu':'Open menu');
    }
    btn.addEventListener('click',function(){setOpen(!nav.classList.contains('open'));});
    nav.querySelectorAll('.nav-links a').forEach(function(a){
      a.addEventListener('click',function(){setOpen(false);});
    });
    document.addEventListener('keydown',function(e){if(e.key==='Escape')setOpen(false);});
  }
})();
