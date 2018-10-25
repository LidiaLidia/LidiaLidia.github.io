$(function(){
	$(document).ready(function(){
        sliderInit();
        slider1Init();
        ArrowLocation();
        $(window).resize(function(){
            ArrowLocation();
        });


        $('.burger-menu').on('click', function() {
            if ($(this).hasClass("burger-menu-clicked")) 
            {
               $(this).removeClass("burger-menu-clicked");
               $(this).addClass("burger-menu-closing");
           } 
           else {
            $(this).addClass("burger-menu-clicked");
            $(this).removeClass("burger-menu-closing");
        }
    });

        $('.header__bottom-line__navbar__icon').on('click', function(){
            $('.header__bottom-line__navbar').toggleClass('active');
        });

        $(window).on('scroll', function(){
            if($(this).scrollTop() > 0){
                $('.header').css('transform', 'translateY('+-$('.header__top-line').outerHeight()+'px)').addClass('fixed');
            }
            else{
                $('.header').css('transform', 'translateY(0)').removeClass('fixed');
            }
        });

        $('.js-head-block__down').on('click', function(){
            var scrollH = $('.head-block__wrap').innerHeight() - $('.header__bottom-line').innerHeight();
            $('html').animate({scrollTop: scrollH}, '3000')
        });

        $('.js-main-article__player--slider').slick({
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
            prevArrow: '<img class="player-slider-arrow player-slider-arrow-prev" src="img/arrow-prev.png" alt="" />',
            nextArrow: '<img class="player-slider-arrow player-slider-arrow-next" src="img/arrow-next.png" alt="" />',
        });


        $('.js-hot-topic__grid').masonry({
            itemSelector: '.hot-topic__grid-item',
            columnWidth: 370
        });

    });
//Slider function
function sliderInit(){
    if($('.slider').length > 0){
        var slider = $('.slider');
        //Update function
        function update(slick){
            var prevSlideIndex = slick.currentSlide - 1;
            var nextSlideIndex = slick.currentSlide + slick.options.slidesToShow;
            var lastSlide = $(".slider-slide[data-slick-index="+(slick.slideCount-1)+"]");
            var firstSlide = $(".slider-slide[data-slick-index="+0+"]");
            var currentSlideM = $(".slider-slide[data-slick-index="+(slick.slideCount-3)+"]");
            var prevSlide = $(".slider-slide[data-slick-index="+prevSlideIndex+"]");
            var nextSlide = $(".slider-slide[data-slick-index="+nextSlideIndex+"]");
            $('.slider__nav--prev .slider__nav__index').text("0"+(Number(prevSlide.attr('data-slick-index')) + 1));
            $('.slider__nav--prev .slider__nav__tag').text(prevSlide.attr('data-tag'));
            $('.slider__nav--prev .slider__nav__title').text(prevSlide.attr('data-title'));
            $('.slider__nav--next .slider__nav__index').text("0"+(Number(nextSlide.attr('data-slick-index')) + 1));
            $('.slider__nav--next .slider__nav__tag').text(nextSlide.attr('data-tag'));
            $('.slider__nav--next .slider__nav__title').text(nextSlide.attr('data-title'));
            if(prevSlideIndex == -1){
                $('.slider__nav--prev .slider__nav__index').text("0"+(Number(lastSlide.attr('data-slick-index'))+1));
                $('.slider__nav--prev .slider__nav__tag').text(lastSlide.attr('data-tag'));
                $('.slider__nav--prev .slider__nav__title').text(lastSlide.attr('data-title'));
            }
            if(slick.slideCount%2 == 0){
                if(nextSlide.attr('data-slick-index') == slick.slideCount){
                    $('.slider__nav--next .slider__nav__index').text("0"+(Number(firstSlide.attr('data-slick-index'))+1));
                    $('.slider__nav--next .slider__nav__tag').text(firstSlide.attr('data-tag'));
                    $('.slider__nav--next .slider__nav__title').text(firstSlide.attr('data-title'));
                }
            }
            if(slick.slideCount%2 != 0){
                if(nextSlide.attr('data-slick-index') == slick.slideCount + 1){
                    $('.slider__nav--prev .slider__nav__index').text("0"+(Number(currentSlideM.attr('data-slick-index')) + 1));
                    $('.slider__nav--prev .slider__nav__tag').text(currentSlideM.attr('data-tag'));
                    $('.slider__nav--prev .slider__nav__title').text(currentSlideM.attr('data-title'));
                    $('.slider__nav--next .slider__nav__index').text("0"+(Number(firstSlide.attr('data-slick-index'))+1));
                    $('.slider__nav--next .slider__nav__tag').text(firstSlide.attr('data-tag'));
                    $('.slider__nav--next .slider__nav__title').text(firstSlide.attr('data-title'));
                }
            }
            
        }
        //Init event
        slider.on('init', function(event, slick) {
            update(slick);
        });
        //After change event
        slider.on('afterChange', function(event, slick){
            update(slick);
        });
        var buttons = $('.slider-arrows');
        //Slick options
        slider.slick({
            infinite: true,
            dots: false,
            accessibility: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
            adaptiveHeight: true,
            appendArrows: buttons,
            prevArrow: '<img class="slider-arrow slider-arrow-prev" src="img/arrow-prev.png" alt="" />',
            nextArrow: '<img class="slider-arrow slider-arrow-next" src="img/arrow-next.png" alt="" />',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
}

function slider1Init(){
    var slideCount = $('.js-head-block--slider').children('div').length;

    var lastSlide = $('.js-head-block--slider').children('div:last-child');
    // alert(lastSlide);
    var firstSlide = $('.js-head-block--slider').children('div:first-child');
    if($('.js-head-block--slider').length > 0){
        var slider1 = $('.js-head-block--slider');
        //Update function
        function update(slick){
            var prevSlideIndex = slick.currentSlide - 1;
            var nextSlideIndex = slick.currentSlide + 1;
            var prevSlide = $(".head-block--slide[data-slick-index="+prevSlideIndex+"]");
            var nextSlide = $(".head-block--slide[data-slick-index="+nextSlideIndex+"]");
            $('.head-slider-arrow-prev span').text("0"+(Number(prevSlide.attr('data-slick-index')) + 1));
            $('.head-slider-arrow-next span').text("0"+(Number(nextSlide.attr('data-slick-index')) + 1));
            $('.head-block--slider__number-prev').text("0"+(Number(prevSlide.attr('data-slick-index')) + 1));
            $('.head-block--slider__number-next').text("0"+(Number(nextSlide.attr('data-slick-index')) + 1));
            if (prevSlideIndex == -1) {
                $('.head-slider-arrow-prev span').text("0"+slick.slideCount);
                $('.head-block--slider__number-prev').text("0"+slick.slideCount);
            }
            if (nextSlideIndex == slick.slideCount) {
                $('.head-slider-arrow-next span').text('01');
                $('.head-block--slider__number-next').text('01');
            }
        }
        //Init event
        slider1.on('init', function(event, slick) {
            update(slick);
        });
        //After change event
        slider1.on('afterChange', function(event, slick){
            update(slick);
        });
        //Slick options
        slider1.slick({
            infinite: true,
            dots: false,
            accessibility: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            adaptiveHeight: true,
            prevArrow: '<div class="head-slider-arrow-prev"><span>01</span><img class="slider-arrow" src="img/slider-arrow-prev.png" alt="" /></div>',
            nextArrow: '<div class="head-slider-arrow-next"><span>03</span><img class="slider-arrow" src="img/slider-arrow-next.png" alt="" /></div>'
        });
    }
}

function ArrowLocation(){
    var windowW = $(window).width();
    var halfWindowW = windowW / 2;
    var containerW = $(".container").width();
    var halfContainerW = containerW / 2;
    var location = halfWindowW - halfContainerW;
    if(window.innerWidth > 991){
        $(".head-slider-arrow-prev").css("left", location+"px");
        $(".head-slider-arrow-next").css("right", location+"px");  
    }
    else{
        $(".head-slider-arrow-prev").css("left", "10px");
        $(".head-slider-arrow-next").css("right", "10px");  
    }
    
}

});
