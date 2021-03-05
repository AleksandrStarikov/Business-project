$(function() {
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

        /* Fixed Header */

        checkScroll(scrollOffset);
    
    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();
        
        checkScroll(scrollOffset);
    });

    function checkScroll() {
        scrollOffset = $(this).scrollTop();
        
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    };

    /* Smooth scroll */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

            $this.addClass("active");
            $("#nav, #nav_toggle").removeClass("active");
           
            $("html, body").animate( {
            scrollTop: blockOffset
        }, 700);
    }); 

    /* Menu nav toggle */
    var nav = $('#nav');
        nav_toggle = $('#nav_toggle');

    nav_toggle.on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        nav.toggleClass("active");
    });

    // Slider https://kenwheeler.github.io/slick/

    var slider = $('#slider');

    slider.slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });

});