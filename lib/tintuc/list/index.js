function playButton() {
    let i = $('.cello-tintuc .news-1 .video-list .item figure figcaption .title').outerHeight()
    $('.cello-tintuc .news-1 .video-list .item figure figcaption .play').css({
        'width': i + 'px',
        'height': i + 'px',
        'flex': '0 0 ' + i + 'px'
    })
}



$(document).ready(function() {
    var slideTopNews = new Swiper('.cello-tintuc .news-1 .top-news .swiper-container', {
        // direction: 'vertical',
        slidesPerView: 1,
        mousewheelControl: true,
        spaceBetween: 10,
        pagination: {
            el: '.cello-tintuc .news-1 .top-news .swiper-pagination',
            clickable: true,
            // dynamicBullets: true,
        }
    });
    var slidePartNews = new Swiper('.cello-tintuc .news-1 .part-news .swiper-container', {
        // direction: 'vertical',
        slidesPerView: 1,
        mousewheelControl: true,
        spaceBetween: 25,
        slidesPerColumn: 3,
        pagination: {
            el: '.cello-tintuc .news-1 .part-news .swiper-pagination',
            clickable: true,
            // dynamicBullets: true,
        },
        breakpoints: {
            576: {
                slidesPerColumn: 1
            }
        }
    });
    var slideVideoList = new Swiper('.cello-tintuc .news-1 .video-list .swiper-container', {
        // direction: 'vertical',
        slidesPerView: 3,
        mousewheelControl: true,
        spaceBetween: 20,
        breakpoints: {
            992: {
                slidesPerView: 1
            }
        },
        navigation: {
            nextEl: '.cello-tintuc .video-list .swiper-next',
            prevEl: '.cello-tintuc .video-list .swiper-prev'
        },
    });
    playButton()
})
$(window).resize(function() {
    playButton()
})