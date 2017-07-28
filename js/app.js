$(function() {
//Rozwijany panel sekcji z samochodami

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

//Przyklejony panel z nawigacją

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
  stickyNav();
  $(window).scroll(function() {
    stickyNav();
  });
  $("a").click(function(event) {
    event.preventDefault();
  });

//Slider

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

//Sprawdzenie numeru telefonu

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

//Scrollowanie nawigacji

  $(function($) {
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

//Popup otwiernia i zamykanie

  $(function() {
      //----- OPEN
      $('[data-popup-open]').on('click', function(e)  {
          var targeted_popup_class = jQuery(this).attr('data-popup-open');
          $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

          e.preventDefault();
      });

      //----- CLOSE
      $('[data-popup-close]').on('click', function(e)  {
          var targeted_popup_class = jQuery(this).attr('data-popup-close');
          $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

          e.preventDefault();
      });
  });

//wyszukiwarka samochodów

  $(document).ready(function(){
    $("#filter").keyup(function(){

        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(), count = 0;

        // Loop through the comment list
        $(".cars-list").each(function(){

            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
                $(this.parent).fadeOut();
                $('.line-between').fadeOut();


            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).fadeIn();
                $(this.parent).fadeIn();
                count++;
            }
        });

        // Update the count
        var numberItems = count;
          if (count === 1) {
        $("#filter-count").text("wynik wyszukiwania "+count);
        console.log("if numer 1");
      } else if (count >= 2 && count < 5) {
        $("#filter-count").text("wyniki wyszukiwania "+count);
        console.log("if numer 2");
      } else if (count >=5) {
        $("#filter-count").text("wyników wyszukiwania "+count);
        console.log("if numer 3");
      } else {
        $("#filter-count").text("Brak wyników wyszukiwania");
      }
    });
});

//Ograniczenie ilości znaków w textarea

var maxchars = 200;

$('#txtArea').keyup(function () {
    var tlength = $(this).val().length;
    $(this).val($(this).val().substring(0, maxchars));
    var tlength = $(this).val().length;
    remain = maxchars - parseInt(tlength);
    $('#remain').text(remain);
});

});
