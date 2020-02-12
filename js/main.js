$(document).ready(function() {
    $('.menu').click(function() {
        $(this).toggleClass('open');
        $('.menu-collapse').toggleClass('collapsed');
    });

    $('.home-slider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2000
    });
});