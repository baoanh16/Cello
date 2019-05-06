$(document).ready(function () {
	var swiper = new Swiper('.checkout.step-1 .swiper-container', {
		slidesPerView: 5,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.checkout.step-1 .swiper-next',
			prevEl: '.checkout.step-1 .swiper-prev'
		},
		breakpoints: {
			1200: {
				slidesPerView: 4
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 10
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 10
			},
			576: {
				slidesPerView: 2
			}
		}
	})
});