$(document).ready(function () {

    // FANCYBOX OPTION
    Fancybox.bind('[data-fancybox]', {
        dragToClose: false,
        hideScrollbar: false,
        autoFocus: false
    })


    if ($('.location-question').length) {
        $('.question-actions button[data-click="Y"]').on('click', function() {
            $('.location-question').remove();
            $(".header__location-list").removeClass('active');
        });
        $('.question-actions button[data-click="N"]').on('click', function() {
            $(".header__location-list").addClass('active');
            $('.location-question').hide();
        });
    }
});