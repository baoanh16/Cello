function navTab() {
	$('.cello-navTab .cello-mbTab').on('click', function () {
		if ($('.cello-navTab ul').is(':hidden') == true) {
			$(this).addClass('active')
			$('.cello-navTab ul').slideDown()
		} else {
			$(this).removeClass('active')
			$('.cello-navTab ul').slideUp()
		}
	})
	if ($(window).width() < 992) {
		// $('.cello-navTab .cello-tabList .item').on('click', function () {
		// 	$('.cello-navTab .cello-mbTab').removeClass('active')
		// 	$('.cello-navTab ul').slideUp()

		// })
	}
	$('.cello-navTab .cello-tabList .item').on('click', function () {
		$('.cello-navTab .cello-tabList .item').removeClass('active')
		$(this).addClass('active')
		let i = $(this).attr('cello-tabItem')
		$('.cello-tabContent .list-item').removeClass('active')
		$('.cello-tabContent .list-item[cello-tabContent=' + i + ']').addClass('active')

	})
}

function productItem() {
	if ($(window).width() >= 992 && $(window).width() < 1200) {
		$('.productItem:nth-child(4n)').each(function () {
			$(this).find('.gift-detail .detail-wrapper').css({
				'left': '-100%',
				'border-radius': 0,
				'border-top-left-radius': '5px',
				'border-bottom-left-radius': '5px'
			})
		})
	}
	if ($(window).width() >= 1200) {
		$('.productItem:nth-child(5n)').each(function () {
			$(this).find('.gift-detail .detail-wrapper').css({
				'left': '-100%',
				'border-radius': 0,
				'border-top-left-radius': '5px',
				'border-bottom-left-radius': '5px'
			})
		})
	}



	if ($(window).width() < 992) {
		$('.productItem .top-item .gift').click(function (e) {
			e.preventDefault()
			$(this).parents('.productItem').find('.gift-detail').addClass('active')
		})
		$('.productItem .gift-detail .detail-wrapper .detail-title .detail-close').click(function (e) {
			e.preventDefault()
			$(this).parents('.productItem').find('.gift-detail').removeClass('active')
		})
	} else {
		// $('.productItem .top-item .gift').mouseenter(function () {
		// 	$(this).parents('.productItem').find('.gift-detail').addClass('active')
		// })
		// $('.productItem .gift-detail').mouseenter(function () {
		// 	$(this).addClass('active')
		// })
		// $('.productItem .gift-detail').mouseout(function () {
		// 	$(this).removeClass('active')
		// })
		// $('.productItem').mouseout(function () {
		// 	$(this).find('.gift-detail').removeClass('active')
		// })
		$('.productItem .gift').on('mouseenter', function (e) {
			$(this).parent().siblings('.gift-detail').addClass('active')
		})
		$('.productItem').on('mouseleave', function (e) {
			$(this).find('.gift-detail').removeClass('active')
		})

	}
	$('.productItem .gift-detail').on('click', function (e) {
		e.preventDefault()
	})
}
$(document).ready(function () {
	navTab()
	productItem()
	var spMuaKem = new Swiper('.productMuaKem .swiper-container', {
		slidesPerView: 2,
		speed: 1000,
		autoplay: {
			delay: 3200,
			disableOnInteraction: false,
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
			}
		},
		navigation: {
			nextEl: '.productMuaKem .swiper-button-next',
			prevEl: '.productMuaKem .swiper-button-prev',
		},
	})
})