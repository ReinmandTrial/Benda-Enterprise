/*jslint browser, es6 */
/*global window */

$(window).on('load', function () {
  $('body').addClass('loaded_hiding');
  window.setTimeout(function () {
    $('body').addClass('loaded');
    $('body').removeClass('loaded_hiding');
  }, 500);
})
window.onload = function () {

  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top - 70;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
  new WOW().init();
  /**tabs carousel на странице брендов**/
  $('.tabsCarousel__carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    navText: ['<i class="slider__next slick-arrow"></i>', '<i class="slider__prev slick-arrow"></i>'],
    rtl:true,
    dots: false,
    responsive:{
      0:{
        items:2
      },
      767:{
        items:3
      },
      1199:{
        items:4
      }
    }
  });
  /**tabs carousel на странице брендов**/


  /**карусель брендов на странице брендов**/
  $('.allBrands__carousel--js').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    navText: ['<i class="slider__next slick-arrow"></i>', '<i class="slider__prev slick-arrow"></i>'],
    rtl:true,
    dots: true,
    responsive:{
      0:{
        margin:0,
        items:2
      },
      767:{
        
        items:3
      },
      1199:{
        items:4
      }
    }
  });

  $('.allBrands__carousel--jsRight').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    navText: ['<i class="slider__next slick-arrow"></i>', '<i class="slider__prev slick-arrow"></i>'],
    rtl:false,
    dots: true,
    responsive:{
      0:{
        margin:0,
        items:2
      },
      767:{
        
        items:3
      },
      1199:{
        items:4
      }
    }
  });
  /**карусель брендов на странице брендов**/

  /**табы**/
  $('.tabs__header').on('click', '.tabs__headerEl:not(.active)', function() {
    $(this).closest('.tabs__header').find('.tabs__headerEl').removeClass('active');
    $(this).addClass('active');
    $(this).closest('.tabs').children('.tabs__body').children('.tabs__content').removeClass('active');
    $(this).closest('.tabs').children('.tabs__body').children('.tabs__content').eq($(this).index()).addClass('active');
  });

  $('.tabsCarousel__carousel').on('click', '.tabs__headerEl:not(.active)', function() {
    $(this).closest('.tabsCarousel__carousel').find('.tabs__headerEl').removeClass('active');
    $(this).addClass('active');
    $(this).closest('.tabs').children('.tabs__body').children('.tabs__content').removeClass('active');
    $(this).closest('.tabs').children('.tabs__body').children('.tabs__content').eq($(this).closest('.owl-item').index()).addClass('active');
  });
  /**табы**/
  
  // $( ".accordion" ).accordion({
  //   animate: 0
  // });

