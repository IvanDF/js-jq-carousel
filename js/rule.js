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

 }); // END DOCUMENT READY


// FUNCTIONS
function carouselNextPrev(nextPrev) {

    // SVARIABLES
    var activeImage = $('.carousel-images img.active');
    var activeCircle = $('.carousel-control span.active');

    // REMOVE ACTIVE CLASS
    activeImage.removeClass('active');
    activeCircle.removeClass('active');

    // NEXT
    if (nextPrev === 'next') {
        activeImage.next('img').addClass('active')
        activeCircle.next('span').addClass('active')
    }

    // PREVIOUS
    if (nextPrev === 'prev') {
        activeImage.prev('img').addClass('active')
        activeCircle.prev('span').addClass('active')
    }
}