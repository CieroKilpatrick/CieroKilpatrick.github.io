$( document ).ready(function() {
    
    var hamburger = $('#mobile-toggle').html();

    $( '#mobile-toggle').click(function(){

      if( $('.mobile-nav').hasClass('visible') ){

        $('.mobile-nav').css({'visibility': 'visible'});
        $('#mobile-toggle').css({'color': '#333'});
        $('#mobile-toggle').html('CLOSE X');
        $('.mobile-nav').removeClass('visible');

        } else {

        $('.mobile-nav').css({'visibility': 'hidden'});
        $('#mobile-toggle').css({'color': '#000'});
        $('#mobile-toggle').html(hamburger);
        $('.mobile-nav').addClass('visible');

        }

    });

});

