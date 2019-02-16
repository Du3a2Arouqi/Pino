$(function () {
    var selectedClass = "";
    $(".fil-cat").click(function () {
        selectedClass = $(this).attr("data-rel");
        $("#portfolio").fadeTo(100, 0.1);
        $("#portfolio div").not("." + selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function () {
            $("." + selectedClass).fadeIn().addClass('scale-anm');
            $("#portfolio").fadeTo(300, 1);
        }, 300);

    });


    var scrollTop = 0;
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
        if (scrollTop > 100) {
            $('.navbar').addClass('scrollNav');
            $('.backToTop').addClass('visible');

        } else if (scrollTop < 100) {
            $('.navbar').removeClass('scrollNav');
            $('.backToTop').removeClass('visible');
        };
    });
    $('.backToTop').click(function () {
        $('body , html').animate({
            scrollTop: 0
        }, 800);
    });
});