//@prepros-prepend ../../../bower_components/jquery/dist/jquery.min.js

$( document ).ready(function() {

  // Get started with all modules here
  console.log("App.js is ready")

  //hamburger animation and function
  $('#hamburger__trigger-overlay').on('click', function(event){
    event.preventDefault();
    $('.nav-overlay').toggleClass('open close');
    $('.site-wrapper').toggleClass('nav-overlay--open nav-overlay--close');
    $(this).toggleClass('is-active');
  });

});
