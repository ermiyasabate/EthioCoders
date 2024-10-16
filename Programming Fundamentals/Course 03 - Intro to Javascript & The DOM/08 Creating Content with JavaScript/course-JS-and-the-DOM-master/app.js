document.addEventListener('click', function () {
    const mainHeading = document.querySelector('h1')

    mainHeading.style.backgroundColor = 'red';
})


const lotsOfElements = document.querySelectorAll('.quizzing-quizzby');
const element = lotsOfElements[2];

element.addEventListener('animationend', function () {
    const mainHeading = document.querySelector('h1');
    mainHeading.style.backgroundColor = 'purple'; 
});