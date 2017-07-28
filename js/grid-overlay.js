$( document ).ready(function() {

  'use strict';

  var gridOverlays = function() {
    this._init();
  }

  var _init = function() {
    // grid wrapper
    this.gridWrap = $( 'div.grid-wrap' );
    // grid element
    this.grid = $( 'div.grid' );
    // main grid items
    this.gridItems = $( this.grid ).children('article.flip-card');
    // button open content
    this.gridContentOpener = $( 'button.open-content' );
    // default sizes for grid items
    this.itemSize = { width : this.gridItems[0].offsetWidth, height : this.gridItems[0].offsetHeight };
    // content
    this.contentEl = $( 'div.content' );
    // content items
    this.contentItems = $( this.contentEl ).children('div');
    // close content cross
    this.close = this.contentEl.find( 'span.close-content' );
    // loading indicator
    this.loader = this.contentEl.find( 'span.loading' );
    // support: support for pointer events, transitions and 3d transforms
    this.support = support.pointerevents && support.csstransitions && support.csstransforms3d;
    // init events
    this._initEvents();
  };

  var _initEvents = function() {
    var self = this;
    console.log('hello');
    // open the content element when clicking on the main grid items
    this.gridContentOpener.forEach( function( item, idx ) {
      item.on( 'click', function() {
        self._showContent( idx );
      } );
    } );

    // close the content element
    this.close.addEventListener( 'click', function() {
      self._hideContent();
    } );

    if( this.support ) {
      // window resize
      window.on( 'resize', function() { self._resizeHandler(); } );

      // trick to prevent scrolling when animation is running (opening only)
      // this prevents that the back of the placeholder does not stay positioned in a wrong way
      window.on( 'scroll', function() {
        if ( self.isAnimating ) {
          window.scrollTo( self.scrollPosition ? self.scrollPosition.x : 0, self.scrollPosition ? self.scrollPosition.y : 0 );
        }
        else {
          self.scrollPosition = { x : window.pageXOffset || docElem.scrollLeft, y : window.pageYOffset || docElem.scrollTop };
          // change the grid perspective origin as we scroll the page
          self._scrollHandler();
        }
      });
    }
  };

  var _showContent = function() {
    if( $(this).isAnimating ) {
      return false;
    }
    this.isAnimating = true;
    var _loadContent = function() {
        // simulating loading...
        setTimeout( function() {
          // hide loader
          this.loader.removeClass( 'show' );
          this.contentItems.addClass('show');
        }, 1000 );

        // show content area
        this.contentEl.addClass( 'show' );
        // show loader
        this.loader.addClass( 'show' );
        $('body').addClass( 'noscroll' );
        $(this).isAnimating = false;
      };

      //if no support just load the content (simple fallback - no animation at all)
  		if( !this.support ) {
  			loadContent();
  			return false;
  		}

    // create the placeholder
    placeholder = createPlaceholder( gridItem.find('.back').html() );
    // set the top and left of the placeholder to the top and left of the clicked grid item
    placeholder.style.left = gridItem.position().left + 'px';
    placeholder.style.top = gridItem.position().top + 'px';
    // append placeholder to the grid
    $('.grid').append( placeholder );

    // and animate it
    var animFn = function() {
      // give class "active" to current grid item (hides it)
      gridItem.addClass( 'active' );
      // add class "view-full" to the grid-wrap
      $('.grid-wrap').addClass( 'view-full' );
      // set width/height/left/top of placeholder
      resizePlaceholder();

      var transitionEvent = whichTransitionEvent();
    	  $(this).one(transitionEvent,  function(event) {
    	    loadContent();
    	  });
    };
    setTimeout( animFn, 25 );
  };

});
var gridOverlays = new GridOverlays();
