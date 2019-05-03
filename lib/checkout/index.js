
function minusQuantity() {
	$('.minus').each(function () {
		$(this).on('click', function () {
			let quantity = parseInt($(this).siblings('.quantity-number').attr('value'))
			if ($(this).siblings('.quantity-number').val() <= 0) {
				quantity = 0;
			} else {
				quantity = quantity - 1;
			}
			$(this).siblings('.quantity-number').attr('value', quantity)
		})
	})
}
function plusQuantity() {
	$('.plus').each(function () {
		$(this).on('click', function () {
			let quantity = parseInt($(this).siblings('.quantity-number').attr('value'))
			quantity = quantity + 1;
			$(this).siblings('.quantity-number').attr('value', quantity)
		})
	})
}
function viewedProductSlide() {
	let viewedProductSlide = new Swiper('.viewed-product .swiper-container', {
		slidesPerView: 4,
		navigation: {
			nextEl: '.viewed-product .swiper-button-next',
			prevEl: '.viewed-product .swiper-button-prev',
		},
		spaceBetween: 20,
		breakpoints: {
			// when window width is <= 320px
			460: {
				slidesPerView: 1,
			},
			// when window width is <= 640px
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			}
		}
	})
}
function toggleOtherAddress() {
	$('#btn-ttmh').click(function () {
		$(this).toggleClass('active')
		$('.checkout-address-edit .address-edit-other').slideToggle();
	})
}
function sameInfo() {
	$('#btn-cntt').click(function () {
		$(this).toggleClass('active')
	})
}
function toggleExportBill() {
	$('.checkout-address-edit .cart-bill-export #btn-xuathd').click(function () {
		$(this).toggleClass('active')
		$('.checkout-address-edit .cart-bill-info').slideToggle();
	})
}
function choosePaymentMethod() {
	$('.cart-payment-method .method label').click(function () {
		$(this).addClass('active')
		$(this).parent().siblings('.method').find('label').removeClass('active')
	})
}

function refreshCart() {
	$('.quantity.input-number .minus, .quantity.input-number .plus').click(function () {
		$(this).siblings('input').trigger('change')
	})
}

function viewedProductAddCart() {
	$('.viewed-product .mrVui-product-item .add-cart').click(function () {
		setTimeout(function () {
			location.reload();
		}, 600)
	})
}