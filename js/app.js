$(function() {
  var curIndex = 0,
      imgDuration = 3000,
      slider = document.getElementById("slider"),
      slides = slider.childNodes;
      imgArray = [
        './img/audi_as6.jpg',
        './img/bmw_m3.jpg',
        './img/mercedes_3amg.jpg',
        './img/bmw_m3.jpg'];

  function buildSlideShow(arr) {
      for (i = 0; i < arr.length; i++) {
          var img = document.createElement('img');
          img.src = arr[i];
          slider.appendChild(img);
      }
  }

  function slideShow() {
console.log(slides)
      function fadeIn(e) {
          e.className = "fadeIn";
      };

      function fadeOut(e) {
          e.className = "";
      };

          ;

          fadeOut(slides[curIndex]);
          curIndex++;
          if (curIndex === slides.length) {
              curIndex = 0;
          }

          fadeIn(slides[curIndex]);

          setTimeout(function () {
              slideShow();
          }, imgDuration);
      };
      buildSlideShow(imgArray);
      slideShow();
});
