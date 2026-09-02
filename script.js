const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const animatedMessage = document.querySelector("#animated-message");

let messageIndex = 0;

setInterval(() => {
  animatedMessage.style.opacity = "0";
  animatedMessage.style.transform = "translateY(-8px)";

  setTimeout(() => {
    messageIndex = (messageIndex + 1) % messages.length;

    animatedMessage.textContent = messages[messageIndex];

    animatedMessage.style.transform = "translateY(8px)";

    requestAnimationFrame(() => {
      animatedMessage.style.opacity = "1";
      animatedMessage.style.transform = "translateY(0)";
    });
  }, 400);

}, 3000);