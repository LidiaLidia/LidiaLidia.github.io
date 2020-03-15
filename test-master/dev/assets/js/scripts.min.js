$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
});

/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */

$(function(){

	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
	 });
	/* placeholder*/
	
	/* components */
	if ($('.styled').length) {
		$('.styled').styler();
	}
	$('form').attr('autocomplete', 'off');
	
	new Vivus('my-svg', {type: "oneByOne", duration: 400, delay:0}); 
	if ($('.js-validate-form').length) {
		$('.js-validate-form').validate({
			html: true,
			rules: {
				password: {
					required: true,
					pattern: "/.*([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+).*/",
					minlength: 8,
					required: "Неверный пароль"
				},
				confirm_password: {
					required: true,
					equalTo: "#password-change_new",
					required: "Неверный пароль"
				}
				},
				messages: {
					password: {
						required: "Неверный пароль"
					},
					confirm_password: {
						required: "Неверный пароль",
						equalTo: "Неверный пароль"
					}
				}
			});
		};

	new WOW().init();
	$('.js-sign-up__btn').on('click', function(e){
		e.preventDefault();
		if ($('#email').hasClass('valid')&&$('#password-change_new').hasClass('valid')&&$('#confirm_password').hasClass('valid')){
			$(this).removeClass('error');
			console.log('sdkjfhkhdk');
		}
		else {
			$(this).addClass('error');
		}
	});


	
	// new Vivus('my-svg', {duration: 200}, myCallback);
	
	/* components */
	
	

});


