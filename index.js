import hamburgerMenu from './modules/hamburgerMenu.js';
import observerAnimation from './modules/observerAnimation.js';
import observerCounter from './modules/observerCounter.js';
import stickyHeader from './modules/stickyHeader.js';
import mobileScreen from './modules/mobileScreen.js';
import carousel from './modules/carousel.js';
import validationForm from './modules/validationForm.js';

function init() {
	mobileScreen();
	carousel();
	hamburgerMenu();	
	observerCounter();
	stickyHeader();
	validationForm();
}
observerAnimation();

window.addEventListener('load', init);