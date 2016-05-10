
$(document).ready(function(){

// al hacer click cambia de color
$('ul:first li a').click(function() {
   $('.current-menu-item').removeClass();
  $(this).parent().addClass('current-menu-item');

});

// hover  sobre el submenu efecto solo pasando
  
  $('ul:first li').hover(function(){
     $(this).find('.sub-menu').fadeToggle(100);
  });

// hambuerguesa ocultar se queda despues 

$('#mobile-button').click(function() {
    $('#menu-container').show();
    $('#mobile-button').hide();
    $('#mobile-close').show();
  });

  
  $('#mobile-close').click(function() {
  $('#menu-container').hide();
    $('#mobile-button').show();
    $('#mobile-close').hide();
  });
  
  //

$(window).resize(function() {

    if($(window).width() >= 990) {
      $('#mobile-button,#mobile-close').hide();
    }
     else {

 // si el menu desketop se abre y oculta al otro despues unless otra cosa pase.
      if($('#menu-container').is(':visible')) {
        $('#mobile-close').show();
      } 
      else {
        $('#mobile-button').show();
      }
    }
  });
 

  
});
