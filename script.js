var nav = document.querySelector('.menu');
var burger = document.querySelector('.burger');

document.addEventListener("DOMContentLoaded", function(){
    nav.classList.add('anim-disabled');
    burger.classList.add('anim-disabled');
});

window.addEventListener('resize', function(){
   if (nav.classList.contains('menu-hide') && burger.classList.contains('burger-position')) {
       nav.classList.add('anim-disabled');
       burger.classList.add('anim-disabled');
}

});

burger.addEventListener('click', function () {
    nav.classList.toggle('menu-hide');
    nav.classList.remove('anim-disabled');

    burger.classList.toggle('burger-position');
    burger.classList.toggle('burger-anim-in')
    burger.classList.remove('anim-disabled');

    burger.classList.toggle('burger-mark');
});
