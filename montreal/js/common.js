$(function(){

	$('.js-clients__slider').slick({
		infinite: true,
		dots: true,
		autoplay: false, 
		autoplaySpeed: 1000,
		slidesToShow: 4,
		slidesToScroll: 2,
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
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

	$(window).on('scroll', function(){
		if($('.stats').length > 0){
			if($(this).scrollTop() > ($('.stats').offset().top - ($(window).innerHeight() / 3))){
				$('.count').each(function () {
					$(this).prop('Counter',-1).animate({
						Counter: $(this).attr("data-number")
					}, {
						duration: 1000,
						easing: 'swing',
						step: function (now) {
							$(this).text(Math.ceil(now));
						}
					});
				});
				$(window).off('scroll');
			}
		}
	});

	document.getElementById("tablink-city-open").click();
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

$(function(){
	$.fn.scrollToTop=function(){
		$(this).hide().removeAttr("href");
		if($(window).scrollTop()!="500"){
			$(this).fadeIn("slow")
		}
		var scrollDiv=$(this);
		$(window).scroll(function(){
			if($(window).scrollTop()=="0"){
				$(scrollDiv).fadeOut("slow")
			}else if($(window).scrollTop()>"1000"){
				$(scrollDiv).fadeIn("slow")
			}
		});
		$(this).click(function(){
			$("html, body").animate({scrollTop:0},"slow")
		})
	}});
$(function() {$("#toTop").scrollToTop();});
