function scrollToSection(sectionId) {
	const navbarHeight = $('.main-header').outerHeight(true);

	if ($(sectionId).length) {
		$('html, body').animate(
			{
				scrollTop: $(sectionId).offset().top - navbarHeight,
			},
			1000
		);
	}
}

document.addEventListener('DOMContentLoaded', function () {
	const emailToCopy = document.querySelector('.email-tooltip');
	const emailText = emailToCopy.getAttribute('data-email');

	emailToCopy.addEventListener('click', function () {
		navigator.clipboard
			.writeText(emailText)
			.then(function () {
				console.log('Email copied to clipboard!');
			})
			.catch(function (error) {
				console.error('Failed to copy email to clipboard:', error);
			});
	});
});

const openModal = document.querySelector('[data-open-modal]');
const closeModal1 = document.querySelector('[data-close-modal1]');
const closeModal2 = document.querySelector('[data-close-modal2]');
const modal = document.querySelector('[data-modal]');
openModal.addEventListener('click', () => {
	modal.showModal();
});
closeModal1.addEventListener('click', () => {
	modal.close();
});
closeModal2.addEventListener('click', () => {
	modal.close();
});
modal.addEventListener('click', (e) => {
	const dimensions = modal.getBoundingClientRect();
	if (
		e.clientX < dimensions.left ||
		e.clientX > dimensions.right ||
		e.clientY < dimensions.top ||
		e.clientY > dimensions.bottom
	) {
		modal.close();
	}
});

function subtract() {
	// Get the current year
	const currentYear = new Date().getFullYear();
	// Perform subtraction
	const result = currentYear - 1996;
	document.getElementById('result').textContent = result;
}

function toggleLightMode() {
	const navbar = document.getElementsByClassName('nav-custom-color-dark');
	for (let i = 0; i < navbar.length; i++) {
		navbar[i].classList.toggle('nav-custom-color-light');
	}

	const navbartxt = document.getElementsByClassName('navtxt-custom-color-dark');
	for (let i = 0; i < navbartxt.length; i++) {
		navbartxt[i].classList.toggle('navtxt-custom-color-light');
	}

	const home = document.getElementById('home');
	home.classList.toggle('home-light');

	const personalInfo = document.getElementById('personal-info');
	personalInfo.classList.toggle('personal-info-light');

	const experience = document.getElementById('experience');
	experience.classList.toggle('experience-light');

	const education = document.getElementById('education');
	education.classList.toggle('education-light');

	const skills = document.getElementById('skills');
	skills.classList.toggle('skills-light');

	const transparentBox = document.getElementsByClassName('transparent-dark');
	for (let i = 0; i < transparentBox.length; i++) {
		transparentBox[i].classList.toggle('transparent-light');
	}

	const customTxtColor = document.getElementsByClassName('custom-text-color-dark');
	for (let i = 0; i < customTxtColor.length; i++) {
		customTxtColor[i].classList.toggle('custom-text-color-light');
	}

	const softskill = document.getElementsByClassName('softskill-fill-dark');
	for (let i = 0; i < softskill.length; i++) {
		softskill[i].classList.toggle('softskill-fill-light');
	}

	const exp = document.getElementsByClassName('exp-fill-dark');
	for (let i = 0; i < exp.length; i++) {
		exp[i].classList.toggle('exp-fill-light');
	}

	const modalContent = document.getElementsByClassName('modal-content');
	for (let i = 0; i < modalContent.length; i++) {
		modalContent[i].classList.toggle('modal-content-light');
	}

	const modalTxt = document.getElementsByClassName('modal-text-color-dark');
	for (let i = 0; i < modalTxt.length; i++) {
		modalTxt[i].classList.toggle('modal-text-color-light');
	}

	const modalBtn = document.getElementsByClassName('modal-button-color-dark');
	for (let i = 0; i < modalBtn.length; i++) {
		modalBtn[i].classList.toggle('modal-button-color-light');
	}

	const glass = document.getElementsByClassName('glass-dark');
	for (let i = 0; i < glass.length; i++) {
		glass[i].classList.toggle('glass-light');
	}

	const glassTxt = document.getElementsByClassName('larger-txt-dark');
	for (let i = 0; i < glassTxt.length; i++) {
		glassTxt[i].classList.toggle('larger-txt-light');
	}

	const toggleBtn = document.getElementById('toggleBtn');
	toggleBtn.classList.toggle('fa-toggle-off');
	toggleBtn.classList.toggle('fa-toggle-on');
}

function toggleDarkMode() {
	// const
	for (let i = 0; i < elements.length; i++) {
		elements[i].classList.remove(' modal-button-color-dark');
	}
}
