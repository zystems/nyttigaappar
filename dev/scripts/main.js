$( document ).ready(function() {
	$(".Hero-arrowDown").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".Timeline-box").offset().top-150
	    }, 1000);
	});
});