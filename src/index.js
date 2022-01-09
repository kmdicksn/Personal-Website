import * as bootstrap from 'bootstrap';

const resumeClick = () => {
	window.open('https://dickson-ngan.s3.us-west-1.amazonaws.com/resume.pdf', '_blank').focus();
}

const githubClick = () => {
	window.open('https://github.com/kmdicksn', '_blank').focus();
}

window.resumeClick = resumeClick;
window.githubClick = githubClick;