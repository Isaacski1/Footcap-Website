const hambuger = document.querySelector(".hambuger");
const navmenu = document.querySelector(".navmenu");

hambuger.addEventListener("click", () => {
    hambuger.classList.toggle("active");
    navmenu.classList.toggle("active");
})


// Background Pre-Loader
setTimeout(function(){
    $('.backgroud-preloader').fadeToggle();
}, 2500)