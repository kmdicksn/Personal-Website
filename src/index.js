import * as bootstrap from 'bootstrap';

window.onscroll = function() {
	let currentScrollPos = window.pageYOffset;
	let opacity = 1 / currentScrollPos;

	if (opacity > 1) {
		opacity = 1;
	}

	document.getElementById("mouse").style.opacity = (opacity).toString()


}