$(document).ready(function() {

	$('a.scroll').hide();
	$('div.wrapper').hover(
		function(){$(this).find('a').fadeIn('1000');}//,
		//function(){$(this).find('a').fadeOut('1000');}
		);

	(function($){
		$.fn.Align = function() {
			return this.each(function(i){
				var height = $(this).height();
				//var width = $(this).width();
				var computeheight = Math.ceil(height/2); //Rounds upward to integer;
				//var computewidth = Math.ceil(width/3);
				$(this).css('top', '50%').css('margin-top',-computeheight);
				//$(this).css('right', '50%').css('margin-right', -computewidth);
			});
		};
	})(jQuery);

	//Script for bar graph
	(function($){
		$.fn.bargraph = function() {
			return this.each(function(i){
				var width = $(this).attr("value");
				var id = $(this).attr("id");
				if (id=="None")
					{$(this).css('display', 'none');}
				if (id%2==1) 
					{$(this).css('background-color', '#3366ff');}
				else
					{$(this).css('background-color', '#002eb8');}
				$(this).css('width', width*2);
				$('h3[value="None"]').hide();
			});
		};
	})(jQuery);
	
	//Script for Line Graph
	(function($){
		$.fn.linegraph = function() {
			return this.each(function(i){
				var width = $(this).attr("value");
				var rounded = Math.ceil(width);
				var computedwidth = rounded + "%";
				$(this).css('width', computedwidth);
				$('div[key="None"]').hide();
			});
		};
	})(jQuery);

	(function($){
		$.fn.bool = function() {
			return this.each(function(i){
				var key = $(this).attr("key");
				if (key%2==1)
					$(this).css('background-color', '#3366ff');
				else
					$(this).css('background-color', '#002eb8');
			});
		};
	})(jQuery);


	$('.wrapper').Align();

	$('.rows').bargraph();

	$('.lineseg').linegraph();

	$('.belowline .lineseg').bool();

});
