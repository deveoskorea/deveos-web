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


    $(".program-list").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
        speed: 500,
        infinite: false
	});

    $("body").on("click", ".header-more", function () {
        $(".header-menu").toggleClass("show");
    })
    changeCurrentHeaderMenuColor();



    $("body").on("click", ".openclass-item", function (e) {
        e.preventDefault();
        var isClose = false;
        if ($(this).hasClass("show")) {
            isClose = true;
        }
        $(".openclass-item.show").html($(".openclass-item.show").html());
        $(".openclass-item").removeClass("show");

        if(!isClose){
            $(this).addClass("show");
        }

    })
})