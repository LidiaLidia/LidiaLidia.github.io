$(function(){

	$(document).ready(function(){
		dropdown();

		// Script for menu button
		$('.js-burger-menu').on('click', function() {
			if ($(this).hasClass("burger-menu-clicked")) {
				$(this).removeClass("burger-menu-clicked");
				$(this).addClass("burger-menu-closing");
			} else {
				$(this).addClass("burger-menu-clicked");
				$(this).removeClass("burger-menu-closing");
			}
		});
		$('.js-navbar__icon').on('click', function(){
			$('.js-header__mobile--menu').toggleClass('active');
			$('.js-navbar__icon').toggleClass('active');
		});

		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		}
	});
	});
	$('.js-tours__items').slick({
		infinite: true,
		dots: false,
		autoplay: false, 
		autoplaySpeed: 1000,
		slidesToShow: 4,
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
	prevArrow: '<div class="slider-arrow-block slider-arrow-block-prev"><img class="slider-arrow slider-arrow-prev" src="img/left.png" alt="" /></div>',
	nextArrow: '<div class="slider-arrow-block slider-arrow-block-next"><img class="slider-arrow slider-arrow-next" src="img/right.png" alt="" /></div>',
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
});

function openTab(evt, tabName, tabcontentClass, tablinksClass) {
	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName(tabcontentClass);
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName(tablinksClass);
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}

document.getElementById("tablink-city-open").click();
document.getElementById("tablink-type-open").click();


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
