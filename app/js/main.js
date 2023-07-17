$(function () {

  //lazy-loading
  $('#loading').on('click', function () {
    $('#boxes .box:hidden').slice(0, 2).slideDown()
    if (($('#boxes .box:hidden')).length == 0) {
      $('#loading').fadeOut('slow')
    }
  });

  //плавный скролл
  $(".menu__link, .header__logo, .about__item-link").on("click", function (event) {
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

  $(window).scroll(function () {
    $scrollPosition = $(window).scrollTop();
    // console.log($scrollPosition);
    if ($scrollPosition > 50) {
      $('.header__top').addClass('header__top--bg');
    } else {
      $('.header__top').removeClass('header__top--bg');
    }
  });

  //навигационное меню
  const li = document.querySelectorAll('.menu__item');
  const sec = document.querySelectorAll('section');

  function activeMenu() {
    let len = sec.length;
    // console.log(sec);
    while (--len && scrollY + 150 <= sec[len].offsetTop) { }
    li.forEach(ltx => ltx.classList.remove('active'));
    li[len].classList.add('active');
  }

  activeMenu();
  window.addEventListener('scroll', activeMenu);

  //навигация + бургер-меню

  $('.hero__content-btn').on('click', function () {
    $('.hero__content-box').toggleClass('hide');
    $('.header__top').toggleClass('hide');
    $('.hero__photos-inner').toggleClass('hide');
    $('.hero').toggleClass('playing');
    $('.hero__content-btn').toggleClass('hide');
  });

  $('.header__burger, .menu__item').on('click', function () {
    $('.header__top').toggleClass('active');
    $('.header__burger').toggleClass('active');
    $('.body').toggleClass('lock');
  });

  $('.header__logo').on('click', function () {
    $('.header__top').removeClass('active');
    $('.header__burger').removeClass('active');
    $('.body').removeClass('lock');
  })
})

document.addEventListener('mousemove', e => {
  Object.assign(document.documentElement, {
    style: `
    --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
    --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;
    `
  })
})

const RANDOM = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const PARTICLES = document.querySelectorAll('.particle')
PARTICLES.forEach(P => {
	P.setAttribute('style', `
		--x: ${RANDOM(20, 80)};
		--y: ${RANDOM(20, 80)};
		--duration: ${RANDOM(6, 20)};
		--delay: ${RANDOM(1, 10)};
		--alpha: ${RANDOM(40, 90) / 100};
		--origin-x: ${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%;
		--origin-y: ${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%;
		--size: ${RANDOM(40, 90) / 100};
	`)
})
