const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListner("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener('scroll',()=>{
if    (document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");

}
});