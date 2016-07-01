$(document).ready(function() {
    $(".arrow").click(function() {
        $('html, body').animate({
        	scrollTop: $(".col-md-12").offset().top
        }, 1500);

    });
});