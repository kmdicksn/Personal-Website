import * as bootstrap from 'bootstrap';

const resumeClick = () => {
	window.open('https://dickson-ngan.s3.us-west-1.amazonaws.com/resume.pdf', '_blank').focus();
}

const githubClick = () => {
	window.open('https://github.com/kmdicksn', '_blank').focus();
}

function submitToAPI(e) {
	e.preventDefault();
	const URL = 'https://t053z5cah1.execute-api.us-west-1.amazonaws.com/personal-website';

	if ($(".nameInput").val() === "") {
		alert ("Name can not less than 2 char");
		return;
	}

	if ($(".subject-input").val() === "") {
		alert ("Please enter a valid subject.");
		return;
	}

	if ($(".email-input").val() === "") {
		alert ("Please enter valid email address");
		return;
	}

	if ($(".email-body").val() === "") {
		alert ("Please enter a valid message.");
		return;
	}

	const name = $('.name-input').val();
	const subject = $('.subject-input').val();
	const email = $('.email-input').val();
	const body = $('.email-body').val();
	const data = {
		name: name,
		subject: subject,
		email: email,
		body: body,
	};

	console.log(data);

	$.ajax({
		type: "POST",
		url : URL,
		dataType: "json",
		crossDomain: "true",
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(data),


		success: function () {
			// clear form and show a success message
			alert("Message sent! Thanks so much, I'll get back to you as soon as possible!");
			document.getElementById("contact-form").reset();
			location.reload();
		},
		error: function () {
			// show an error message
			alert("Something seems to have went wrong! If you'd like, you can email me directly from the button below.");
		}});
}

window.resumeClick = resumeClick;
window.githubClick = githubClick;
window.submitToAPI = submitToAPI;