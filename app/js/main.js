$(function () {

  //lazy-loading
  $('#loading').on('click', function () {
    $('#boxes .box:hidden').slice(0, 2).slideDown()
    if (($('#boxes .box:hidden')).length == 0) {
      $('#loading').fadeOut('slow')
    }
  });

  //плавный скролл
  $("#menu").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $('.header__logo').on('click', function (event) {
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $(window).scroll(function () {
    $scrollPosition = $(window).scrollTop();
    // console.log($scrollPosition);
    if ($scrollPosition > 50) {
      $('.header__top').addClass('header__top--bg');
    } else {
      $('.header__top').removeClass('header__top--bg');
    }
  });

  $('.header__content-btn').on('click', function () {
    $('.header__content-box').toggleClass('hide');
    $('.header__top').toggleClass('hide');
  });

  //навигационное меню
  

})