
'use strict';

(function ($) {

    /*------------------
        Background Set
    --------------------*/
    $('.background').each(function () {
        var bg = $(this).data('background');
        $(this).css('background-image', 'url(' + bg + ')');
    });

})(jQuery);