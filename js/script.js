$(document).ready(function () {
    $('.header__link').click(function () {
        $('.header__link').removeClass('header__link_active');
        $(this).addClass('header__link_active');
    });

    $('.header__burger-link').click(function () {
        $('.header__burger-link').removeClass('header__burger-link_active');
        $(this).addClass('header__burger-link_active');
    });

    $('.header__burger').click(function () {
        $(this).toggleClass('header__burger_active');
        $('.header__lang').toggleClass('header__lang_active');
        if ($(this).hasClass('header__burger_active'))
            $('.header__burger-container').fadeIn(100);
        else
            $('.header__burger-container').fadeOut(100);
    });
});