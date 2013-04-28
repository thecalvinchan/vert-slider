$(document).ready(function() {

	$('.scroll').last().removeClass('scroll').replaceWith('<a class="scrollup" href="#">Back to the Top</a>');

	$('.scroll').click(function(e){
		var next = $(this).parent().parent().next();
		$('html, body').animate({scrollTop: $(next).offset().top - 10}, 'slow');
		e.preventDefault();
	});

	$('.scrollup').click(function(e){
		$('html, body').animate({scrollTop: 0}, 'slow');
		e.preventDefault();
	});

});