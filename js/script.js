$(document).ready(function() {

	var page = $('html, body');

    $(".arrow").click(function() {

       	page.on("scroll mousedown DOMMouseScroll keyup mousewheel touchmove", function(){
       		page.stop();
   	   	});

        page.animate({
        	scrollTop: $(".col-md-12").offset().top
        }, 1200, function() {
        	page.off("scroll mousedown DOMMouseScroll keyup mousewheel touchmove");
        });

        return false;
    });


});

// page.animate({
//         	scrollTop: $(".col-md-12").offset().top}
//         }, 1200);

//mousedown wheel DOMMouseScroll mousewheel keyup touchmove