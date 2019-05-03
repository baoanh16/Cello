function spNavSlide() {
    var spNavSlide = new Swiper('.cello-spNav .swiper-container', {
        slidesPerView: 8,
        spaceBetween: 0,
        autoplay: {
            delay: 4000
        },
        breakpoints: {
            1200: {
                slidesPerView: 6
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 10
            },
            576: {
                slidesPerView: 2
            }


        }
    })
}
$(document).ready(function() {
    spNavSlide()
})