function mapListener() {
    $('[mapTo]').each(function() {
        let mapPoint = $(this).attr('mapPoint')
        var mapTo = $(this).attr('mapTo')
        if (mapPoint && mapPoint.length > 0) {
            if ($(window).width() < mapPoint) {
                $(this).appendTo(mapTo);
                $(this).removeAttr('mapTo')
            }
        } else {
            if ($(window).width() < 992) {
                $(this).appendTo(mapTo);
                $(this).removeAttr('mapTo')
            }
        }

    })


}
$(document).ready(function() {
    mapListener()
})
$(window).resize(function() {
    mapListener()
})