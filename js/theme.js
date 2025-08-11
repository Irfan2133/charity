// -----------------------------

//   js index
/* =================== */
/*  
    

    

*/
// -----------------------------


(function($) {
    "use strict";


    //============================
    // 1. preloader
    //============================
    $(window).on('load', function() {
        $('#preloader').delay(1000).fadeOut('slow', function() { $(this).remove(); });
    });


    //============================
    // 2. show hide Language
    //============================
    $('.lang_btn').on('click', function() {
        $('.language').toggleClass('show_hide_lang');
    });


    //============================
    // 3. Wordpress Friendly Menu
    //============================
    $(window).on('resize', function() {
        var wWidth = $(this).width();

        var selectedMenu = $('.main-menu'); // .main-menu  nav  ul li a (this is the structur)
        if (wWidth > 991) {
            selectedMenu.addClass('menu-activated');
            $('.menu-activated >nav >ul >li ul').addClass('submenu');
            $('.menu-activated >nav >ul >li ul li:has(ul)').addClass('menu-item-has-children');
            $('.menu-activated >nav >ul >li:has(ul)').addClass('has-submenu');

            // removing submenu class from mega-menu
            $('.mega_menu').find('.submenu').removeClass('submenu').addClass('mega_item');

            // 13. Rain Droper Canvas Activation
            slider_raindrops();

        } else {
            $('.menu-activated >nav >ul >li ul').removeClass('submenu');
            $('.menu-activated >nav >ul >li ul li:has(ul)').removeClass('menu-item-has-children');
            $('.menu-activated >nav >ul >li:has(ul)').removeClass('has-submenu');
            selectedMenu.removeClass('menu-activated');

            // removing submenu class from mega-menu
            $('.mega_menu').find('.mega_item').removeClass('mega_item');
        }

    }).resize();


    //============================
    // 4. Sticky Menu
    //============================
    $(window).on('scroll', function() {
        var header_top_hieght = $('.header-top').height();
        var navbar_fixed_top = 'navbar-fixed-top';
        var header_style_one = $('.hb_style_one');

        if ($(window).scrollTop() > header_top_hieght) {
            header_style_one.addClass(navbar_fixed_top);
        } else {
            header_style_one.removeClass(navbar_fixed_top);
        }

        var header_style_two = $('.header-bottom');
        if ($('.hb_style_two').length) {
            var header_style_two_offset = $('.hb_style_two').offset().top;

            if ($(window).scrollTop() > header_style_two_offset) {
                header_style_two.addClass(navbar_fixed_top);
            } else {
                header_style_two.removeClass(navbar_fixed_top);
            }
        }
    });

    //============================
    // 4. Slick Nav Activation
    //============================
    $('#mobile_menu').slicknav({
        'appendTo': '.mobile__menu'
    });


    //============================
    // 4. Slick Nav Activation for side nav
    //============================
    var nav_mobile_menu = $('#nav_mobile_menu');
    nav_mobile_menu.slicknav({
        'appendTo': '.nav-menu-list'
    });
    nav_mobile_menu.slicknav('open');

    //============================
    // 5. whd item hover effect
    //============================

    $('.whd-list-item').on('mouseleave', function() {
        $('.whd-list-item').removeClass('donation-bg');
        $('.donation').addClass('donation-bg');
    });
    $('.whd-list-item').on('mouseover', function() {
        $('.whd-list-item').removeClass('donation-bg');
        $(this).addClass('donation-bg');
    });


    //=================================
    // 5. waterwheelCarousel Activation
    //=================================
    var carousel = $("#carousel").waterwheelCarousel({
        flankingItems: 1,
        sizeMultiplier: 0.8,
        separation: 100
    });

    $('#prev').bind('click', function() {
        carousel.prev();
        return false
    });

    $('#next').bind('click', function() {
        carousel.next();
        return false;
    });


    //=================================
    // 5. Unchecked Input Radio
    //=================================
    $('#donate_input').click(function() {
        $('input[name="donate"]').prop("checked", false);
    });


    //=================================
    // 5. Clear Input Value
    //=================================
    $('input[name="donate"]').click(function() {
        $('input[type="text"]').val('');
    });

    //=================================
    // 5. Fancy Box Activation
    //=================================
    $('[data-fancybox]').fancybox({
        image: {
            protect: true
        }
    });


    //=================================
    // 5. donate progress-bar activaiton
    //=================================
    $(window).on('scroll', function() {
        var wScroll = $(this).scrollTop();
        if ($('.progress-bar').length) {
            if (wScroll > $('.progress-bar').offset().top - ($(window).height() / 1)) {

                $('.progress-bar').each(function(i) {

                    setTimeout(function() {
                        $('.progress-bar').eq(i).addClass('left-anim');
                    }, (700 * (Math.exp(i * 0.14))) - 700);
                });
            } //if end here
        }

        if ($('.pie_progress').length) {
            var wScroll = $(this).scrollTop();
            if (wScroll > $('.pie_progress').offset().top - ($(window).height() / 1.08)) {
                // circle personal progress-bar activation
                $('.pie_progress').asPieProgress('start');
            } //if end here
        }
    });


    //=================================
    // 6. circle personal progress-bar
    //=================================
    if ($('.pie_progress').length) {
        $('.pie_progress').asPieProgress({
            namespace: '',
            classes: {
                svg: 'pie_progress__svg',
                element: 'pie_progress',
                number: 'pie_progress__number',
                content: 'pie_progress__content'
            },
            min: 0,
            max: 100,
            goal: 100,
            size: 130,
            speed: 80, // speed of 1/100
            barcolor: '#f8c218',
            barsize: '12',
            trackcolor: '#f6f6f6',
            fillcolor: 'none',
            easing: 'ease',
            numberCallback: function numberCallback(n) {
                'use strict';

                var percentage = Math.round(this.getPercentage(n));

                return percentage + '%';
            },

            contentCallback: null
        });
    }


    //=================================
    // 6. recent causes carousel
    //=================================
    if ($('.recent-causes-list').length) {
        $('.recent-causes-list').owlCarousel({
            loop: true,
            nav: true,
            margin: 32,
            autoplay: false,
            navText: ['prev', 'next'],
            autoplayTimeout: 10000,
            items: 1,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1400: {
                    items: 5
                },
                1920: {
                    items: 6
                }
            }
        });
    }
    //=================================
    // 6. recent causes carousel
    //=================================
    if ($('.partner-list').length) {
        $('.partner-list').owlCarousel({
            loop: false,
            nav: false,
            margin: 32,
            autoplay: true,
            autoplayTimeout: 2500,
            items: 1,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                800: {
                    items: 3
                },
                1024: {
                    items: 5
                },
                1200: {
                    items: 5
                },
                1400: {
                    items: 5
                },
                1920: {
                    items: 5
                }
            }
        });
    }



    //=================================
    // 6. h3-upcoming-events carousel
    //=================================
    if ($('.h3-upcoming-events').length) {
        $('.h3-upcoming-events').owlCarousel({
            loop: true,
            nav: false,
            margin: 32,
            autoplay: false,
            autoplayTimeout: 10000,
            mouseDrag: false,
            items: 1,
            dots: true
        });
    }
    var dot = $('.h3-upcoming-events .owl-dot');
    dot.each(function() {
        var index = $(this).index();
        $(this).html(index + 1);
    });


    //=================================
    // 6. abt-two-row-carousel carousel
    //=================================
    if ($('.abt-two-row-carousel').length) {
        $('.abt-two-row-carousel').owlCarousel({
            loop: true,
            nav: true,
            navText: ['<i class="icofont icofont-rounded-left"></i>', '<i class="icofont icofont-rounded-right"></i>'],
            margin: 32,
            autoplay: false,
            autoplayTimeout: 10000,
            mouseDrag: false,
            items: 1,
            dots: false
        });
    }

    //=================================
    // 6. post-slider carousel
    //=================================
    if ($('.post-slider').length) {
        $('.post-slider').owlCarousel({
            loop: true,
            nav: true,
            navText: ['<i class="icofont icofont-thin-left"></i>' , '<i class="icofont icofont-thin-right"></i>'],
            margin: 32,
            autoplay: true,
            autoplayTimeout: 10000,
            mouseDrag: true,
            items: 1,
            dots: false
        });
    }



    //=================================
    // 6. Counterup Activation
    //=================================
    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 20,
            time: 3000
        });
    }

    /*---------------------
    countdown
    --------------------- */
    if ($('#countup').length) {
        $('[data-countdown]').each(function() {
            var $this = $(this),
                finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
                $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
            });
        });
    }


    //=================================
    // 6. Charity Player Activation
    //=================================
    if ($(".charity-player").length) {
        $(".charity-player").musicPlayer({
            playlistItemSelector: 'div',
            elements: ['artwork', 'information', 'controls', 'progress', 'time', 'volume'], // ==> This will display in  the order it is inserted
            //elements: [ 'controls' , 'information', 'artwork', 'progress', 'time', 'volume' ],
            //controlElements: ['backward', 'play', 'forward', 'stop'],
            //timeElements: ['current', 'duration'],
            //timeSeparator: " : ", // ==> Only used if two elements in timeElements option
            //infoElements: [  'title', 'artist' ],  

            //volume: 10,
            //autoPlay: true,
            loop: true,

        });
    }

    //=================================
    // 12. Magnific Popup Activation
    //=================================
    var video_link = $('.video-link');
    if (video_link.length) {
        video_link.magnificPopup({
            type: 'iframe',
            iframe: {
                youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                    id: 'v=', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }

                    src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                }
            }
        });
    }

    //=================================
    // 13. offset Show Hide
    //=================================
    // add class on search
    $('.search-btn').on('click', function() {
        $('.offset-overlay').addClass('overlay-show-hide');
        $('.offset-search-area').addClass('overlay-show-hide');
    });

    // add class on nav menu
    $('.nav-menu-btn').on('click', function() {
        $('.offset-overlay').toggleClass('overlay-show-hide');
        $('.offset-menu').toggleClass('opeend-nav');
        $('.offset-nav-menu').toggleClass('overlay-show-hide');
    });

    // Hide Offset menu
    $('.offset-close-btn').on('click', function() {
        $('.offset-overlay').removeClass('overlay-show-hide');
        $('.offset-search-area').removeClass('overlay-show-hide');
    });

    // Hide Offset search
    $('.offset-close-area').on('click', function() {
        $('.offset-overlay').removeClass('overlay-show-hide');
        $('.offset-menu').removeClass('opeend-nav');
        $('.offset-nav-menu').removeClass('overlay-show-hide');
    });
    
    // Hide All Offset
    $('.offset-overlay').on('click', function() {
        $('.offset-overlay').removeClass('overlay-show-hide');
        $('.offset-search-area').removeClass('overlay-show-hide');
        $('.offset-menu').removeClass('opeend-nav');
        $('.offset-nav-menu').removeClass('overlay-show-hide');
    });


    //=================================
    // 13. Rain Droper Canvas
    //=================================

    function slider_raindrops() {
        if ($('.slider_style_four').length) {
            $('.slider_style_four').raindrops({
                color: '#f0f0f0',
                canvasHeight: 100,
                rippleSpeed: 0.01,
                frequency: 1,
                density: 0
            });
        }
    }

    /*----------------------------------------------------
     14. recent causes / isotope , masonary , image loaded activation START
     -----------------------------------------------------*/
    $('#container').imagesLoaded(function () {  //image loaded
        // masonary activation
        var $grid = $('.recent-causes-list-three').isotope({
            itemSelector: '.couse-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.couse-item'
            }
        })
    });

    /*----------------------------------------------------
      15. portfolio style two masonary activation
    ------------------------------------------------------*/

    $('#container').imagesLoaded( function() {  //image loaded
    
        // filter items on button click
        $('.portfolio-menu').on( 'click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });
        
        // masonary activation
          var $grid = $('.portfolio-item').isotope({
          itemSelector: '.psingleitem',
          percentPosition: true,
          masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.psingleitem'
          }
        })
    });


    /*----------------------------------------------------
      15. portfolio style two menu is checked
    ------------------------------------------------------*/
    $('.portfolio-menu button').on('click', function(event) {
        $(this).siblings('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        event.preventDefault();
    });

    /*----------------------------------------------------
      15. nstSlider Activation
    ------------------------------------------------------*/
    if ($('.nstSlider').length) {
        $('.nstSlider').nstSlider({
            "left_grip_selector": ".leftGrip",
            "right_grip_selector": ".rightGrip",
            "value_bar_selector": ".bar",
            "value_changed_callback": function(cause, leftValue, rightValue) {
                $(this).parent().find('.leftLabel').text(leftValue);
                $(this).parent().find('.rightLabel').text(rightValue);
            }
        });
    }

    /*-------------------------------
      20.  Plus Minus Button 
    --------------------------------*/

    $(".product-uantity").append('<span class="counter-plus qtybutton">+</span>');
    $(".product-uantity").prepend('<span class="counter-minus qtybutton">-</i></span>');

    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        if (newVal <= 9) {
            $button.parent().find("input").val( '0' + newVal);
        }
        else{
            $button.parent().find("input").val(newVal);
        }
    });

}(jQuery));

/*------------------------------------
 *  Google Map activation
 *------------------------------------*/

 if ($('#map').length) {
    function initMap() {

        // lat: 41.9169938962037, lng: -76.60938262939453 

        var location = { lat: 23.782828, lng: 90.415996 }; // Here is the Location lat, lng .

        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 1,
            scrollwheel: false,
            center: location
        });
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map
        });
    }
    // google map end
 }


/*------------------------------------
 *  Event single Google Map activation
 *------------------------------------*/
 if ($('#ev-google-map').length) {
    function initMap() {

        // lat: 41.9169938962037, lng: -76.60938262939453 

        var location = { lat: 23.782828, lng: 90.415996 }; // Here is the Location lat, lng .

        var map = new google.maps.Map(document.getElementById("ev-google-map"), {
            zoom: 5,
            scrollwheel: false,
            center: location,
            styles: [
              {
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#bdbdbd"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#ffffff"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#dadada"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#c9c9c9"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              }
            ]
        });
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            icon: 'img/icon/ev-maplock.png',
            map: map
        });
    }
    // google map end
}