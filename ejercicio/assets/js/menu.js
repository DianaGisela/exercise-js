
$(document).ready(function(){

// al pasar se marcan, despues se remueve la clase y al final aparece el sub menu
$('ul:first li a').click(function() {
   $('.current-menu-item').removeClass();
  $(this).parent().addClass('current-menu-item');

});
  
  $('ul:first li').hover(function(){
    $(this).find('.sub-menu').fadeToggle(100);
  });


// al click muestra o cierra el menu mov

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


  // si al pasar mas de los  900 el boton movil se esconde 

  $(window).resize(function() {

    if($(window).width() >= 990) {
      $('#mobile-button,#mobile-close').hide();
    }
     else {

      if($('#menu-container').is(':visible')) {
        $('#mobile-close').show();
      } 
      else {
        $('#mobile-button').show();
      }
    }
  });

  
});