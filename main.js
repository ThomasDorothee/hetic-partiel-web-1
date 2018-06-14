var burger = document.querySelector('.navBurger');
var nav = document.querySelector('#mainav');

burger.addEventListener('click', function() {
nav.style.display='block'
});


var scrolltop = document.querySelector('.hook');
scrolltop.addEventListener("click", function() {
	window.scroll({
	  top: 0,
	  left: 0,
	  behavior: 'smooth'
	});
});
