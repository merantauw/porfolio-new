$(function () {
  
  //lazy-loading
  $('#loading').on('click', function () {
    $('#boxes .box:hidden').slice(0, 2).slideDown()
      if(($('#boxes .box:hidden')).length == 0){
      $('#loading').fadeOut('slow')
    }
  });


})