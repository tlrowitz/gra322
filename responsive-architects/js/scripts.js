$('.menu-button').click(function(){
    $('nav').fadeToggle();
});

// Initialize Animate before Scroll
AOS.init();

//Initialize jarallax

$('.jarallax').jarallax({
    speed: 0.5,
    type: 'scale',
  });

  //Initialize rellax
  var rellax = new Rellax('.rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });

  //Initallize tiny slider
  var slider = tns({
    container: '.my-slider',
    items: 3,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    mouseDrag: true,
  });