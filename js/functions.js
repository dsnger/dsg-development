/*dsgaphics site scripts v1.0 2017-7-15*/

/* Import all js */
//@prepros-append jquery.flip.js
//@prepros-append modules/helper.js

//@prepros-append modules/GridOverlay.js




$( document ).ready(function() {

  // Get started!

    //Overlay Navigation
    $('#trigger-overlay').on('click', function(event){
      event.preventDefault();
      $('.overlay').toggleClass('open close');
      $('.page-container').toggleClass('overlay-open overlay-close');
      $('#trigger-overlay').toggleClass('is-active');
    });


    //Flip Cards (needs inlcuding jquery.flip.min.js)
    $(".flip-card").flip({
      autoSize: false
      }
    );


    //   $('.open-overlay-content').on('click', function(event){
    //     event.preventDefault();
    //     $('body').addClass('view-full');
    //     $('.overlay-content').addClass('show');
    //   });

    //button radomir effect
    var $rippleBtn = $('.button--effect-radomir').on('click', function (event) {
      event.preventDefault();
      $(this).addClass('button--click');
      setTimeout(function() {
          $rippleBtn.removeClass('button--click');
      }, 800);
    });



    //button ripple effect
    $('.ripple').on('click', function (event) {
      event.preventDefault();

      var $div = $('<div/>'),
          btnOffset = $(this).offset(),
      		xPos = event.pageX - btnOffset.left,
      		yPos = event.pageY - btnOffset.top;

      $div.addClass('ripple-effect');
      var $ripple = $(".ripple-effect");

      $ripple.css("height", $(this).height());
      $ripple.css("width", $(this).height());
      $div
        .css({
          top: yPos - ($ripple.height()/2),
          left: xPos - ($ripple.width()/2),
          background: $(this).data("ripple-color")
        })
        .appendTo($(this));

      window.setTimeout(function(){
        $div.remove();
      }, 2000);
    });

  //initialize material-form select
   //$('select').material_select();

});
