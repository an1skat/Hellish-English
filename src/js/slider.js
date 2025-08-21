$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
  prevArrow: $('.slick-prev-js'),
  nextArrow: $('.slick-next-js'),
  draggable: false,
  swipe: false,
  // appendArrows,
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: false,
  mobileFirst: true,
  infinite: true,
  centerMode: true,
  centerPadding: 0,
  focusOnSelect: false,
  draggable: false,
  swipe: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
      },
    },
  ],
});
