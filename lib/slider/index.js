$(document).ready(function () {
	let celloSlider = new Swiper('.cello-slider .swiper-container', {
		autoplay: {
			delay: 5000
		},
		speed: 1000,
		loop: true,
		lazy: true,
		effect: 'coverflow',
		coverflowEffect: {
			rotate: 45,
			slideShadows: false,
		},
		allowTouchMove: true,
		navigation: {
			nextEl: '.cello-slider .swiper-next',
			prevEl: '.cello-slider .swiper-prev',
		},
	})
	var homeBannerProduct = new Swiper('.cello-banner .top-banner .swiper-container', {
		slidesPerView: 1,
		speed: 1200,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		loop: true,
		pagination: {
			el: '.cello-banner .swiper-pagination',
			clickable: true,
		},
		navigation: {
			prevEl: '.cello-banner .swiper-prev',
			nextEl: '.cello-banner .swiper-next'
		}
	})

})