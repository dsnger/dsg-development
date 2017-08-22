
$( document ).ready(function() {

  // Get started with all modules here
  console.log("App.js is ready")

  /* hamburger animation and function as nav-overlay trigger */
  $('#hamburger__trigger-overlay').on('click', function(event){
    event.preventDefault();
    $('.nav-overlay').toggleClass('open close');
    $('.site-wrapper').toggleClass('nav-overlay--open nav-overlay--close');
    $(this).toggleClass('is-active');
  });

  /* flipcards */
  $('article.flipcards__item').click(function(event){
    if($(this).hasClass('flipcards__item--flipped'))
      $(this).removeClass('flipcards__item--flipped').addClass('flipcards__item--not-flipped');
    else
      $(this).removeClass('flipcards__item--not-flipped').addClass('flipcards__item--flipped');
  });

  /* open overlay content */
  $('.overlay-content__opener').on('click', function(event){
    event.stopPropagation();
    console.log('overlay open');
  });

});
