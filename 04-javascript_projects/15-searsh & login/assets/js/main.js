// OPEN AND COLSE  MENUconst
const navMenu = document.querySelector('#nav-menu'),
    navToggle = document.querySelector('#nav-toggle'),
    navClose = document.querySelector('#nav-close');

navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
});

navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
});


// OPEN SERACH END CLOSE
const searach = document.querySelector('#search'),
    searchBtn = document.querySelector('#serach-btn'),
    searchClose = document.querySelector('.search-close');

searchBtn.addEventListener('click', () => {
    searach.classList.add('show-search')
});

searchClose.addEventListener('click', () => {
    searach.classList.remove('show-search')
});


const login = document.querySelector('.login'),
    loginBtn = document.querySelector('#login-btn'),
    loginClose = document.querySelector('.login-close');

loginBtn.addEventListener('click', () => {
    login.classList.add('show-login')
});

loginClose.addEventListener('click', () => {
    login.classList.remove('show-login')
})

