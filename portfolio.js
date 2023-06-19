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
