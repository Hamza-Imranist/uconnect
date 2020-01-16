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
console.log("huuhu");
console.log("hamza");
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
	menu.style.animation = 'hamburger-menu-anim 1.2s 0.3s forwards';
	backPage.style.display = 'block';
	backPage.addEventListener('click', () => {
		menu.style.animation = 'closeMenuAnim 1.2s 0.1s forwards';
		backPage.style.display = 'none';
	});
	crossMenuButton.addEventListener('click', () => {
		menu.style.animation = 'closeMenuAnim 1.2s 0.1s forwards';
		backPage.style.display = 'none';
	});
}

<<<<<<< HEAD
alreadyButton.addEventListener('click', displayLoginOnAlready);
function displayLoginOnAlready() {
	signupPage.style.display = 'none';
	loginPage.style.display = 'flex';
=======
menuButton.addEventListener("click",displayMenu);
function displayMenu(){
    menu.style.animation = "hamburger-menu-anim 1.2s 0.3s forwards";
    backPage.style.display = "block";
    backPage.addEventListener("click",()=>{
        menu.style.animation = "closeMenuAnim 1.2s 0.1s forwards";
        backPage.style.display = "none";
    });
    crossMenuButton.addEventListener("click",()=>{
        menu.style.animation = "closeMenuAnim 1.2s 0.1s forwards";
        backPage.style.display = "none";
    })
>>>>>>> djangoIntegration
}
