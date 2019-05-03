$(document).ready(function () {
	var swiper = new Swiper('.cello-newsSlide .swiper-container', {
		slidesPerView: 5,
		spaceBetween: 20,
		pagination: {
			el: '.cello-newsSlide .swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			1200: {
				slidesPerView: 4
			},
			992: {
				slidesPerView: 3
			},
			768: {
				slidesPerView: 2
			},
			576: {
				slidesPerView: 1.5,
			}


		}
	})

	if ($(window).width() < 992) {
		$('.cello-news .part-news').addClass('swiper-container')
		$('.cello-news .part-news .row').removeClass('row').addClass('swiper-wrapper')
		$('.cello-news .part-news .swiper-wrapper .col-md-6').each(function () {
			$(this).removeClass('col-md-6').addClass('swiper-slide')
		})
		var HomeNews = new Swiper('.cello-news .swiper-container', {
			slidesPerView: 3,
			speed: 1100,
			spaceBetween: 10,
			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				576: {
					slidesPerView: 1.5,
					spaceBetween: 10,
				}
			}
		})
	}


})