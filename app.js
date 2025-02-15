const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const navbar = document.querySelector(".nav-links-bio");
const navbar2 = document.querySelector(".nav-links-con");
const navbar3 = document.querySelector(".nav-links-pro");
let lastScrollY = window.scrollY;

navbar.classList.add("nav-links-bio");
window.addEventListener("scroll", () => {
	if (window.scrollY > 869 && window.scrollY < 2469) {
		
		navbar.classList.remove("nav-links-bio");
		navbar2.classList.remove("nav-links-con");
		navbar3.classList.add("nav-links-pro");
	} else if (window.scrollY > 2468) {
		navbar.classList.remove("nav-links-bio");
		navbar2.classList.add("nav-links-con");
		navbar3.classList.remove("nav-links-pro");
	} else {
		navbar.classList.add("nav-links-bio");
		navbar2.classList.remove("nav-links-con");
		navbar3.classList.remove("nav-links-pro");
	}
});

window.onload = () => {
	navbar2.classList.remove("nav-links-con");
	navbar3.classList.remove("nav-links-pro");
};

menu.addEventListener('click', function() {
	menu.classList.toggle('is-active');
	menu.classList.toggle('active');
});