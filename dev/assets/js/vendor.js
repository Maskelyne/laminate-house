(function($) {
  "use strict";

  /*====== sidebarSearch ======*/
  function sidebarSearch() {
    var searchTrigger = $('.search-active'),
      endTriggersearch = $('.search-close'),
      container = $('.main-search-active');

    searchTrigger.on('click', function(e) {
      e.preventDefault();
      container.addClass('search-visible');
    });

    endTriggersearch.on('click', function() {
      container.removeClass('search-visible');
    });

  };
  sidebarSearch();


  /*====== sidebarCart ======*/
  function headerAside() {
    var navbarTrigger = $('.header-aside-button'),
      endTrigger = $('.aside-close'),
      container = $('.header-aside-active'),
      wrapper = $('.wrapper');

    wrapper.prepend('<div class="body-overlay"></div>');

    navbarTrigger.on('click', function(e) {
      e.preventDefault();
      container.addClass('inside');
      wrapper.addClass('overlay-active');
    });

    endTrigger.on('click', function() {
      container.removeClass('inside');
      wrapper.removeClass('overlay-active');
    });

    $('.body-overlay').on('click', function() {
      container.removeClass('inside');
      wrapper.removeClass('overlay-active');
    });
  };
  headerAside();

  /*====== sidebarCart ======*/
  function miniCart() {
    var navbarTrigger = $('.cart-active'),
      endTrigger = $('.cart-close'),
      container = $('.sidebar-cart-active'),
      wrapper2 = $('.wrapper-2');

    wrapper2.prepend('<div class="body-overlay-2"></div>');

    navbarTrigger.on('click', function(e) {
      e.preventDefault();
      container.addClass('inside');
      wrapper2.addClass('overlay-active-2');
    });

    endTrigger.on('click', function() {
      container.removeClass('inside');
      wrapper2.removeClass('overlay-active-2');
    });

    $('.body-overlay-2').on('click', function() {
      container.removeClass('inside');
      wrapper2.removeClass('overlay-active-2');
    });
  };
  miniCart();


  /*--
  Menu Stick
  -----------------------------------*/
  var header = $('.sticky-bar');
  var win = $(window);
  win.on('scroll', function() {
    var scroll = win.scrollTop();
    if (scroll < 200) {
      header.removeClass('stick');
    } else {
      header.addClass('stick');
    }
  });

  /*--
  quick view Slick Carousel
  -----------------------------------*/
  $('.quickview-big-img-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    fade: false,
    asNavFor: '.quickview-small-img-slider',
  });


  /*--
      quick view Slick Carousel as Nav
  -----------------------------------*/
  $('.quickview-small-img-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    asNavFor: '.quickview-big-img-slider',
    dots: false,
    arrows: false,
    focusOnSelect:true,
    fade: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
        }
      },
      {
        breakpoint: 420,
        settings: {
          autoplay: true,
        }
      }
    ]
  });

  /*--
  instafeed
  -----------------------------------*/

  $('.instafeed').each(function() {
    var $this = $(this),
      $id = $this.find('ul').attr('id'),
      $limit = $this.data('limit'),
      $resolution = $this.data('resolution');
    if($this.length) {
      var feed = new Instafeed({
        get: 'user',
        userId: 6665768655,
        accessToken: '6665768655.1677ed0.313e6c96807c45d8900b4f680650dee5',
        target: $id,
        resolution: $resolution,
        limit: $limit,
        template: '<li><a href="{{link}}" target="_new"><img src="{{image}}" /><i class="fa fa-instagram"></i></a></li>',
      });
      feed.run();
    }
  });


  /*---------------------
      countdown
  --------------------- */
  $('[data-countdown]').each(function() {
    var $this = $(this),
      finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function(event) {
      $this.html(event.strftime('<span class="cdown day">%-D <p>Days</p></span> <span class="cdown hour">%-H <p>Hrs</p></span> <span class="cdown minutes">%M <p>Mins</p></span class="cdown second"> <span>%S <p>Secs</p></span>'));
    });
  });


  /*----------------------------
    Cart Plus Minus Button
  ------------------------------ */
  var CartPlusMinus = $('.cart-plus-minus');
  CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
  CartPlusMinus.append('<div class="inc qtybutton">+</div>');
  $(".qtybutton").on("click", function() {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.text() === "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
    $button.parent().find("input").val(newVal);
  });


  /*-------------------------
    tooltip
  --------------------------*/
  $('[data-toggle="tooltip"]').tooltip()

  /* Testimonial active */
  $('.testimonial-active').owlCarousel({
    loop: true,
    nav: false,
    autoplay: false,
    autoplayTimeout: 5000,
    item: 2,
    margin:50,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 2
      }
    }
  })

  /* Testimonial active */
  $('.testimonial-active-2').owlCarousel({
    loop: true,
    nav: true,
    autoplay: false,
    navText: ['<i class="negan-icon-arrows-minimal-left"></i>', '<i class="negan-icon-arrows-minimal-right"></i>'],
    autoplayTimeout: 5000,
    item: 1,
    responsive: {
      0: {
        items: 1,
        nav: false,
        autoplay: true,
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })

  /* Testimonial active */
  $('.testimonial-active-3').owlCarousel({
    loop: true,
    nav: false,
    autoplay: false,
    autoplayTimeout: 5000,
    item: 1,
    margin:50,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      992: {
        items: 1
      }
    }
  })


  /* Testimonial active */
  $('.testimonial-active-4').owlCarousel({
    loop: true,
    nav: false,
    autoplay: false,
    autoplayTimeout: 5000,
    item: 1,
    margin:50,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      992: {
        items: 1
      }
    }
  })


  /* Portfolio details slider active */
  $('.portfolio-details-slider').owlCarousel({
    loop: true,
    nav: true,
    autoplay: false,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    autoplayTimeout: 5000,
    item: 1,
    responsive: {
      0: {
        items: 1,
        nav: false,
        autoplay: true,
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })


  /* brand logo active */
  $('.brand-logo-active').owlCarousel({
    loop: true,
    nav: false,
    autoplay: false,
    autoplayTimeout: 5000,
    item: 6,
    margin: 100,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 3,
        margin: 20,
      },
      768: {
        items: 3,
        margin: 50,
      },
      992: {
        items: 4,
        margin: 50,
      },
      1200: {
        items: 5,
        margin: 50,
      },
      1366: {
        items: 6,
        margin: 50,
      },
      1367: {
        items: 6,
        margin: 100,
      }
    }
  })


  /* about brand logo active */
  $('.about-brand-logo').owlCarousel({
    loop: true,
    nav: false,
    autoplay: false,
    autoplayTimeout: 5000,
    item: 5,
    margin: 22,
    responsive: {
      0: {
        items: 3,
      },
      576: {
        items: 5,
      },
      768: {
        items: 5,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1366: {
        items: 5,
      }
    }
  })

  /*--- clickable menu active ----*/
  const slinky = $('#menu').slinky();
  const slinky2 = $('#mobile-menu').slinky();

  /*====== clickable mainmenu active ======*/
  function sidebarMainmenu() {
    var menuTrigger = $('.clickable-mainmenu-active,.clickable-mainmenu-active2'),
      endTrigger = $('button.clickable-mainmenu-close,button.clickable-mainmenu-close2'),
      container = $('.clickable-mainmenu,.clickable-mainmenu2');

    menuTrigger.on('click', function(e) {
      e.preventDefault();
      container.addClass('inside');
    });

    endTrigger.on('click', function() {
      container.removeClass('inside');
    });
  };
  sidebarMainmenu();


  /*---------------------
      toggle item active2
  --------------------- */
  function itemToggler() {
    $(".toggle-item-active").slice(0, 15).show();
    $(".item-wrapper").find(".loadMore").on('click', function(e) {
      e.preventDefault();
      $(this).parents(".item-wrapper").find(".toggle-item-active:hidden").slice(0, 5).slideDown();
      if ($(".toggle-item-active:hidden").length == 0) {
        $(this).parent('.toggle-btn').fadeOut('slow');
      }
    });
  }
  itemToggler();


  /*---------------------
      Video popup
  --------------------- */
  $('.video-popup').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    zoom: {
      enabled: true,
    }
  });


  /*--------------------------
      ScrollUp
  ---------------------------- */
  $.scrollUp({
    scrollText: '<i class="fa fa-angle-double-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
  });

  /* Notification */
  $('.notification-close button').on('click', function() {
    $('.notification-section').slideUp();
  });


  /*-----------------------
      Shop filter active
  ------------------------- */
  $('.filter-active a').on('click', function(e) {
    e.preventDefault();
    $('.product-filter-wrapper').slideToggle();
  })


  /* Cart dropdown */
  var iconCart = $('.filter-active a');
  iconCart.on('click', function() {
    $('.filter-active a').toggleClass('active');
  })


  /*---------------------
      Price slider
  --------------------- */
  var sliderrange = $('#slider-range');
  var amountprice = $('#amount');
  $(function() {
    sliderrange.slider({
      range: true,
      min: 16,
      max: 400,
      values: [0, 300],
      slide: function(event, ui) {
        amountprice.val("Price $" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    amountprice.val("Price $" + sliderrange.slider("values", 0) +
      " - $" + sliderrange.slider("values", 1));
  });


  // filter items on button click
  $('.grid').imagesLoaded(function() {
    $('.portfolio-menu').on('click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue
      });
    });
    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      layoutMode: 'masonry',
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-item',
      }
    });
  });
  $('.portfolio-menu button').on('click', function(event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  });

  /*--
      Portfolio active
  -----------------------------------*/
  $('.grid-2').imagesLoaded(function() {
    $('.portfolio-menu').on('click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue
      });
    });
    // init Isotope
    var $grid = $('.grid-2').isotope({
      itemSelector: '.grid-item-2',
      percentPosition: true,
      layoutMode: 'masonry',
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-sizer',
      }
    });
  });

  /*--
  quick view Slick Carousel
  -----------------------------------*/
  $('.pro-dec-big-img-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    fade: false,
    asNavFor: '.product-dec-slider',
  });

  /*--
      quick view Slick Carousel as Nav
  -----------------------------------*/
  $('.product-dec-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    asNavFor: '.pro-dec-big-img-slider',
    dots: false,
    focusOnSelect:true,
    fade: false,
    prevArrow: '<span class="product-dec-icon product-dec-prev"><i class="negan-icon-arrows-minimal-right"></i></span>',
    nextArrow: '<span class="product-dec-icon product-dec-next"><i class="negan-icon-arrows-minimal-right"></i></span>',
    responsive: [
      {
        breakpoint: 767,
        settings: {

        }
      },
      {
        breakpoint: 420,
        settings: {
          autoplay: true,
          slidesToShow: 3,
        }
      }
    ]
  });


  /*--
  quick view Slick Carousel
  -----------------------------------*/
  $('.pro-dec-big-img-slider-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    fade: false,
    asNavFor: '.product-dec-slider-2',
  });

  /*--
      quick view Slick Carousel as Nav
  -----------------------------------*/
  $('.product-dec-slider-2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.pro-dec-big-img-slider-2',
    dots: false,
    focusOnSelect:true,
    fade: false,
    prevArrow: '<span class="product-dec-icon-2 product-dec-prev"><i class="negan-icon-arrows-minimal-right"></i></span>',
    nextArrow: '<span class="product-dec-icon-2 product-dec-next"><i class="negan-icon-arrows-minimal-right"></i></span>',
    responsive: [
      {
        breakpoint: 767,
        settings: {

        }
      },
      {
        breakpoint: 420,
        settings: {
          autoplay: true,
          slidesToShow: 3,
        }
      }
    ]
  });


  $('.single-portfolio')
    .mouseover(function() {
      $('.single-portfolio').removeClass('active');
      $(this).addClass('active');
    });


  /*--
  Magnific Popup
  ------------------------*/
  $('.img-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });


  // Instantiate EasyZoom instances
  var $easyzoom = $('.easyzoom').easyZoom();


  /* --------------------------------------------------------
      FAQ Accordion
  * -------------------------------------------------------*/
  $('.faq-accordion a').on('click', function() {
    $('.faq-accordion').removeClass('actives');
    $(this).parents('.faq-accordion').addClass('actives');
  });

  /*---------------------
      Sidebar active
  --------------------- */
  $('.sidebar-active').stickySidebar({
    topSpacing: 80,
    bottomSpacing: 30,
    minWidth: 767,
  });

  /*--- checkout toggle function ----*/
  $('.checkout-click1').on('click', function(e) {
    e.preventDefault();
    $('.checkout-login-info').slideToggle(900);
  });

  /*--- checkout toggle function ----*/
  $('.checkout-click2').on('click', function(e) {
    e.preventDefault();
    $('.checkout-login-info2').slideToggle(900);
  });

  /*--- checkout toggle function ----*/
  $('.checkout-click3').on('click', function(e) {
    e.preventDefault();
    $('.checkout-login-info3').slideToggle(1000);
  });

  /*-------------------------
  Create an account toggle
  --------------------------*/
  $('.checkout-toggle2').on('click', function() {
    $('.open-toggle2').slideToggle(1000);
  });

  $('.checkout-toggle').on('click', function() {
    $('.open-toggle').slideToggle(1000);
  });


  /*-------------------------
  checkout one click toggle function
  --------------------------*/
  var checked = $( '.sin-payment input:checked' )
  if(checked){
    $(checked).siblings( '.payment-box' ).slideDown(900);
  };
  $( '.sin-payment input' ).on('change', function() {
    $( '.payment-box' ).slideUp(900);
    $(this).siblings( '.payment-box' ).slideToggle(900);
  });


  /*------ Wow Active ----*/
  new WOW().init();


  /* hoverdirection active */
  $('.box').hoverDirection();
  // Example of calling removeClass method after a CSS animation
  $('.box .inner').on('animationend', function (event) {
    var $box = $(this).parent();
    $box.filter('[class*="-leave-"]').hoverDirection('removeClass');
  });


  /*-------- ThreeSixty 360  -------*/

  var chair = $('.chair').ThreeSixty({
    totalFrames: 40,
    endFrame: 40,
    currentFrame: 1,
    imgList: '.threesixty_images',
    progress: '.spinner',
    imagePath:'assets/img/chair/',
    filePrefix: '',
    ext: '.jpg',
    height: 612,
    width: 470,
    navigation: false,
    disableSpin: true,
    responsive: true,
  });
  $('.custom_previous').bind('click', function(e) {
    chair.previous();
  });

  $('.custom_next').bind('click', function(e) {
    chair.next();
  });

  $('.custom_play').bind('click', function(e) {
    chair.play();
  });

  $('.custom_stop').bind('click', function(e) {
    chair.stop();
  });


  /*====== mobile off canvas active ======*/
  function headermobileAside() {
    var navbarTrigger = $('.mobile-aside-button'),
      endTrigger = $('.mobile-aside-close'),
      container = $('.mobile-off-canvas-active'),
      wrapper = $('.wrapper-3');

    wrapper.prepend('<div class="body-overlay-3"></div>');

    navbarTrigger.on('click', function(e) {
      e.preventDefault();
      container.addClass('inside');
      wrapper.addClass('overlay-active-3');
    });

    endTrigger.on('click', function() {
      container.removeClass('inside');
      wrapper.removeClass('overlay-active-3');
    });

    $('.body-overlay-3').on('click', function() {
      container.removeClass('inside');
      wrapper.removeClass('overlay-active-3');
    });
  };
  headermobileAside();

  /*--- language currency active ----*/
  $('.mobile-language-active').on('click', function() {
    $('.lang-dropdown-active').slideToggle(900);
  });
  $('.mobile-currency-active').on('click', function() {
    $('.curr-dropdown-active').slideToggle(900);
  });


  /*====== fullpage slider active ======*/
  if($('#fullpage').length){
    $('<div class="negan-fp-arrows"><ul><li class="prev"><i class="negan-icon-tail-triangle-up"></i></li><li class="num"><span class="current">01</span></li><li class="next"><i class="negan-icon-tail-triangle-down"></i></li></ul></div>').appendTo('body');
  }
  $(document)
    .on('click', '.negan-fp-arrows .prev', function(e){
      e.preventDefault();
      $.fn.fullpage.moveSectionUp();
    })
    .on('click', '.negan-fp-arrows .next', function(e){
      e.preventDefault();
      $.fn.fullpage.moveSectionDown();
    });

  $('#fullpage').fullpage({
    sectionSelector : '.negan-fp-section',
    slideSelector : '.negan-fp-slide',
    navigation : false,
    responsiveWidth: 991,
    onLeave: function(index, nextIndex){
      $('.negan-fp-arrows .num .current').html(nextIndex < 10 ? '0' + nextIndex : nextIndex );
    }
  });



})(jQuery);
