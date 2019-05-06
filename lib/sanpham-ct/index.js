

$(document).ready(function () {

	$('body').on('click', '.cello-spList .productInfo .color span a', function (e) {
		e.preventDefault()
		$(this).addClass('active')
		$(this).siblings().removeClass('active')
	})
	if ($('.product-description').length > 0) {
		$('.product-description .content').append('<div class="viewmore">Xem Thêm</div>')
	}
	$('body').on('click', '.product-description .content .viewmore', function (e) {
		e.preventDefault()
		$(this).parents('.product-description .content').addClass('active')
		$(this).remove()
	})


	var productSlider2 = new Swiper('.cello-spList .productSlider-2 .swiper-container', {
		slidesPerView: 5,
		// loop: true,
		spaceBetween: 10,
		breakpoints: {
			992: {
				slidesPerView: 4,
				spaceBetween: 10
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 10
			},
			576: {
				slidesPerView: 2
			}
		}
	})

	$('.productInfo .quantity .decrease').click(function () {
		var curVal = $('#number').val()
		curVal--
		if (curVal < 0) {
			curVal = 0;
		}
		$('#number').attr('value', curVal)
	})
	$('.productInfo .quantity .increase').click(function () {
		var curVal = $('#number').val()
		curVal++
		if (curVal > 100) {
			curVal = 100;
		}
		$('#number').attr('value', curVal)
	})

	var videoProductDetail = new Swiper('.productDetail-2 .video .swiper-container', {
		slidesPerView: 1,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		navigation: {
			prevEl: '.productDetail-2 .video .swiper-navigation .swiper-prev',
			nextEl: '.productDetail-2 .video .swiper-navigation .swiper-next'
		}
	})
	if ($('.commentpanel').length > 0) {
		$('.commentpanel').appendTo('.comments')
	}
});