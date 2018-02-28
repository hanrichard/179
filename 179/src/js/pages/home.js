jQuery(document).ready(function($){

  var $window = $(window);

  $('.counter').counterUp({
      time: 1000,
      offset: 500
  });

  $('#navgation').click(function(){
    $(this).toggleClass('open');
    $("body").toggleClass('open');
  });

  $(".header__top").affix({
    offset: {
      top: 150
    }
  })

  $('.home__slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
  });

  $('body').scrollspy({
    target: ".tour-detail__nav-bar"
  });

  $(".header__nav-menu--mobile .header__nav-menu-link").on('click touch', function(e) {
    $('#navgation').removeClass("open");
    $('body').removeClass("open");
  })

  function smoothScroll() {
    var offsetconfig = -70;
    if ($window.width() >= 992) {
      offsetconfig = -100;
    }

    else {
      offsetconfig = 0;
    }
    $('.header__nav-menu a, a.header__mid-link').smoothScroll({offset: offsetconfig})
  }

  function videoplay() {
    $(".home__cards-video-item").each(function(index, element){
        var waypoint = new Waypoint({
            element: element,
            handler: function(direction) {
            if(direction == 'down') {
                $(this.element).get(0).play();
            }
        },
        offset: '50%'
      });
    });
  }

  function loadingSectionAnimation(selector, offset, noReverse){
        $(selector).each(function(index, element){
                var waypoint = new Waypoint({
                    element: element,
                    handler: function(direction) {
                    if(direction == 'down') {
                        $(this.element).addClass('is-view');
                        // console.log(this.element.id + ' triggers at ' + this.triggerPoint)
                    }
                    if(direction == 'up') {
                        if(noReverse != "no-reverse"){
                            $(this.element).removeClass('is-view');
                        }
                        else{
                            return false
                        }
                    }
                },
                offset: offset
            });
        });
    }


  setTimeout( function() {
    videoplay();
  }, 1000);


  function init(){
    smoothScroll();
    loadingSectionAnimation(".section", "90%", "no-reverse");
  }

  $(window).resize(function(){
    smoothScroll() 
  });

  init();

});