$('.categories__accordion')
.on('mouseover', '.el', function() {
  $(this).find('.el__header').addClass('active');
  $(this).find('.el__body').addClass('active');
})
.on('mouseleave', '.el', function() {
  $(this).find('.el__header').removeClass('active');
  $(this).find('.el__body').removeClass('active');
});;

  $('.filterToggle').click(function() {
    $('.categoriesMenu').toggleClass('active');
  });






  $('.dropdown').on('click', '.dropdown-item', function() {
    let i = $(this);
    i.closest('.dropdown').find('.dropdown__value').html(i.html());
  });



  $('.reviews__tabsNav--left').niceScroll({
    cursorcolor: "#F8C80F",
    cursorwidth: "4px",
    cursorborderradius: "0px",
    background: "#E0E0E0",
    rtlmode: "false",
    cursorborder: "0px solid transparent",
    autohidemode: false,
    railalign: "left"
  });

  $('.reviews__tabsNav--right').niceScroll({
    cursorcolor: "#F8C80F",
    cursorwidth: "4px",
    cursorborderradius: "0px",
    background: "#E0E0E0",
    rtlmode: "false",
    cursorborder: "0px solid transparent",
    autohidemode: false,
    railalign: "right"
  });
  



  $('.moreLogos__carousel--js').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    navText: ['<i class="slider__next slick-arrow"></i>', '<i class="slider__prev slick-arrow"></i>'],
    rtl:true,
    dots: false,
    autoplay:true,
    autoplayTimeout:3500,
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:4
      },
      991:{
        items:5
      },
      1199:{
        items:6
      }
    }
  });

  $('.moreLogos__carousel--jsRight').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    navText: ['<i class="slider__next slick-arrow"></i>', '<i class="slider__prev slick-arrow"></i>'],
    rtl:false,
    dots: false,
    responsive:{
      0:{
        items:4
      },
      991:{
        items:5
      },
      1199:{
        items:6
      }
    }
  });
  
  if($('.page').hasClass('page--about')) {
    $(function () {
      var fx = function fx() {
      $(".mapInfo__el .mapInfo__elTitleNumber").each(function (i, el) {
          var data = parseInt(this.dataset.n, 10);
          var props = {
              "from": {
                  "count": 0
              },
                  "to": { 
                  "count": data
              }
          };
          $(props.from).animate(props.to, {
              duration: 4000 * 1,
              step: function (now, fx) {
                  $(el).text(Math.ceil(now));
              },
              complete:function() {
                  if (el.dataset.sym !== undefined) {
                    el.textContent = el.textContent.concat(el.dataset.sym)
                  }
              }
          });
      });
      };
      
      var reset = function reset() {
          //console.log($(this).scrollTop())
          if ($(this).scrollTop() > 
          $('.world-leader').height() + 
          150) {
              $(this).off("scroll");
            fx()
          }
      };
      
      $(window).on("scroll", reset);
  });
  };
  if($('.page').hasClass('page--main')) {
    /*let scrollCount = 0;
    $(window).scroll(function(){
      console.log($(window).scrollTop());

      (function() {
        if($(window).scrollTop() > 
          $('.world-leader').height() + 
          $('.our-friend').height() + 
          $('.business-solutions').height() + 
          150 ) {
            scrollCount++;
            if(scrollCount == 1) {
              $('.why-us-list__title span').each(function() {
                $(this).prop('Counter', 0).animate({
                  Counter: $(this).text()
                }, {
                  duration: 3000,
                  easing: 'swing',
                  step: function(now) {
                    $(this).text(Math.ceil(now));
                    
                  }
                  
                });
                
              });
            }
            
          }
        var executed = false;
        return function() {
            if (!executed) {
                executed = true;
                
            }
        };
      })();

      
        
      
    })*/
    $(function () {
      var fx = function fx() {
      $(".why-us-list__title span").each(function (i, el) {
          var data = parseInt(this.dataset.n, 10);
          var props = {
              "from": {
                  "count": 0
              },
                  "to": { 
                  "count": data
              }
          };
          $(props.from).animate(props.to, {
              duration: 4000 * 1,
              step: function (now, fx) {
                  $(el).text(Math.ceil(now));
              },
              complete:function() {
                  if (el.dataset.sym !== undefined) {
                    el.textContent = el.textContent.concat(el.dataset.sym)
                  }
              }
          });
      });
      };
      
      var reset = function reset() {
          //console.log($(this).scrollTop())
          if ($(this).scrollTop() > 
          $('.world-leader').height() + 
          $('.our-friend').height() + 
          $('.business-solutions').height() + 
          150) {
              $(this).off("scroll");
            fx()
          }
      };
      
      $(window).on("scroll", reset);
  });


  }

  
  
  $(".header__bottom").sticky({topSpacing:0});

  $('.virtual-room__carousel').on('initialized.owl.carousel', function(e){
    $('.slider-prod-main').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '<i class="slider__next"></i>',
      prevArrow: '<i class="slider__prev"></i>',
      arrows: false,
      dots: false,
      fade: true,
      asNavFor: '.slider-prod'
    });
  
    $('.slider-prod').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      nextArrow: '<i class="slider__next"></i>',
      prevArrow: '<i class="slider__prev"></i>',
      dots: false,
      asNavFor: '.slider-prod-main',
      focusOnSelect: true,
      responsive: [{
        breakpoint: 1760,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      }]
    });
    $('.slider-prod').on('swipe', function(event, slick, direction){
      console.log(direction);
    });
  });
  $('.virtual-room__carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:false,
    rtl:true,
    dots: true,
    items: 1
    
    /*responsive: {
      991 : {
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true
      },
      0 : {
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false
      }
    }*/
  });


  const widnowResizeMobile = () => {
    if($(window).width() > 480) {
      console.log($(window).width());
      $('.our-friend-list').trigger('destroy.owl.carousel').removeClass('owl-carousel');
    } else {
      $('.our-friend-list').addClass('owl-carousel');
      ourFriendCarouselInit();
    }
  }

  const ourFriendCarouselInit = () => {
    $('.our-friend-list').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      rtl:true,
      dots: true,
      items: 1,
      autoplay:true,
      autoplayTimeout:3500,
      autoplayHoverPause:true
    });
  }

  widnowResizeMobile();
  $(window).on('resize', function() {
    widnowResizeMobile();
  })


  $('.menu-search-toggle--js').on('click', function() {
    $('.menu-search').toggleClass('active');
  });

  $('.menu-search__input').on('keyup', (e) => {
    if($(e.currentTarget).val().length == 0) {
      $(e.currentTarget).siblings('.menu-search__buttons').find('.menu-search__clear').addClass('d-none');
    } else {
      $(e.currentTarget).siblings('.menu-search__buttons').find('.menu-search__clear').removeClass('d-none');
    }
  })
  $('.menu-search__clear').on('click', (e) => {
    $(e.currentTarget).addClass('d-none').closest('.menu-search__buttons').siblings('.menu-search__input').val('');
  });


  


  let sync1 = $("#sync1");
  let sync2 = $("#sync2");
  let slidesPerPage = 6; //globaly define number of elements per page
  let syncedSecondary = true;

  sync1.owlCarousel({
    items : 1,
    slideSpeed : 2000,
    nav: false,
    autoplay: false,
    dots: false,
    loop: true,
    responsiveRefreshRate : 200,

  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
      mouseDrag : false,
      touchDrag : false,
      items : slidesPerPage,
      dots: false,
      nav: false,
      margin: 15,
      smartSpeed: 200,
      slideSpeed : 500,
      slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate : 100,
      responsive: {
        0 : {
          margin: 5
        },
        767 : {
          margin: 15
        }
      }
  }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;
    
    //if you disable loop you have to comment this block
    let count = el.item.count-1;
    let current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    
    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    let onscreen = sync2.find('.owl-item.active').length - 1;
    let start = sync2.find('.owl-item.active').first().index();
    let end = sync2.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      let number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    let number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });


};


