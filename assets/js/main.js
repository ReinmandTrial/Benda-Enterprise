/*
ЕСЛИ ПРИ ПОДКЛЮЧЕНИИ SLIKE В CONSLOLE ERROR:
	Надо в файле slick-theme.css поменять все пупит к fonts и изображению!!!
	Пример: ../img/ajax-loader.gif иди для fonst ../fonts/slick.eot?#iefix
	Причина этому то что изменение структуры галпом и он думает что находиться в коне паки slik.
*/

// Внутри пишем все функции связанные с jQuery
jQuery(document).ready(function ($) {

	$('.header-slider').slick({
		infinite: true,
		slidesToShow: 11,
		slidesToScroll: 1,
		nextArrow: '<i class="slider__next"></i>',
		prevArrow: '<i class="slider__prev"></i>',
		dots: false,
		responsive: [{
			breakpoint: 1600,
			settings: {
				slidesToShow: 8,
				slidesToScroll: 1,
				infinite: true
			}
		}, {
			breakpoint: 1366,
			settings: {
				slidesToShow: 7,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 992,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		}]
	});

	$('.solutions-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: '<i class="slider__next"></i>',
		prevArrow: '<i class="slider__prev"></i>',
		dots: true,
		responsive: [{
			
			breakpoint: 1500,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		}, {
			
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	

	// Scroll
	$(function () {
		$('a[data-target^="scroll"]').bind('click.smoothscroll', function () {
			var target = $(this).attr('href'),
			    pushTop = 200,
			    bl_top = $(target).offset().top - pushTop;

			$('body, html').animate({ scrollTop: bl_top }, 700);
			return false;
		});
	});

	$('.virtual-room__location').click(function () {
		$(this).closest('.virtual').find('.virtual-cat').eq($(this).closest('.owl-item').index()).addClass('active');
	});

	$('.close').click(function () {
		$('.virtual-cat').removeClass('active');
	});
	$('.virtual-room__carousel').on('click', '.owl-dot', function () {
		$('.virtual-cat').removeClass('active');
		
	});

	$('.nav-list-mob').click(function () {
		$(this).toggleClass('active');
		$('.menu').toggleClass('active');
		$('.menu-cats, .menu-cat').removeClass("active");
		$(".header-slider__item").removeClass("active");
	});
	$('.menu-search-toggle--js').on('click', (e) => {
		$('.nav-list-mob').removeClass('active');
		$('.menu').removeClass('active');
		$('.menu-cats, .menu-cat').removeClass("active");
		$(".header-slider__item").removeClass("active");
	});
	$('.page').click(function() {

		$('.menu-search').removeClass('active');
		$('.nav-list-mob').removeClass('active');
		$('.menu').removeClass('active');
		$('.menu-cats, .menu-cat').removeClass("active");
		$(".header-slider__item").removeClass("active");

	});

	// mob menu category
	var linkCat = $('.cat__title');
	linkCat.click(function (e) {
		var numbarMenu = $(this).siblings().children().attr("class").slice(-1);

		var allCatMobMenu = $('.cat-mob');

		for (var i = 0; i < allCatMobMenu.length; i++) {
			var menu = allCatMobMenu[i];
			$(menu).removeClass('active');
		}

		$('.cat-mob_' + numbarMenu).addClass('active');
	});
	if($(window).width() > 1199) {
		$(".header-slider__item").mouseenter(function () {
			$(this).addClass("active");
			$('.menu-cats').addClass("active");
			$('.menu-cat').removeClass("active");
			$('.menu-cat').eq($(this).attr("data-id")).addClass("active");
	
			$('.nav-list-mob').removeClass('active');
			$('.menu').removeClass('active');
	
	
		});
	} else {
		$(".header-slider__item").click(function () {
			$('.menu-search').removeClass('active');
			
	
			$('.nav-list-mob').removeClass('active');
			$('.menu').removeClass('active');
	
			if($(this).hasClass('active')) {
				$(this).removeClass("active");
				$(".header-slider__item").removeClass("active");
				$('.menu-cats').removeClass("active");
				$('.menu-cat').removeClass("active");
				$('.menu-cat').eq($(this).attr("data-id")).addClass("active");
			} else {
				$(".header-slider__item").removeClass("active");
				$(this).addClass("active");
				$('.menu-cats').addClass("active");
				$('.menu-cat').removeClass("active");
				$('.menu-cat').eq($(this).attr("data-id")).addClass("active");
			}

			
		});
		
	}
	
	$('.header__top').mouseenter(function () {
		$('.menu-cats, .menu-cat').removeClass("active");
		$(".header-slider__item").removeClass("active");
	});
	/*$(".header-slider__item").on('click', function() {
		$('.menu-cats, .menu-cat').removeClass("active");
	});*/
	$('.header__bottom .header-slider').mouseenter(function () {
		
	});
	
	$('.menu-cats').mouseleave(function () {
		var allCatMobMenu = $('.cat-mob');

		for (var i = 0; i < allCatMobMenu.length; i++) {
			var menu = allCatMobMenu[i];
			$(menu).removeClass('active');
			
		}
		$('.menu-cat, .menu-cats').removeClass("active");
	});
	

	// AOS.init();	
	svg4everybody({});



	$('.menu-footer .menu-footer__title').click(function(){
		$(this).closest('.menu-footer__item').toggleClass('active');
	});



	$('.cat-menu__link')
	.on('mouseleave', function() {
		console.log('mouseleave');
		$('.cat-menu__link').css({
			//'background' : 'transparent'
		})
	})
	.on('mouseenter', function() {
		console.log('mouseenter');
		$('.cat-menu__link').css({
			//'background' : 'green'
		})
	})



	
});

// Ниже пишем обычный JS



