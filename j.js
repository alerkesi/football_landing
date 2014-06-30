$(document).ready(function () {
    $('.add-item-blind').on('click', 'a', function () {
        var $that = $(this).parents('.add-items');
        $(this).parents('.add-item-blind').hide(500);
        $that.next('.showable-items').show(1000);

    });
    showDisplay = function (id) {
        var $that = $('' + id);
        $('html, body').animate({
            scrollTop: $that.offset().top
        }, 500);
    }
});