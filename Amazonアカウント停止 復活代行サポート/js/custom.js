$(document).ready( function(){
    $('.slider ul').slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows:false,
        slidesToShow: 1,
        autoplay:true,
        adaptiveHeight: true
      });
      $('.sliders ul').slick({
        dots: false,
        infinite: false,
        speed: 300,
        arrows:true,
        slidesToShow: 1,
        autoplay:false,
        adaptiveHeight: true
      });
      $('.sliders-ope').slick({
        dots: false,
        infinite: false,
        speed: 300,
        arrows:true,
        slidesToShow: 6,
        autoplay:false,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1204,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint:803,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 603,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 367,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      jQuery('.navbar-expand-lg .navbar-toggler').click( function(){
        jQuery('body').toggleClass('open');
        jQuery('html').toggleClass('open')
      });
      
      jQuery('.open').click( function(){
        jQuery(this).removeClass('open');
      });

      AOS.init();
});



$(window).scroll(function(){
  var sticky = $('#myHeader'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});
