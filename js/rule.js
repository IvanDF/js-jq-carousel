/*************
 * CAROUSEL
 ************/
$( document ).ready( function() {

    // MOUSE CLICK
    $('.next').click( function() {
        carouselNextPrev('next')
    });
    $('.previous').click( function() {
        carouselNextPrev('prev')
    });

    // KEYBOARD CLICK
    $(document).keydown( function (keyborad) {
        if( keyborad.keyCode == 39 ) {
            // RIGT
            carouselNextPrev('next')
        } else if ( keyborad.keyCode == 37 ) {
            // LEFT
            carouselNextPrev('prev')
        }
    });

    $('.carousel-nav .circle').click(function(){

        // NAVIGATE WITH CAROUSEL NAV
        var activeImage = $('.carousel-images img.active');
        var activeCircle = $('.carousel-nav .circle.active');

        // REMOVE ACTIVE CLASS
        activeImage.removeClass('active');
        activeCircle.removeClass('active');

        var circle = $(this);
        var index = circle.index();

        circle.addClass('active');
        $('.carousel-images img').eq(index).addClass('active')
        
    }); 
 }); // END DOCUMENT READY

// FUNCTIONS
function carouselNextPrev(nextPrev) {

    // VARIABLES
    var activeImage = $('.carousel-images img.active');
    var activeCircle = $('.carousel-nav .circle.active');

    // REMOVE ACTIVE CLASS
    activeImage.removeClass('active');
    activeCircle.removeClass('active');

    // NEXT
    if (nextPrev === 'next') {
        if( activeImage.hasClass('last') ) {
            $('.carousel-images img.first').addClass('active');
            $('.carousel-nav .circle.first').addClass('active');
        } else {
            activeImage.next('img').addClass('active');
            activeCircle.next('.circle').addClass('active');
        }
    }

    // PREVIOUS
    if (nextPrev === 'prev') {
        if( activeImage.hasClass('first') ) {
            $('.carousel-images img.last').addClass('active');
            $('.carousel-nav .circle.last').addClass('active');
        } else {
            activeImage.prev('img').addClass('active');
            activeCircle.prev('.circle').addClass('active');
        }
    }
}