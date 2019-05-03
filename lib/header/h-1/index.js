function toggleButton() {
	$('.cello-header .top-nav .main-nav .navbar-brand .toggle-button').on('click', function () {
		$(this).find('.button').toggleClass('active')
		$('.cello-header .top-nav .main-nav .navbar-main .top-main').toggleClass('active')
		$('.cello-header .top-nav .main-nav .navbar-menu').toggleClass('active')
		$('.cello-header .header-bg').toggleClass('active')
	})
}

function headerFixed() {
	let i = $('header').outerHeight()
	if ($(window).width() < 992) {
		$('.cello-header .top-nav .main-nav .navbar-main .top-main').css({
			'top': i
		})
		$('.cello-header .top-nav .main-nav .navbar-menu').css({
			'top': i
		})
		$('.cello-header .header-bg').css({
			'top': i
		})
	}
}

function megaMenu() {

}

function brandTab() {
	$('.cello-header .bottom-nav .nav .nav-item .cello-mega .mega-list .list-item .item').on('click', function () {
		let e = $(this).attr('data-item')
		// $('.cello-header .bottom-nav .nav .nav-item .cello-mega .mega-list .list-item .item').removeClass('active')
		$(this).parents('.nav-item').find('.item').removeClass('active')
		$(this).addClass('active')
		// $('.cello-header .bottom-nav .nav .nav-item .cello-mega .mega-list .list-brand .brand-item').removeClass('active')
		$(this).parents('.nav-item').find('.brand-item').removeClass('active')
		$(this).parents('.nav-item').find('.brand-item[data-brand=' + e + ']').addClass('active')
		// $('.cello-header .bottom-nav .nav .nav-item .cello-mega .mega-list .list-brand .brand-item').addClass('active')
	})
}
$(document).ready(function () {
	headerFixed()

	toggleButton()
	// brandTab()
	megaMenu()

	$('header .nav-item').on('click', function (e) {
		if ($(this).find('.cello-mega').length > 0) {

			$(this).toggleClass('active-mega')
		}
		if ($(this).hasClass('active-mega')) {
			$(this).find('.cello-mega').fadeIn().addClass('show')
		} else {
			$(this).find('.cello-mega').fadeOut().removeClass('show')
		}
		$('header .nav-item').not(this).removeClass('active-mega').removeClass('active')
		$('header .nav-item').not(this).find('.cello-mega').fadeOut()

		if ($(window).width() >= 992) {
			if ($(this).find('.cello-mega').hasClass('show')) {
				$('.mega-bg').remove()
				$('body').append('<div class="mega-bg"></div>')
			} else {
				$('.mega-bg').remove()
			}
		}
	})

	$('body').on('click', '.cello-mega .mdi-close', function () {
		$(this).parents('.cello-mega').removeClass('show').fadeOut()
		$('header .nav-item').removeClass('active-mega')
	})
	$('body').on('click', '.mega-bg', function () {
		$('header .nav-item .cello-mega').removeClass('show').fadeOut()
		$('header .nav-item').removeClass('active-mega')
		$('.mega-bg').remove()
	})

	$('#login').on('click', function () {
		$(this).find('.log-in').fadeToggle()
	})
	$('#search').on('click', function () {

		$('.search-main').slideToggle()
	})


	var moveCart = new MappingListener({
		selector: 'header .cart',
		mobileWrapper: 'header .navbar-brand',
		mobileMethod: 'appendTo',
		desktopWrapper: 'header .navbar-menu',
		desktopMethod: 'appendTo',
		breakpoint: 992
	}).watch()
})