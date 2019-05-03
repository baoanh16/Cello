function customSelect() {
    $('.select').each(function() {
        $(this).find('.select-show').on('click', function() {
            $(this).toggleClass('active')
            if ($(this).parents('.select').find('.select-list').is(':hidden') == true) {
                $(this).parents('.select').find('.select-list').fadeIn(200)
            } else {
                $(this).parents('.select').find('.select-list').fadeOut(200)
            }
        })
        $(this).find('.select-item').on('click', function() {
            $(this).parents('.select').find('.select-item').removeClass('active')
            $(this).addClass('active')
        })
    })
}
$(document).ready(function() {
    customSelect()
})