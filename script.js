// Fade-in al hacer scroll
const faders = document.querySelectorAll('.fade-in');

function checkFade() {
  const triggerBottom = window.innerHeight * 0.95;

  faders.forEach(fader => {
    const top = fader.getBoundingClientRect().top;
    if(top < triggerBottom) {
      fader.classList.add('show');
    } else {
      fader.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);

// Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const mainContent = document.getElementById('main-content');

  // Mantener la pre-carga por 3 segundos
  setTimeout(() => {
    preloader.style.opacity = '0'; // fade out
    preloader.style.pointerEvents = 'none'; 
    setTimeout(() => {
      preloader.style.display = 'none'; // desaparece totalmente
      mainContent.style.opacity = '1';  // muestra contenido principal
    }, 500); 
  }, 3000); 
});

const content = document.querySelector('.content');

content.addEventListener('mouseenter', () => {
    content.style.overflowY = 'scroll';
});

content.addEventListener('mouseleave', () => {
    content.style.overflowY = 'hidden';
});

