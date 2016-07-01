$(document).ready(function() {
    $(".arrow").hover(function() {
        $('html, body').animate({
        	scrollTop: $(".col-md-12").offset().top
        }, 1500);

    });
});