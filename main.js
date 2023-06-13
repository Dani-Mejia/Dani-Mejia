const  typed = new Typed('.typed', {
    strings: ['Yo soy <i>Daniel</i> Mejía', 'Si lo podemos <i>imaginar</i> lo podemos <i>crear</i>'],
    typeSpeed: 40,
    backSpeed: 45,
    loop: true,
    startDelay:300,
    backDelay:1500,
    shuffle: null,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html',
    loopCount: false,
     
});


const btn = document.getElementById('Btn-submit');

document.getElementById('Form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'service_v1fg7gl';
   const templateID = 'template_anophpm';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar mensaje';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Enviar mensaje';
      alert(JSON.stringify(err));
    });
});

