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
    })

    
    //  ON HOVER ANMATION
    var carouselImgs = $('.carousel-images');
    var nav = $('.carousel-images i');
    var circles = $('.carousel-control .circle');
    
    carouselImgs.mouseenter( function () {
        nav.addClass('onhover')
        circles.addClass('onhover')
    });
    
    carouselImgs.mouseleave( function () {
        nav.removeClass('onhover')
        circles.removeClass('onhover')
    });
 }); // END DOCUMENT READY



// FUNCTIONS
function carouselNextPrev(nextPrev) {

    // SVARIABLES
    var activeImage = $('.carousel-images img.active');
    var activeCircle = $('.carousel-control .circle.active');

    // REMOVE ACTIVE CLASS
    activeImage.removeClass('active');
    activeCircle.removeClass('active');

    // NEXT
    if (nextPrev === 'next') {
        if( activeImage.hasClass('last') ) {
            $('.carousel-images img.first').addClass('active');
            $('.carousel-control .circle.first').addClass('active');
        } else {
            activeImage.next('img').addClass('active');
            activeCircle.next('.circle').addClass('active');
        }
    }

    // PREVIOUS
    if (nextPrev === 'prev') {
        if( activeImage.hasClass('first') ) {
            $('.carousel-images img.last').addClass('active');
            $('.carousel-control .circle.last').addClass('active');
        } else {
            activeImage.prev('img').addClass('active');
            activeCircle.prev('.circle').addClass('active');
        }
    }
}