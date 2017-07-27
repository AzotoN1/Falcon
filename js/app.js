$(function() {
  $(".a-class").click(function() {
    $(".a-class-main").slideToggle(800);
    return false;
  });
  $(".a-class-plus").click(function() {
    $(".a-class-main-plus").slideToggle(800);
    return false;
  });
  $(".a-class-elegance").click(function() {
    $(".a-class-main-elegance").slideToggle(800);
    return false;
  });
  $(".a-class-supercar").click(function() {
    $(".a-class-main-supercar").slideToggle(800);
    return false;
  });

  const nav = $('.main-header-nav').offset().top;
  const stickyNav = function() {
    let scrolly = $(window).scrollTop();

    if (scrolly > nav) {
      $('.main-header-nav').addClass('sticky');
      $('.main-header-nav').addClass('nav-background');
      $('.main-header-nav').removeClass('nav-background-hidden');
      $('.stripe-left').fadeOut(1000);
      $('.stripe-right').fadeOut(1000);
    } else {
      $('.main-header-nav').addClass('nav-background-hidden');
      $('.main-header-nav').removeClass('sticky');
      $('.main-header-nav').removeClass('nav-background');
      $('.stripe-left').fadeIn(1000).css("display", "inline-block");
      $('.stripe-right').fadeIn(1000).css("display", "inline-block");


    }
  };

  //   $(".btn2").click(function(){
  //     $("p").fadeIn();
  // });
  stickyNav();

  $(window).scroll(function() {
    stickyNav();
  });


  //   var curIndex = 0,
  //       imgDuration = 3000,
  //       slider = document.getElementById("slider"),
  //       slides = slider.childNodes;
  //       imgArray = [
  //         './img/audi_as6.jpg',
  //         './img/bmw_m3.jpg',
  //         './img/mercedes_3amg.jpg',
  //         './img/bmw_m3.jpg'];
  //
  //   function buildSlideShow(arr) {
  //       for (i = 0; i < arr.length; i++) {
  //           var img = document.createElement('img');
  //           img.src = arr[i];
  //           slider.appendChild(img);
  //       }
  //   }
  //
  //   function slideShow() {
  // console.log(slides)
  //       function fadeIn(e) {
  //           e.className = "fadeIn";
  //       };
  //
  //       function fadeOut(e) {
  //           e.className = "";
  //       };
  //
  //           ;
  //
  //           fadeOut(slides[curIndex]);
  //           curIndex++;
  //           if (curIndex === slides.length) {
  //               curIndex = 0;
  //           }
  //
  //           fadeIn(slides[curIndex]);
  //
  //           setTimeout(function () {
  //               slideShow();
  //           }, imgDuration);
  //       };
  //       buildSlideShow(imgArray);
  //       slideShow();
  //

  $("a").click(function(event) {
    event.preventDefault();
  });

  $('.slider-photo').first().addClass('active');
  $('.slider-photo').hide();
  $('.active').show();

  $('.icon-right-open-1').click(function() {

    $('.active').removeClass('active').addClass('oldActive');
    if ($('.oldActive').is(':last-child')) {
      $('.slider-photo').first().addClass('active');
    } else {
      $('.oldActive').next().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slider-photo').fadeOut(1000);
    $('.active').fadeIn(1000);


  });

  $('.icon-left-open-1').click(function() {
    $('.active').removeClass('active').addClass('oldActive');
    if ($('.oldActive').is(':first-child')) {
      $('.slider-photo').last().addClass('active');
    } else {
      $('.oldActive').prev().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slider-photo').fadeOut(500);
    $('.active').fadeIn(500);
  });

  function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    var filter = /^[0-9-+]+$/;
    if (filter.test(a)) {
      return true;
    } else {
      return false;
    }
  }
  $('#txtPhone').blur(function(e) {
    if (validatePhone('txtPhone')) {
      $('#spnPhoneStatus').html('');
      $('#spnPhoneStatus').css('color', 'green');
    } else {
      $('#spnPhoneStatus').html('Blędny numer !');
      $('#spnPhoneStatus').css('color', 'red');
    }
  });



  jQuery(function($) {
    $.scrollTo(0);
    $('#main').click(function() {
      $.scrollTo($('body'), 800);
    });
    $('#about').click(function() {
      $.scrollTo($('.about-scroll'), 800);
    });
    $('#offer').click(function() {
      $.scrollTo($('.offer-scroll'), 800);
    });
    $('#contact').click(function() {
      $.scrollTo($('.contact-scroll'), 800);
    });

  });
});
