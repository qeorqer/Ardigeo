const themeSwitcher = document.querySelector(".switch");
const themeSwitchInput = document.querySelector(".switch input");

//changing the theme on click
themeSwitcher.addEventListener("click", () => {
	let flag = themeSwitchInput.checked;
	if(flag){
		document.documentElement.style.setProperty('--dark-bg', ' #262626');
		document.documentElement.style.setProperty('--light-bg', '#171717 ');
		document.documentElement.style.setProperty('--header-bg', 'rgb(12, 18, 24)');
		document.documentElement.style.setProperty('--txt-dark', ' #fff');
		document.documentElement.style.setProperty('--footer-bg', 'rgb(12, 18, 24)');
		document.documentElement.style.setProperty('--txt-secondaryDark', ' #898989');
		document.documentElement.style.setProperty('--line-color', ' transparent');
		document.documentElement.style.setProperty('--shadow-color', 'transparent');
		document.documentElement.style.setProperty('--hover-color', ' #BD1E2C');

	} else{
		document.documentElement.style.setProperty('--dark-bg', ' #f8f8f8');
		document.documentElement.style.setProperty('--light-bg', ' #fff');
		document.documentElement.style.setProperty('--header-bg', ' #fff');
		document.documentElement.style.setProperty('--txt-dark', ' #5d5d5d');
		document.documentElement.style.setProperty('--footer-bg', ' #0c1218');
		document.documentElement.style.setProperty('--txt-secondaryDark', ' #898989');
		document.documentElement.style.setProperty('--line-color', ' #e1e1e1');
		document.documentElement.style.setProperty('--shadow-color', 'rgba(168, 166, 168, .72)');
		document.documentElement.style.setProperty('--hover-color', ' #3797dd');
	}
	
})

//toggling the menu
const menuToggler = document.querySelector(".menu__toggler");
const menu = document.querySelector(".menu");
menuToggler.addEventListener("click", () => {
	menuToggler.classList.toggle("menuOpen");
	menu.classList.toggle("menuOpen");
})