$(document).ready(function () {
	var slideLeftSound = new Swiper('.cello-sound .content .left-content .swiper-container', {
		// direction: 'vertical',
		slidesPerView: 3,
		slidesPerColumn: 4,
		spaceBetween: 10,
		navigation: {
			nextEl: '.cello-sound .swiper-next'
		},
		breakpoints: {
			1200: {
				slidesPerColumn: 3,
			},
			992: {
				slidesPerColumn: 2,
			}
		}
	});
	var slideRightSound = new Swiper('.cello-sound .content .right-content .swiper-container', {
		// direction: 'vertical',
		slidesPerView: 2,
		spaceBetween: 30,
		mousewheelControl: true,
		pagination: {
			el: '.cello-sound .swiper-pagination',
			clickable: true,
			// dynamicBullets: true,
		},
		breakpoints: {
			576: {
				slidesPerView: 1.5,
			}
		}
	});
})