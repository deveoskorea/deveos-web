$(document).ready(function () {
    var calculateHeightFromWindow = function (el) {
        var windowHeight = parseFloat($(window).height());
        var elements = el ? el : $(".calHeight");

        elements = elements.length ? elements : [elements];

        var i = 0;

        for (i = 0; i < elements.length; i++) {
            var element = $(elements[i]);
            var ratio = parseFloat($(element).attr("heightRatio"));
            ratio = ratio ? ratio : 1;
            $(element).css("height", windowHeight * ratio);
        }
    }

    $(window).on("resize", function () {
        calculateHeightFromWindow();

    });

    $(window).resize();

    setInterval(function () {
        var last = $(".review-item:first-child");
        $(".review-list").append(last[0].outerHTML);
        $(last).remove();
    }, 2000);


    var changeCurrentHeaderMenuColor = function () {
        var i = 0;
        var menus = $(".header-menu a");
        for (i = menus.length - 1; i >= 0; i--) {
            if (window.location.pathname.indexOf($(menus[i]).attr("href")) >= 0) {
                $(menus[i]).addClass("selected");
                break;
            }
        }
    }

    changeCurrentHeaderMenuColor();

    $(".program-list").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 500,
        infinite: false,
        initialSlide: 1
    });

    $(".program-list").on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(".program-header-item").removeClass("show");
        $(".program-header-item:eq(" + nextSlide + ")").addClass("show");
        $(".program-list").removeClass("background-show");
        setTimeout(function () {
            var elProgramImage = $(".program:eq(" + nextSlide + ") .program-image").attr("src");
            $(".program-list").css("background-image", "url(" + elProgramImage + ")");
            $(".program-list").addClass("background-show");
        }, 250);
    });
    $(".program-list").on('afterChange', function (event, slick, currentSlide) {
    });

    $("body").on("click", ".program-header-item", function (e) {
        e.preventDefault();
        var clickedIndex = $(".program-header-item").index(this);
        $(".program-list").slick("slickGoTo", clickedIndex);
    });

    $("body").on("click", ".header-more", function (e) {
        e.preventDefault();
        $(".header-menu").toggleClass("show");
    })



    $("body").on("click", ".openclass-item", function (e) {
        e.preventDefault();
        var isClose = false;
        if ($(this).hasClass("show")) {
            isClose = true;
        }
        $(".openclass-item.show").html($(".openclass-item.show").html());
        $(".openclass-item").removeClass("show");

        if (!isClose) {
            $(this).addClass("show");
        }

    })



    var timerPrettyBreak;
    var fnPrettyBreak = function () {
        if (timerPrettyBreak) {
            clearTimeout(timerPrettyBreak);
        }
        timerPrettyBreak = setTimeout(function () {
            var pbs = $(".pb");
            var i = 0;
            for (i = 0; i < pbs.length; i++) {
                var pb = pbs[i];
                $(pb).css("width", "");
                var lastHeight = $(pb).height();
                var lastWdith = $(pb).width();
                while (true) {



                    $(pb).css("display", "inline-block");
                    $(pb).width(lastWdith - 1);
                    if ($(pb).height() > lastHeight) {
                        $(pb).width(lastWdith);
                        break;
                    }
                    lastWdith--;
                    if (lastWdith <= 0) {
                        $(pb).css("width", "");
                        break;
                    }
                }
            }
        }, 10);

    };
    $(window).on("resize", fnPrettyBreak);
    fnPrettyBreak();
    setTimeout(fnPrettyBreak, 100);

})