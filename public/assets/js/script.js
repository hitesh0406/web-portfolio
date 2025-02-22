// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  themeToggle.querySelector('.fa-moon').classList.toggle('hidden');
  themeToggle.querySelector('.fa-sun').classList.toggle('hidden');
});

// Particles.js
particlesJS.load('particles-js', '/assets/js/particles.json', function() {
  console.log('Particles.js loaded');
});

document.addEventListener(DOMContentLoaded,function(){
  const textElement = document.getElementById("typewriter-text");
  const text = textElement.innerHTML;
  textElement.innerHTML = "";
  let index = 0;
  function type(){
    if(index < text.length){
      textElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(type,100);


    }
  }
  type();

})

