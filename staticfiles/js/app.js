new fullpage('#fullpage', {
	//options here
	scrollingSpeed: 1000,
	autoScrolling: true,
	scrollHorizontally: true,
	slideSelector: '.horizontal-scrolling',
	slidesNavigation: true,
	navigation: true,
	navigationTooltips: [
		'home',
		'what is u-connect?',
		'why u-connect?',
		'blogs',
		'services',
		'about',
		'suggestions',
		'contact us'
	],
	anchors: [ 'homePage', 'whatPage', 'examplesPage', 'blogsPage', 'servicesPage', 'aboutPage', 'suggestionPage' ]
});

let loginButton = document.querySelector('#login-page-display-button');
let signupButton = document.querySelector('#signup-page-display-button');
let loginPage = document.querySelector('.login-form-page');
let signupPage = document.querySelector('.signup-form-page');
let backPage = document.querySelector('.back-page');
let menuButton = document.querySelector('.hamburger');
let menu = document.querySelector('.hamburger-nav-links');
let crossMenuButton = document.querySelector('.cross-button-menu');
let alreadyButton = document.querySelector('.signup-already-div');
let dontHaveButton = document.querySelector(".dont-have-div");
let eyeToggle = document.querySelector(".toggle-password");
let passwordInput = document.querySelector("#login-password-input");
let eyeToggle1 = document.querySelector(".toggle-password-1");
let eyeToggle2 = document.querySelector(".toggle-password-2");
let signupPasswordInput = document.querySelector("#signup-password-input");
let confirmPasswordInput = document.querySelector("#signup-confirm-password-input");

loginButton.addEventListener('click', displayLoginPage);
function displayLoginPage() {
	loginPage.style.display = 'flex';
	backPage.style.display = 'block';
	backPage.addEventListener('click', () => {
		loginPage.style.display = 'none';
		backPage.style.display = 'none';
	});
}

signupButton.addEventListener('click', displaySignupPage);
function displaySignupPage() {
	signupPage.style.display = 'flex';
	backPage.style.display = 'block';
	backPage.addEventListener('click', () => {
		signupPage.style.display = 'none';
		backPage.style.display = 'none';
	});
}

menuButton.addEventListener('click', displayMenu);
function displayMenu() {
	// menu.style.animation = 'hamburger-menu-anim 1.2s 0.3s forwards';
	menu.style.transform = "none";
	backPage.style.display = 'block';
	backPage.addEventListener('click', () => {
		// menu.style.animation = 'closeMenuAnim 1.2s 0.1s forwards';
		backPage.style.display = 'none';
		menu.style.transform = "translate(110%)";
	});
	crossMenuButton.addEventListener('click', () => {
		// menu.style.animation = 'closeMenuAnim 1.2s 0.1s forwards';
		backPage.style.display = 'none';
		menu.style.transform = "translate(110%)";
	});
}

alreadyButton.addEventListener('click', displayLoginOnAlready);
function displayLoginOnAlready() {
	signupPage.style.display = 'none';
    loginPage.style.display = 'flex';
    backPage.addEventListener('click', () => {
		loginPage.style.display = 'none';
		backPage.style.display = 'none';
	});
}

dontHaveButton.addEventListener("click",displaySignupOnDontHave);
function displaySignupOnDontHave(){
    signupPage.style.display = 'flex';
    loginPage.style.display = 'none';
    backPage.addEventListener('click', () => {
		signupPage.style.display = 'none';
		backPage.style.display = 'none';
	});
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

eyeToggle1.addEventListener("click",showSignupPassword);
function showSignupPassword(){
    eyeToggle1.classList.toggle("fa-eye-slash");
    if ( signupPasswordInput.type === "text" ){
        signupPasswordInput.type = "password" ;
    }
    else {
        signupPasswordInput.type = "text" ;
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