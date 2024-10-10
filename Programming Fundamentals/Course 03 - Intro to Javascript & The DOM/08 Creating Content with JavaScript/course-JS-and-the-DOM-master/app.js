const start = document.querySelector('#start-now');

start.style.backgroundColor = '#2015ff';
start.style.borderRadius = '5rem';

const hero = document.querySelector('.hero--homepage');
hero.classList.add('new-hero');

const cardList = document.querySelectorAll('.card');
for (i = 0; i < cardList.length; i++) {
    cardList[i].classList.add('new-card');
}