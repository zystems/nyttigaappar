$(document).ready(function(){
	var $window = $(window);
	
	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this); // assigning the object
		$(window).scroll(function() {
			var yPos = -($window.scrollTop() / $bgobj.data('speed'))+450;
			// Put together our final background position
			var xPos = '100% ';
			var d = window.innerWidth;
			switch (true) {
				case (d <= 680) :
					xPos = '70% ';
					break;
				case (d <= 960) :
					xPos = '80% ';
					break;
				case (d <= 1080) :
					xPos = '90% ';
					break;
				default:
					xPos = '100% '
			}

			var coords = xPos + yPos + 'px';
			// Move the background
			$bgobj.css({ backgroundPosition: coords });
		});
	});
});