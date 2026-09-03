const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');

    menuToggle.setAttribute(
      'aria-expanded',
      String(isOpen)
    );
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');

      menuToggle.setAttribute(
        'aria-expanded',
        'false'
      );
    });
  });
}


// Ano automático do rodapé

const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}


// Mensagem de boas-vindas

const greeting = document.querySelector('#message-greeting');
const messageTrack = document.querySelector('#message-track');

const greetingShown = sessionStorage.getItem('micheleGreetingShown');

if (greeting && messageTrack) {

  if (!greetingShown) {

    // Mostra "Olá, Michele!"

    greeting.classList.add('show');

    sessionStorage.setItem(
      'micheleGreetingShown',
      'true'
    );

    // Depois de 3 segundos,
    // troca para o looping normal

    setTimeout(() => {

      greeting.style.opacity = '0';
      greeting.style.transform = 'translateY(-8px)';

      setTimeout(() => {

        greeting.classList.remove('show');

        messageTrack.classList.add('show');

      }, 500);

    }, 3000);

  } else {

    // Se já apareceu nessa sessão,
    // mostra direto o looping

    messageTrack.classList.add('show');

  }

}