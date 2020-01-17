let backPage = document.querySelector(".back-page");
let menuButton = document.querySelector(".hamburger");
let menu = document.querySelector(".hamburger-nav-links");
let crossMenuButton = document.querySelector(".cross-button-menu");
let eyeToggle = document.querySelector(".toggle-password");
let passwordInput = document.querySelector("#login-password-input");

menuButton.addEventListener("click",displayMenu);
function displayMenu(){
    menu.style.animation = "hamburger-menu-anim 1.2s 0.3s forwards";
    backPage.style.display = "block";
    backPage.addEventListener("click",()=>{
        menu.style.animation = "closeMenuAnim 1.2s 0.1s forwards";
        backPage.style.display = "none";
    })
    crossMenuButton.addEventListener("click",()=>{
        menu.style.animation = "closeMenuAnim 1.2s 0.1s forwards";
        backPage.style.display = "none";
    })
}

eyeToggle.addEventListener("click",showPassword);
function showPassword(){
    eyeToggle.classList.toggle("fa-eye-slash");
    if ( passwordInput.type === "text" ){
        passwordInput.type = "password" ;
    }
    else {
        passwordInput.type = "text" ;
    }
}