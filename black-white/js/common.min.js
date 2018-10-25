$(function(){
	

	$('.js-new-item__items').slick({
		infinite: true,
		dots: true,
		autoplay: false, 
		autoplaySpeed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		cssEase: 'ease',
		pauseOnHover: true, 
		adaptiveHeight: true, // works only with one slide
		useCSS: true, // - mast be disabled to use custom animaton
		// easing: 'easeInOutElastic', // - custom animation(must include jquery.easing.js)
		speed: 700,
		vertical: false, // - vertical slider 
		draggable: true, // - enable drag slides on desctop
		touchMove: true, // - enable moves slided with touch
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});
	$('.js-hot-item__items').slick({
		infinite: true,
		dots: true,
		autoplay: false, 
		autoplaySpeed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		cssEase: 'ease',
		pauseOnHover: true, 
		adaptiveHeight: true, // works only with one slide
		useCSS: true, // - mast be disabled to use custom animaton
		// easing: 'easeInOutElastic', // - custom animation(must include jquery.easing.js)
		speed: 700,
		vertical: false, // - vertical slider 
		draggable: true, // - enable drag slides on desctop
		touchMove: true, // - enable moves slided with touch
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});


	$(document).ready(function() {

		dropdown();
		headSlider();
		ArrowLocation();

		$('.popup-youtube').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

		$('.js-burger-menu').on('click', function() {
			if ($(this).hasClass("burger-menu-clicked")) {
				$(this).removeClass("burger-menu-clicked");
				$(this).addClass("burger-menu-closing");
			} else {
				$(this).addClass("burger-menu-clicked");
				$(this).removeClass("burger-menu-closing");
			}
		});
		$('.js-header__bottom-line__menu-toggle').on('click', function(){
			$('.js-header__bottom-line__menu-dropdown').slideToggle('normal');
			$('.js-header__bottom-line__menu-dropdown').toggleClass('active');
		});

		$('.js-navbar__icon').on('click', function(){
			$('.js-header__bottom-line__menu').toggleClass('active');
			$('.js-navbar__icon').toggleClass('active');
		});

		$.fn.scrollToTop=function(){
			$(this).hide();
			if($(window).scrollTop() > 500){
				$(this).fadeIn('slow')
			}
			var scrollDiv=$(this);
			$(window).scroll(function(){
				if($(window).scrollTop() < 500){
					$(scrollDiv).fadeOut('slow')
				}
				else if($(window).scrollTop() > 500){
					$(scrollDiv).fadeIn('slow')
				}
			});
			$(this).click(function(){
				$('html, body').animate({scrollTop: 0},'slow')
			})
		}
		$(function(){
			$('#to-top').scrollToTop();
		});
	});

});


function headSlider(){
	var slider = $('.js-head-block__items');
	var slideCount = slider.children('div').length;
	if(slider.length > 0){
		function update(slick){
			$('.js-head-block__counter-current').text(Number(slick.currentSlide + 1));
			$('.js-head-block__counter-total').text(Number(slick.slideCount));
		}
		slider.on('init', function(event, slick) {
			update(slick);
		});
		slider.slick({
			infinite: true,
			dots: false,
			autoplay: false, 
			autoplaySpeed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			cssEase: 'ease',
			pauseOnHover: true, 
			adaptiveHeight: true, // works only with one slide
			useCSS: true, // - mast be disabled to use custom animaton
			// easing: 'easeInOutElastic', // - custom animation(must include jquery.easing.js)
			speed: 700,
			vertical: false, // - vertical slider 
			draggable: true, // - enable drag slides on desctop
			touchMove: true, // - enable moves slided with touch
			prevArrow: '<span class="slider-arrow slider-arrow-prev"><i class="fas fa-arrow-left"></i></i><span/>',
			nextArrow: '<span class="slider-arrow slider-arrow-next"><i class="fas fa-arrow-right"></i><span/>',
		});
		

		slider.on('afterChange', function(event, slick){
			update(slick);
		});
	}
}

function ArrowLocation(){
	var windowW = $(window).width();
	var halfWindowW = windowW / 2;
	var containerW = $(".container").width();
	var halfContainerW = containerW / 2;
	var location = halfWindowW - halfContainerW;
	$(".slider-arrow-next").css("right", location+"px");
	$(".slider-arrow-prev").css("left", location+"px");
}



function dropdown(){
	$(document).on('click', '.js-dropdown__select', function(){
		$(this).next('.js-dropdown__box').stop().toggleClass('active');
		$(this).toggleClass('active');
	});
	$(document).on('click', '.js-dropdown__box__item', function(){
		var dataRes = $(this).attr('data-res');
		var resultText = $(this).find('span').text();
		$(this).closest('.js-dropdown__box').prev('.js-dropdown__select').find('.js-dropdown__result span').text(resultText);
		$(this).closest('.js-dropdown__box').prev('.js-dropdown__select').find('.js-dropdown__result').attr('data-res', dataRes);
		$(this).closest('.js-dropdown__box').stop().removeClass('active');
		$(this).closest('.js-dropdown__box').prev('.js-dropdown__select').find('.js-dropdown__toggle').stop().removeClass('active');
	});
}