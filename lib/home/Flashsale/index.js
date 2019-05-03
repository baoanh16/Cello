$(document).ready(function () {
	var swiper = new Swiper('.cello-flashSale .swiper-container', {
		slidesPerView: 5,
		pagination: {
			el: '.cello-flashSale .swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.cello-flashSale .swiper-next',
			prevEl: '.cello-flashSale .swiper-prev'
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
				slidesPerView: 3,
				spaceBetween: 10
			},
			576: {
				slidesPerView: 1.5,
				spaceBetween: 10
			}
		}
	})
	// $(function () {
	// 	var maxHeight = 0;
	// 	$(".cello-flashSale .swiper-container .productItem .bottom-item .name h5").each(function () {
	// 		if ($(this).outerHeight() > maxHeight) {
	// 			maxHeight = $(this).outerHeight();
	// 		}
	// 	}).height(maxHeight);
	// })

})