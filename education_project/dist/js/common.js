$(document).ready(function() {
    /*for parallax effect*/
    $.stellar({
		responsive: true
    });

    /*for carousel*/
    $(".owl-carousel").owlCarousel({
		loop: true,
        autoplay: true,
        autoPlayTimeout: 10000,
        autoplayHoverPause: true,
		responsive: {
			0:{
                items:1,
                nav:true
            }
		}
	});

    /*for open image in modal window*/
    $('a[data-rel^=lightcase]').lightcase();

    $('.popup_c').magnificPopup();
	/*function for resize*/
	function wRisize () {
		$("header").css("min-height", $(window).height());
		// $(".review").css("min-height", $(window).height());
		if (($(window).width()>=1400) && ($(window).height()>=780)) {
			$(".tabs_header").css("top", $(window).height()*0.5);
        }
	};
	wRisize();
	$(window).resize(function () {
		wRisize();
    });

	/*для выбора города в header*/
    $(".header_phone .tab_item").not(":first").hide();
    $(".header_phone .wrapper .tab").click(function() {
        $(".header_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".header_phone .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".footer_phone .tab_item").not(":first").hide();
    $(".footer_phone .wrapper .tab").click(function() {
        $(".footer_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".footer_phone .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".tabs_header .tab_item").not(":first").hide();
    $(".tabs_header .wrapper .tab").click(function() {
        $(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".contacts .tab_item").not(":first").hide();
    $(".contacts_top .tab").click(function() {
        $(".contacts_top .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".contacts .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	// $("form").submit(function(e) {
    // var ths = $(this);
	// 	e.preventDefault;
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php",
	// 		data: $(this).serialize()
	// 	}).done(function() {
	// 		alert("Спасибо за заявку!");
	// 		setTimeout(function() {
	// 			var MagnificPopup = $.magnificPopup.instance;
	// 			MagnificPopup.close();
    //          ths.trigger("reset");
	// 		}, 1000);
	// 	});
    // return false;
	// });
	
});

$(window).load(function () {
    /*animation*/
    $(".top_header").animated("slideInLeft", "slideOutRight");
    $(".tabs_header .wrapper").animated("slideInRight","slideOutLeft");
    $(".profi_item").animated("fadeInLeft","fadeOutLeft");
    $(".profesional form").animated("fadeInRight","fadeOutRight");
    $(".back h3").animated("zoomIn","zoomOut");
    $(".back .button").animated("bounceIn","bounceOut");
    // $("footer h2").animated("slideInRight","slideOutLeft");
    // $("footer p").animated("slideInLeft","slideOutRight");
    // $("footer .footer_phone").animated("slideInRight","slideOutLeft");
    $("footer").animated("slideInLeft","slideOutRight");
});