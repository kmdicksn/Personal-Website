import * as bootstrap from 'bootstrap';

const resumeClick = () => {
	window.open('https://dickson-ngan.s3.us-west-1.amazonaws.com/resume.pdf', '_blank').focus();
}

const githubClick = () => {
	window.open('https://github.com/kmdicksn', '_blank').focus();
}

const sendMail = (mail) => {
	fetch("https://dickson-ngan.me/send", {
		method: "post",
		body: mail,
	}).then((response) => {
		return response.json();
	})
}

const form = document.getElementById("contact-form");

const formSubmit = form.addEventListener("submit", (event) => {
	event.preventDefault();

	let email = new FormData(form);

	sendEmail(mail);
})

window.resumeClick = resumeClick;
window.githubClick = githubClick;