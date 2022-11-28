$(function () {

    AOS.init();


    //totop
    $(window).scroll(function () {
        var $scrollTop = $(this).scrollTop();
        console.log($scrollTop);

        if ($scrollTop < 100) {
            $('.toTop .top').fadeOut();
        } else {
            $('.toTop .top').fadeIn();
        }
    });

    $('.toTop').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 500)
    });


})