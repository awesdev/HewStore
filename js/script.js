$(document).ready(function () {
    $('.lang__btn').click(function (e) {
        e.preventDefault();
        $('.lang__btn').removeClass('lang__btn_active');
        if ($(this).hasClass('lang__btn_eng')) {
            $('.lang__btn_eng').addClass('lang__btn_active');
        } else {
            $('.lang__btn_ru').addClass('lang__btn_active');
        }
    });

    $('.header__link').click(function (e) {
        e.preventDefault();
        $('.header__link').removeClass('header__link_active');
        $(this).addClass('header__link_active');
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