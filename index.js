import './index.css';

const cookieButton = document.querySelector('.cookie-consent__button');
const cookieConsent = document.querySelector('.cookie-consent');

const isExistCookie = localStorage.getItem('cookie') === 'true';

if (isExistCookie) cookieConsent.classList.add('hide');

cookieButton.addEventListener('click', (event) => {
  cookieConsent.classList.add('hide');
  localStorage.setItem('cookie', 'true');
});
