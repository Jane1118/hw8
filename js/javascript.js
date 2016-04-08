var $slide = $('.slide'),
    $slideGroup = $('.slide-group'),
    $nav = $('.nav');
   slidesTotal = ($slide.length - 1),
    current = 0,
    AutoSliding = true;
    $nav.first().addClass('current');

var clickSlide = function() {
    AutoSliding = false;
  window.clearInterval(autoSlide);


  var slideIndex = $nav.index($(this));
  updateIndex(slideIndex);
};

var updateIndex = function(currentSlide){
  if(AutoSliding) {
    if(current === slidesTotal) {
      current = 0;
    } else {
      current++;
    }
  } else {
      current = currentSlide;
  }

  $nav.removeClass('current');
  $nav.eq(current).addClass('current');
  transition(current);
};

var transition = function(slidePosition) {
    $slideGroup.animate({
      'top': '-' + slidePosition + '00%'
    });
};

$nav.on( 'click', clickSlide);

var autoSlide = window.setInterval(updateIndex, 2500);