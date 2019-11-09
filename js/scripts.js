window.onload = function(){

    $('.partners__list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                //сообщает, при какой ширине экрана нужно включать настройки
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 610,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });

    $('.comments__list').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                //сообщает, при какой ширине экрана нужно включать настройки
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });

window.addEventListener('resize', function(){
    let width = window.innerWidth;
    let menu = document.querySelector('.header__menu');
    if (width >1024) {
        menu.style.cssText = "display: block; position: relative; right: 0; background-color: none; padding: 0; transition: display .25s ease;";
    } else {
        menu.style.cssText = "display: none;";
    }
});

let hamburger = document.querySelector('.hamburger');
let openHamburger = false;
hamburger.onclick = function(){
   if (!openHamburger) {
       showMenu();
       openHamburger = true;
   } else {
       hideMenu();
       openHamburger = false;
   }
};
};

function showMenu(){
    let spanTop = document.querySelector('.hamburger__span-top');
    let spanMiddle = document.querySelector('.hamburger__span-middle');
    let spanBottom = document.querySelector('.hamburger__span-bottom');
    let menu = document.querySelector('.header__menu');

    spanTop.style.cssText = "transform: rotate(45deg) translate(5px, 5px); transition: all .25s ease;";
    spanMiddle.style.cssText = "transform:translateX(-20px); opacity:0; transition: all .25s ease;";
    spanBottom.style.cssText = "transform: rotate(-45deg) translate(5px, -5px); transition: all .25s ease;";
    menu.style.cssText = "display: block; position: absolute; right: 15px; background-color: rgba(0,0,0,0.35); padding: 20px; transition: display .25s ease;";

    window.addEventListener('resize', function(){
        let width = window.innerWidth;
        if (width >1024) {
            spanTop.style.cssText = "transform: rotate(0deg) translate(0, 0); transition: all .25s ease;";
            spanMiddle.style.cssText = "transform:translateX(0); opacity:1; transition: all .25s ease;";
            spanBottom.style.cssText = "transform: rotate(0deg) translate(0, 0); transition: all .25s ease;";
        }
    });
}

function hideMenu(){
    let menu = document.querySelector('.header__menu');
    let spanTop = document.querySelector('.hamburger__span-top');
    let spanMiddle = document.querySelector('.hamburger__span-middle');
    let spanBottom = document.querySelector('.hamburger__span-bottom');

    spanTop.style.cssText = "transform: rotate(0deg) translate(0, 0); transition: all .25s ease;";
    spanMiddle.style.cssText = "transform:translateX(0); opacity:1; transition: all .25s ease;";
    spanBottom.style.cssText = "transform: rotate(0deg) translate(0, 0); transition: all .25s ease;";
    menu.style.cssText = "display: none; position: relative; right: 0; background-color: none; padding: 0; transition: display .25s ease;";
}

