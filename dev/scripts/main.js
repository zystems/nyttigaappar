$( document ).ready(function() {
	$(".Hero-arrowDown").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".Infobox").offset().top
	    }, 1000);
	});
});