
$(document).ready(function () {
    $('.hamburger_button').on('click', function () {
        var menu = $('.hamburger-menu');

        if (menu.hasClass('active')) {
            menu.removeClass('active');
            setTimeout(function () {
                menu.css('display', 'none');
            }, 400);
        } else {
            menu.css('display', 'block');
            setTimeout(function () {
                menu.addClass('active');
            }, 10);
        }
    });
});


$(".accordion_contents p").on("click", function (e) {
    $(this).toggleClass("open");
    $(this).next().slideToggle();
});


$(document).ready(function() {
    // フェードインレフト
    $('.animate__animated').waypoint({
        handler: function() {
            $(this.element).addClass('animate__fadeInLeft');
        },
        offset: '50%'
    });

    // フェードインライト
    $('.fadeInFromLeftTarget').waypoint({
        handler: function() {
            $(this.element).addClass('animate__fadeInRight');
        },
        offset: '50%'
    });

    // レンタル画像フェードアップ
    $('.fade_up').waypoint({
        handler: function() {
            $(this.element).addClass('animate__fadeInUp');
        },
        offset: '75%'
    });

    // その他のフェードイン
    $('.animate__In').waypoint({
        handler: function() {
            $(this.element).addClass('animate__fadeIn');
        },
        offset: '50%'
    });
});




