const burger = document.querySelector("#burger");
const closer = document.querySelector("#close");
const menu = document.querySelector("#nav__menu");

burger.addEventListener('click', function(){
    menu.style.left = 0
});
closer.addEventListener('click', function(){
    menu.style.left = '100%'
})
