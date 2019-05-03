$(document).ready(function () {
	var fanpageSlide = new Swiper('.cello-fanpage .swiper-container', {
		slidesPerView: 5,
		spaceBetween: 10,
		pagination: {
			el: '.cello-fanpage .swiper-pagination',
			clickable: true,
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
				slidesPerView: 1.5
			}


		}
	})

})