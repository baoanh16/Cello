
String.prototype.toDate = function (format) {
	var normalized = this.replace(/[^a-zA-Z0-9]/g, '-');
	var normalizedFormat = format.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-');
	var formatItems = normalizedFormat.split('-');
	var dateItems = normalized.split('-');

	var monthIndex = formatItems.indexOf("mm");
	var dayIndex = formatItems.indexOf("dd");
	var yearIndex = formatItems.indexOf("yyyy");
	var hourIndex = formatItems.indexOf("hh");
	var minutesIndex = formatItems.indexOf("ii");
	var secondsIndex = formatItems.indexOf("ss");

	var today = new Date();

	var year = yearIndex > -1 ? dateItems[yearIndex] : today.getFullYear();
	var month = monthIndex > -1 ? dateItems[monthIndex] - 1 : today.getMonth() - 1;
	var day = dayIndex > -1 ? dateItems[dayIndex] : today.getDate();

	var hour = hourIndex > -1 ? dateItems[hourIndex] : today.getHours();
	var minute = minutesIndex > -1 ? dateItems[minutesIndex] : today.getMinutes();
	var second = secondsIndex > -1 ? dateItems[secondsIndex] : today.getSeconds();

	return new Date(year, month, day, hour, minute, second);
};



$(document).ready(function () {
	$(function () {
		$('main').css({
			'padding-top': $('header').outerHeight()
		})
	});
	$('.signup-panel .settingrow label').on('click', function () {
		var status = $('.signup-panel .settingrow input').prop('checked')
		if (status) {
			$('.signup-panel .settingrow label').removeClass('active')
		} else {
			$('.signup-panel .settingrow label').addClass('active')
		}
	})

	$('#IME-dropdown').parents('.item').find('a').on('click', function (e) {
		e.preventDefault()
		$('#IME-dropdown').slideToggle()
	})
	$('.check-order-button').on('click', function (e) {
		e.preventDefault()
		$('#checkIME').fadeToggle()
		$('#IME-dropdown').hide()

	})
	$('#checkIME .modal-footer .btn-info').click(function (e) {
		e.preventDefault()
		$('#checkIME').hide()
	})


	$('.checkout.step-1 .quantity.input-number .minus').on('click', function () {
		var curVal = Number($(this).siblings('input').val()) - 1
		if (curVal <= 0) {
			curVal = 0
		}
		$(this).siblings('input').val(curVal)
		$(this).siblings('input').attr('value', curVal)
		$(this).siblings('input').trigger('change')
	})
	$('.checkout.step-1 .quantity.input-number .plus').on('click', function () {
		var curVal = Number($(this).siblings('input').val()) + 1
		$(this).siblings('input').val(curVal)
		$(this).siblings('input').attr('value', curVal)
		$(this).siblings('input').trigger('change')
	})

	if ($('.signup-form').length > 0) {
		$('.signup-form .form-horizontal label').each(function () {
			var target = '#' + $(this).attr('for')
			var content = $(this).text()
			if ($(target).length > 0) {
				$(target).attr('placeholder', content)
			}
		})
	}

	if ($('.ajaxfilter').length > 0) {
		$('.ajaxfilter').appendTo('.cello-spList .filter')
	}

	$('.cello-spList .filter-title').on('click', function () {
		$('.cello-spList .filter-nav').toggleClass('active')
	})


	if ($(window).width() >= 992) {

		$(window).on('scroll', function () {
			if ($(window).scrollTop() > 50) {
				$('header .top-nav').slideUp()
			} else {
				$('header .top-nav').slideDown()
			}
		})
	}
	try {
		$('.cello-flashSale .productItem').each(function () {
			var endDate = $(this).find('.time').attr('data-endtime')
			var slt = this
			// Update the count down every 1 second
			var x = setInterval(function () {

				var now = new Date().getTime();

				var distance = endDate.toDate("dd/mm/yyyy hh:ii:ss") - now;

				var days = Math.floor(distance / (1000 * 60 * 60 * 24));
				var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24;
				var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
				var seconds = Math.floor((distance % (1000 * 60)) / 1000);

				// Display the result in the element with id="demo"
				$(slt).find('.hour').html(hours)
				$(slt).find('.minute').html(minutes)
				$(slt).find('.second').html(seconds)

			}, 1000);
		})
	} catch (error) {

	}


	var cumshot = $('.cello-thuonghieu .list-item .item').height()
	if ($('.cello-thuonghieu .list-item').height() > 2 * cumshot) {
		$('.cello-thuonghieu .list-item').height(2 * cumshot)
	}

	$('body').on('click', '.cello-thuonghieu .cello-viewMore', function () {
		$('.cello-thuonghieu .list-item').addClass('show')
		$('.cello-viewMore').remove()
	})


	$('.term-content .btn-close').on('click', function () {
		$(this).parents('.term-content').removeClass("active")
	})

	$('#btn-showManufacturerDescription').on('click', function () {
		$('.term-content').toggleClass('active')
	})
})
