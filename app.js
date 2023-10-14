

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const navbar = document.querySelector(".nav-links-bio");
const navbar2 = document.querySelector(".nav-links-con");
let lastScrollY=window.scrollY;
navbar2.classList.add("nav-links-con");
window.addEventListener("scroll",()=>{
	if(700<window.scrollY){
		navbar.classList.remove("nav-links-bio");
		navbar2.classList.add("nav-links-con");
	}
	else{
		navbar.classList.add("nav-links-bio");
		navbar2.classList.remove("nav-links-con");
	}
});

window.onload = navbar2.classList.remove("nav-links-con");

menu.addEventListener('click',function() {
	menu.classList.toggle('is-active');
	menu.classList.toggle('active');

})