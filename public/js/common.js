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
        console.log(last);
        $(".review-list").append(last[0].outerHTML);
        $(last).remove();
    }, 2000);


    var changeCurrentHeaderMenuColor = function () {
        var i = 0;
        var menus = $(".header-menu a");
        for (i = 0; i < menus.length; i++) {
            if (window.location.href.indexOf($(menus[i]).attr("href")) > 0) {
                $(menus[i]).addClass("selected");
                break;
            }
        }
    }


    $("body").on("click", ".header-more", function () {
        $(".header-menu").toggleClass("show");
    })
    changeCurrentHeaderMenuColor();



    $("body").on("click", ".openclass-item", function (e) {
        e.preventDefault();
        $(".openclass-item.show").html($(".openclass-item.show").html());
        $(".openclass-item").removeClass("show");
        $(this).addClass("show");

    })
})