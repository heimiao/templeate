$(function () {
    $('.sidebar .nav-heading').siblings().slideUp(300, function () {
    });
    var nav_item_active = $('.nav-item-acitive');
    if (nav_item_active) {
        var nav_heading = nav_item_active.parent().find('.nav-heading')
        nav_item_active.parent().addClass('nav-acitive');
        if (nav_item_active.hasClass('single')) {
            nav_item_active.addClass('nav-show');
        }
        else {
            nav_heading.addClass('nav-show');
        }
        nav_heading.siblings().slideDown(300, function () {
        });
    }
    //nav hide
    $('.sidebar .single').click(function () {
        var nav_show = $('.nav-show');
        nav_show.removeClass('nav-show');
        nav_show.parent().removeClass('nav-acitive');
        nav_show.siblings().slideUp(300, function () {
            nav_show.find('.upIcon').removeClass('transDownIcon');
        });
        $(this).addClass('nav-show');
    });
    $('.sidebar .nav-heading').click(function (event) {
        var upIcon = $(this).find('.upIcon');
        var isShow = upIcon.hasClass('transDownIcon');
        var nav_show = $('.nav-show');
        if (nav_show.hasClass('single')) {
            nav_show.removeClass('nav-item-acitive');
        }
        nav_show.removeClass('nav-show');
        nav_show.parent().removeClass('nav-acitive');
        nav_show.siblings().slideUp(300, function () {
            nav_show.find('.upIcon').removeClass('transDownIcon');
        });
        $(this).addClass('nav-show');
        var siblings = $(this).siblings();
        if (isShow) {
            $(this).siblings().slideUp(300, function () {
                upIcon.removeClass('transDownIcon').addClass('transUpIcon');
            });
        }
        else {
            $(this).siblings().slideDown(300, function () {
                $(this).parent().addClass('nav-acitive');
                upIcon.removeClass('transUpIcon').addClass('transDownIcon');
            });
        }
    });