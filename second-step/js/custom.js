
$(window).on("load", function(){
	fixedSlider();
});
$(window).on("resize", function() {
	if($(".slide.locked").length) {
		$(".slide.locked").trigger("click");
	}
});
function fixedSlider(){
	var active_index = 0;
	var fixed_index = 0;
	$('.slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		draggable: false,
		swipe: false,
		swipeToSlide: false,
		touchMove: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	$(document).on('click', '.slide', function() {
		if($('.slider').slick('slickGetOption', 'slidesToShow') > 1) {
			if ($('.slide.locked').length) {
				if ($(this).hasClass('locked')){
					if (fixed_index != $(this).attr('data-slick-index')){
						var content = '<div class="slide">' + $(this).text() + '</div>';
						$('.slider').slick('slickRemove', $('.slide.locked').index());
						if($('.slider').slick('slickGetOption', 'slidesToShow') == 5) {
							$('.slider').slick('slickAdd', content, fixed_index - 1);
						}
						else {
							$('.slider').slick('slickAdd', content, fixed_index - 2);
						}
					}
					$(this).removeClass('locked');
					$('.slide').css({
						'margin-left': 15,
						'margin-right': 15
					});
				}
			}
			else {
				$('.slide').css({
					'margin-left': 15,
					'margin-right': 15
				});
				var pos_top = $(this).offset().top - 20;
				var pos_left = $(this).offset().left - 15;
				var slide_width = $(this).innerWidth() + 47;
				$(this).addClass('locked');
				$(this).css({
					'top': pos_top,
					'left': pos_left
				});
				fixed_index = $(this).index();
				if ($(this).index() == $(".slide").length - 1) {
					active_index = $(".slide").length - 1;
					$('.slide').eq(active_index).css({
						'margin-right': slide_width
					})
				}
				else {
					active_index = $(this).index() + 1;
					$('.slide').eq(active_index).css({
						'margin-left': slide_width
					});
				}
			}
		}
	});
	$('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		if($('.slider').slick('slickGetOption', 'slidesToShow') > 1) {
			var slide_width = $(this).find('.locked').innerWidth() + 47;
			$('.slide').css({
				'margin-left': 15,
				'margin-right': 15
			});
			if (Math.abs(nextSlide - currentSlide) == 1) {
				direction = (nextSlide - currentSlide > 0) ? "right" : "left";
			}
			else {
				direction = (nextSlide - currentSlide > 0) ? "left" : "right";
			}
			if (direction == 'right') {
				active_index = active_index + 1;
				fixed_index = fixed_index + 1;
				if ($('.slide').eq(active_index).hasClass('locked')){
					active_index = active_index + 1;
				}
				if (active_index == $(".slide").length - 1){
					$('.slide').eq(active_index).css({
						'margin-left': slide_width
					});
				}
				else {
					$('.slide').eq(active_index).css({
						'margin-left': slide_width
					});
				}
			}
			else if (direction == 'left') {
				active_index = active_index - 1;
				fixed_index = fixed_index - 1;
				if ($('.slide').eq(active_index).hasClass('locked')){
					active_index = active_index - 1;
				}
				if (active_index == $(".slide").length - 1){
					active_index = active_index - 1;
					$('.slide').eq(active_index).css({
						'margin-right': slide_width
					});
				}
				else {
					$('.slide').eq(active_index).css({
						'margin-left': slide_width
					});
				}
			}
		}
	});
};

