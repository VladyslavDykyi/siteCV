const iconObj = {
    dark: './img/favicon-dark.ico',
    light: './img/favicon-light.ico',
};

const btn = document.querySelector('#theme-swiper');
const body = document.querySelector('body');
const favicon = document.querySelector('[rel="shortcut icon"]');

function swapTheme() {
    body.classList.toggle('light');
    if (!body.classList.contains('light')) {
        favicon.setAttribute('href', iconObj.dark)
    } else {
        favicon.setAttribute('href', iconObj.light)
    }
}

btn.addEventListener('click', swapTheme);