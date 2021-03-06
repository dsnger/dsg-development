
(function( $ ) {

  //var gridOverlay = (function() {

      var gridContentOpener = $('.open-content'),
          gridContentCloser = $('.close-content'),
          gridWrap = $( '.grid-wrap' ),
          grid = $( '.grid' ),
          self = null,
          placeholder = null,
          resizeTimeout = null,
          doNothing = null,
          isAnimating = null;

    //show
   showContent = function(e) {
      e.preventDefault();

      // if( isAnimating ) {
      //     return false;
      //  }
      // isAnimating = true;
      //init
      //$(this).off('click');
      self = $(this);
      gridItem = self.parents('.overlay-grid-item');
      itemPosition = gridItem.position();
      gridItemBack = gridItem.find('.back');
      gridItemID = gridItem.attr('id');
      itemSize = { width : gridItemBack.outerWidth(), height : gridItemBack.outerHeight() };
      content = $(document).find('.content[data-content-for="' + gridItemID + '"]');
      contentItems = content.children('div');
      loader = content.find( 'span.loading' );

      if ( content.length ){
        createPlaceholder();
        setTimeout( animFn, 25 );
     }

  };

    //hide
    var hideContent = function() {
      console.log ('hide content');
      placeholder = $('.placeholder');

      contentItems.removeClass( 'show' );
      content.removeClass( 'show' );
      // without the timeout there seems to be some problem in firefox
      setTimeout( function() { $( 'body' ).removeClass( 'noscroll' ); }, 25 );
      // that's it for no support..
      // if( !this.support ) return false;
      gridWrap.removeClass( 'view-full' );
      // reset placeholder style values
      $('.placeholder').css('top', itemPosition.top + 'px');
      $('.placeholder').css('left', itemPosition.left + 'px');
      $('.placeholder').css( itemSize);
      var transitionEvent = whichTransitionEvent();
        $('.placeholder').one(transitionEvent,  function(event) {
          $('.placeholder').remove();
          gridItem.removeClass( 'active' );
        });
    };

    //load Content
    var loadContent = function() {
      // simulating loading...
      setTimeout( function() {
        // hide loader
        loader.removeClass( 'show' );
        contentItems.addClass('show');
      }, 1000 );
      // show content area
      content.addClass( 'show' );
      // show loader
      loader.addClass( 'show' );
      $('body').addClass( 'noscroll' );
      isAnimating = false;
    };

    //creat placeholder
    var createPlaceholder = function () {
      // set the top and left of the placeholder to the top and left of the clicked grid item
      if(!$('.placeholder').length) {
        var frontSite = document.createElement( 'div' );
    		frontSite.className = 'placeholder-front';
    		frontSite.innerHTML = gridItemBack.html();

        var backSite = document.createElement( 'div' );
    		backSite.className = 'placeholder-back';
    		backSite.innerHTML = '&nbsp;';

        var placeholder = document.createElement( 'article' );
    		placeholder.className = 'flip-card placeholder';
    		placeholder.append( frontSite );
    		placeholder.append( backSite );
        //add to dom
        grid.append( placeholder );
        //add position
        $('.placeholder').css('top', itemPosition.top + 'px');
        $('.placeholder').css('left', itemPosition.left + 'px');
        $('.placeholder').css( itemSize );
      }
    };

    // and animate placeholder
    var animFn = function() {
      // give class "active" to current grid item (hides it)
      gridItem.addClass( 'active' );
      // add class "view-full" to the grid-wrap
      gridWrap.addClass( 'view-full' );
      // set width/height/left/top of placeholder
      resizePlaceholder();
      var transitionEvent = whichTransitionEvent();
        placeholder.one(transitionEvent,  function(event) {
          loadContent();
        });
    };

    var scrollHandler = function() {
      var didScroll = true;
      console.log ($(this));
      setTimeout( function() { scrollPage(); }, 60 );
    };

    // changes the grid perspective origin as we scroll the page
  	var scrollPage = function() {
  		var perspY = $(window).scrollTop() + $(window).height() / 2;
      gridWrap.css('-webkit-perspective-origin','50% ' + perspY + 'px');
      gridWrap.css('-moz-origin','50% ' + perspY + 'px');
      gridWrap.css('perspective-origin','50% ' + perspY + 'px');
  		didScroll = false;
  	};

    var resizeHandler = function() {
      function delayed() {
        resizePlaceholder();
        scrollPage();
      }
      if ( resizeTimeout ) {
        clearTimeout( resizeTimeout );
      }
      resizeTimeout = setTimeout( delayed, 50 );
    };

    var resizePlaceholder = function() {
      //placeholder neu definieren
      placeholder = $('.placeholder');
      // need to recalculate all these values as the size of the window changes
      if( placeholder ) {
        // set the placeholders top to "0 - grid offsetTop" and left to "0 - grid offsetLeft"
        var gridOffset = grid.offset();
        placeholder.css('left', Number( -1 * ( gridOffset.left - $(window).scrollLeft() ) ) + 'px');
        placeholder.css('top', Number( -1 * ( gridOffset.top - $(window).scrollTop() ) ) + 'px');
        // set the placeholders width to windows width and height to windows height
        placeholder.css('width', $(window).width() + 'px');
        placeholder.css('height', $(window).height() + 'px');
      }
    };

    //events


    //$(document).on('click', gridContentOpener, showContent);
    gridContentCloser.click(hideContent);

    // return {
    //   gridOverlay: gridOverlay
    // }
    return this;
// })();

}( jQuery ));
