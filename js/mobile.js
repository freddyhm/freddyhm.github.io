/* Mobile nav toggle */
(function(){
  var nav=document.querySelector('nav'),btn=document.querySelector('.nav-toggle');
  if(!nav||!btn)return;
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
})();

/* Swipe carousels: pagination dots for each .carousel track.
   Swiping is pure CSS scroll-snap; this only adds dot indicators as an
   affordance. Dots are hidden via CSS on desktop, so we build them once. */
(function(){
  document.querySelectorAll('.carousel').forEach(function(track){
    var slides=Array.prototype.slice.call(track.children);
    if(slides.length<2)return;
    var nav=document.createElement('div');
    nav.className='carousel-dots';
    slides.forEach(function(_,i){
      var b=document.createElement('button');
      b.type='button';
      b.setAttribute('aria-label','Show item '+(i+1)+' of '+slides.length);
      b.addEventListener('click',function(){
        track.scrollTo({left:slides[i].offsetLeft-track.offsetLeft,behavior:'smooth'});
      });
      nav.appendChild(b);
    });
    track.insertAdjacentElement('afterend',nav);
    var dots=Array.prototype.slice.call(nav.children);
    function update(){
      var pos=track.scrollLeft,best=0,bestD=Infinity;
      slides.forEach(function(s,i){
        var d=Math.abs((s.offsetLeft-track.offsetLeft)-pos);
        if(d<bestD){bestD=d;best=i;}
      });
      dots.forEach(function(d,i){d.setAttribute('aria-current',i===best?'true':'false');});
    }
    var raf=0;
    track.addEventListener('scroll',function(){
      if(raf)return;
      raf=requestAnimationFrame(function(){raf=0;update();});
    },{passive:true});
    update();
  });
})();
