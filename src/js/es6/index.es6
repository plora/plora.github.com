const plora = {};
(() => {
  /*plora.main = {
    slider: $(".plora-main-slider"),
    default: 0
  }, object property add */
  plora.Events = () => {
      //button scroll
      let scroll = $('html, body'),
        scrollOffset = Math.ceil(scroll.scrollTop() / $("#wrap").height() * 100),
        scrollBottom = Math.ceil(($(document).height() - $(window).height()) / $("#wrap").height() * 100);

      onScrollMove(scrollOffset);
      onScrollBg(scrollOffset);

      $('.plora-nav a, .plora-btn a[href^="#"]').on('click', function() {
        let href = $.attr(this, 'href');

        scroll.animate({
          scrollTop: $(href).offset().top
        }, 500, function() {
          window.location.hash = href;
          onScrollMove(parseInt($(href).offset().top / $("#wrap").height() * 100));
        });

        return false;
      });

      //nav scrollTop
      function onScrollMove(scrollOffset) {
        //console.log(scrollOffset);
        if (scrollOffset >= 0 && scrollOffset < 27) {
          $(".plora-nav li").removeClass("active");
          $(".plora-nav li").eq(0).addClass("active");
        } else if (scrollOffset >= 27 && scrollOffset < 50) {
          $(".plora-nav li").removeClass("active");
          $(".plora-nav li").eq(1).addClass("active");
        } else if (scrollOffset >= 50 && scrollOffset < 66) {
          $(".plora-nav li").removeClass("active");
          $(".plora-nav li").eq(2).addClass("active");
        } else if (scrollOffset >= 66 && scrollOffset < scrollBottom) {
          $(".plora-nav li").removeClass("active");
          $(".plora-nav li").eq(3).addClass("active");
        } else if (scrollOffset >= scrollBottom) {
          $(".plora-nav li").removeClass("active");
          $(".plora-nav li").eq(4).addClass("active");
        }
      }
      //section scrollTop
      function onScrollBg(scrollOffset) {
        if (scrollOffset >= 10 && scrollOffset < 50) {
          $("#plora-container section").removeClass("active");
          $("#plora-container section").eq(1).addClass("active");
        } else {
          $("#plora-container section").removeClass("active");
        }
      }

      $(window).scroll(function() {
        scrollOffset = Math.ceil($(this).scrollTop() / $("#wrap").height() * 100);
        onScrollMove(scrollOffset);
        onScrollBg(scrollOffset);
      });
    },
    plora.functions = {
      init: () => {
        plora.functions.slider();
        plora.functions.plugins();
      },
      slider: () => {
        let hwrapHeight = $(".plora-main-slider").children("ul").height(),
          hiHeight = $(".plora-main-slider").find('li').height(),
          hiTop = 0;

        function onSliderMove(hiTop) {

          $(".plora-main-slider").children('ul').animate({
            "top": "-" + hiTop + "px"
          });
        }
        setInterval(() => {
          hiTop = hiTop + hiHeight;
          if (hiTop + hiHeight > hwrapHeight) {
            hiTop = 0;
          }
          onSliderMove(hiTop);
        }, 3000);
      },
      plugins: () => {
        //portfolio slider
        let owl = $('.plora-folio-slider');
        owl.owlCarousel({
          margin: 10,
          nav: true,
          dots: false,
          loop: true,
          responsive: {
            0: {
              items: 1
            },
            767: {
              items: 3
            },
            991: {
              items: 5
            }
          }
        });
      }
    }
})();
/*document.addEventListener('DOMContentLoaded', () => {
  plora.Events();
  plora.functions.index();

}) vanila js*/
$(document).ready(function() {
  plora.Events();
  plora.functions.init();
})
