let backPage = document.querySelector(".back-page");
let menuButton = document.querySelector(".hamburger");
let menu = document.querySelector(".hamburger-nav-links");
let crossMenuButton = document.querySelector(".cross-button-menu");

menuButton.addEventListener("click",displayMenu);
function displayMenu(){
    menu.style.animation = "hamburger-menu-anim 1.2s 0.3s forwards";
    // backPage.style.display = "block";
    // backPage.addEventListener("click",()=>{
    //     menu.style.animation = "closeMenuAnim 1.2s 0.1s forwards";
    //     backPage.style.display = "none";
    // })
    crossMenuButton.addEventListener("click",()=>{
        menu.style.animation = "closeMenuAnim 1.2s 0.1s forwards";
        // backPage.style.display = "none";
    })
}