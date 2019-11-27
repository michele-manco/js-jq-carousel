$('.menu-items').click(function() {
  $('.dropd-menu').slideUp();
  if (!$(this).children('.dropd-menu').is(':visible')) {
      $(this).children('.dropd-menu').slideDown()
  }
});
$('.next').click(function(){
 var img_corrente = $('img.active');
 var img_successiva = img_corrente.next('img');
 if (img_successiva.length == 0) {
   img_successiva = $('.slider img:first-child');
  }
 img_corrente.removeClass('active');
 img_successiva.addClass('active');
});
$('.prev').click(function(){
 var img_corrente = $('img.active');
 var img_precedente = img_corrente.prev('img');
 if (img_precedente.length == 0) {
   img_precedente = $('.slider img:last-child');
  }
 img_corrente.removeClass('active');
 img_precedente.addClass('active');
});
