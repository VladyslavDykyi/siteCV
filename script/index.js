const iconObj = {
    dark: './img/favicon-dark.ico',
    light: './img/favicon-light.ico',
};

const btn = document.querySelector('#teme-swiper');
const body = document.querySelector('body');
const favicon = document.querySelector('[rel="shortcut icon"]');

function swapTeme() {
    body.classList.toggle('light');
    if (body.classList.contains('dark')) {
        favicon.setAttribute('href', iconObj.dark)
    } else {
        favicon.setAttribute('href', iconObj.light)
    }
}

btn.addEventListener('click', swapTeme);