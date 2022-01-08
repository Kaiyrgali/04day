const ON = document.querySelector('#On');
const OFF = document.querySelector('#Off');
const CONTAINER = document.querySelector('.container');
const CIRCLE = document.querySelector('.circle');
const NAVIGATION = document.querySelector('nav');

ON.addEventListener("click", function() {
    CONTAINER.classList.add('rotate');
    NAVIGATION.classList.add('rotate');
    ON.classList.remove('show');
    ON.classList.add('hide');
    OFF.classList.remove('hide');
    OFF.classList.add('show');
});

OFF.addEventListener("click", function() {
    CONTAINER.classList.remove('rotate');
    NAVIGATION.classList.remove('rotate');
    OFF.classList.remove('show');
    OFF.classList.add('hide');
    ON.classList.remove('hide');
    ON.classList.add('show');
});
