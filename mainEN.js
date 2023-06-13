const  typed = new Typed('.typed', {
    strings: ['I´m <i>Daniel</i> Mejía', 'If we can <i>imagine</i> it we can <i>create it</i>'],
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

   btn.value = 'Sending...';

   const serviceID = 'service_v1fg7gl';
   const templateID = 'template_anophpm';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
