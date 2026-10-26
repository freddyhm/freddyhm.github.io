/* Language switcher: French copy lives in the HTML, EN/ES swap in by data-i18n key. Choice persists in localStorage. */
(function(){
  var COPY={
    en:{
      title:"Freddy Hidalgo-Monchez — Engineer-in-training",
      navAreas:"Areas",navSkills:"Skills",navMission:"Mission",navSoftware:"Software",navBlog:"Blog",navContact:"Contact",
      heroTitle:"Candidate to the engineering profession (CEP), electrical.",
      heroSub:"Passionate about reliability, distribution, and protection and control of power grids.",
      ctaContact:"Get in touch",
      missionLabel:"Mission",
      mission:"As an electrical engineering graduate, I spent several years making reliable, debugging and securing systems that thousands of people depend on every day.",
      mission2:"Today, I want to put my experience to work for an engineering team that shares my passion for renewable energy and power grids.",
      areasLabel:"Areas of interest",
      area1Title:"Distribution",area1Body:"Design and operation of distribution networks, from substation to customer.",
      area2Title:"Protection and control",area2Body:"Protection schemes, relay coordination and substation automation.",
      area3Title:"Power system studies",area3Body:"Load flow, short-circuit, stability and grid planning.",
      skillsLabel:"Skills",
      skillsTitle:"What I bring to an engineering team.",
      skill1Title:"Failure diagnosis",skill1Body:"Several years isolating root causes of failures in production systems, methodically and under pressure.",
      skill2Title:"Reliability and risk management",skill2Body:"Cut security defects by 50% and decoupled dependencies to avert full system blackouts.",
      skill3Title:"Data analysis and automation",skill3Body:"Python and data tooling, directly useful for studies, simulation and measurement analysis.",
      skill4Title:"Continuous improvement",skill4Body:"Measure, adjust, standardize. Increased a team’s development speed by 43%.",
      skill5Title:"Project management",skill5Body:"20+ projects delivered with varied stakeholders, tight timelines and shifting requirements.",
      skill6Title:"Rigour and documentation",skill6Body:"Peer review, clear documentation and adherence to standards, built through daily practice.",
      contactTitle:"Let’s discuss your project."
    },
    es:{
      title:"Freddy Hidalgo-Monchez — Candidato a la profesión de ingeniero",
      navAreas:"Áreas",navSkills:"Competencias",navMission:"Misión",navSoftware:"Software",navBlog:"Blog",navContact:"Contacto",
      heroTitle:"Candidato a la profesión de ingeniero (CPI) en electricidad.",
      heroSub:"Apasionado por la fiabilidad, la distribución, y la protección y control de las redes eléctricas.",
      ctaContact:"Contáctame",
      missionLabel:"Misión",
      mission:"Graduado en ingeniería eléctrica, pasé varios años haciendo fiables, depurando y asegurando sistemas de los que dependen miles de usuarios cada día.",
      mission2:"Hoy, busco poner mi experiencia al servicio de un equipo de ingeniería que comparta mi pasión por la energía renovable y las redes eléctricas.",
      areasLabel:"Áreas de interés",
      area1Title:"Distribución",area1Body:"Diseño y operación de redes de distribución, desde la subestación hasta el cliente.",
      area2Title:"Protección y control",area2Body:"Esquemas de protección, coordinación de relés y automatización de subestaciones.",
      area3Title:"Estudios de redes eléctricas",area3Body:"Flujo de potencia, cortocircuito, estabilidad y planificación de la red.",
      skillsLabel:"Competencias",
      skillsTitle:"Lo que aporto a un equipo de ingeniería.",
      skill1Title:"Diagnóstico de fallas",skill1Body:"Varios años aislando la causa raíz de fallas en sistemas en producción, con método y bajo presión.",
      skill2Title:"Fiabilidad y gestión de riesgos",skill2Body:"Reducción del 50 % de fallos de seguridad y desacoplamiento de dependencias para evitar caídas totales.",
      skill3Title:"Análisis de datos y automatización",skill3Body:"Python y herramientas de datos, útiles para estudios, simulación y análisis de mediciones.",
      skill4Title:"Mejora continua",skill4Body:"Medir, ajustar, estandarizar. Aumento del 43 % en la velocidad de desarrollo de un equipo.",
      skill5Title:"Gestión de proyectos",skill5Body:"Más de 20 proyectos entregados con partes interesadas diversas, plazos ajustados y requisitos cambiantes.",
      skill6Title:"Rigor y documentación",skill6Body:"Revisión entre pares, documentación clara y cumplimiento de normas, una práctica diaria.",
      contactTitle:"Hablemos de su proyecto."
    }
  };
  var root=document.documentElement,
      nodes=document.querySelectorAll('[data-i18n]'),
      btns=document.querySelectorAll('.lang button');

  /* snapshot the French markup so switching back needs no duplicate copy */
  COPY.fr={};
  for(var i=0;i<nodes.length;i++){COPY.fr[nodes[i].dataset.i18n]=nodes[i].textContent;}

  function apply(lang){
    var c=COPY[lang];
    for(var i=0;i<nodes.length;i++){var v=c[nodes[i].dataset.i18n];if(v!=null)nodes[i].textContent=v;}
    for(var j=0;j<btns.length;j++){btns[j].setAttribute('aria-pressed',btns[j].dataset.lang===lang?'true':'false');}
    root.lang=lang;
  }
  for(var k=0;k<btns.length;k++){
    btns[k].addEventListener('click',function(){
      var lang=this.dataset.lang;
      try{localStorage.setItem('fhm-lang',lang);}catch(e){}
      apply(lang);
    });
  }
  try{var saved=localStorage.getItem('fhm-lang');if(saved&&COPY[saved]&&saved!=='fr')apply(saved);}catch(e){}
})();
