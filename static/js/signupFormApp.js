let backPage = document.querySelector(".back-page");
let menuButton = document.querySelector(".hamburger");
let menu = document.querySelector(".hamburger-nav-links");
let crossMenuButton = document.querySelector(".cross-button-menu");
let eyeToggle1 = document.querySelector(".toggle-password-1");
let eyeToggle2 = document.querySelector(".toggle-password-2");
let passwordInput = document.querySelector("#signup-password-input");
let confirmPasswordInput = document.querySelector("#signup-confirm-password-input");

menuButton.addEventListener("click",displayMenu);
function displayMenu(){
    // menu.style.animation = "hamburger-menu-anim 1.2s 0.3s forwards";
    menu.style.transform = "none";
    backPage.style.display = "block";
    backPage.addEventListener("click",()=>{
        // menu.style.animation = "closeMenuAnim 1.2s 0.1s forwards";
        menu.style.transform = "translate(110%)";
        backPage.style.display = "none";
    })
    crossMenuButton.addEventListener("click",()=>{
        // menu.style.animation = "closeMenuAnim 1.2s 0.1s forwards";
        menu.style.transform = "translate(110%)";
        backPage.style.display = "none";
    })
}

eyeToggle1.addEventListener("click",showPassword);
function showPassword(){
    eyeToggle1.classList.toggle("fa-eye-slash");
    if ( passwordInput.type === "text" ){
        passwordInput.type = "password" ;
    }
    else {
        passwordInput.type = "text" ;
    }
}

eyeToggle2.addEventListener("click",showConfirmPassword);
function showConfirmPassword(){
    eyeToggle2.classList.toggle("fa-eye-slash");
    if ( confirmPasswordInput.type === "text" ){
        confirmPasswordInput.type = "password" ;
    }
    else {
        confirmPasswordInput.type = "text" ;
    }
}