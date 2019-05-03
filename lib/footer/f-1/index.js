$(document).ready(function () {
	$('.mobile-dropdown .footer-title').on('click', function () {
		$(this).siblings('.list-group').slideToggle()
		$(this).toggleClass('mobile-active')
	})
});