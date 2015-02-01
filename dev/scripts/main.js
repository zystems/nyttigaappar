$(".Hero-arrowDown").click(function() {
    $('html, body').animate({
        scrollTop: $("#Timeline-start").offset().top
    }, 1000);
});