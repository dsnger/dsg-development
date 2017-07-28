/*dsgaphics site scripts v1.0 2017-7-15*/

/* Import all js */
//@prepros-append jquery.flip.js
//@prepros-append helper.js
//Grid Overlay




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

    // //Overlay content
    var gridItem = '';
    // open the content element when clicking on the main grid items
		$('button.open-content').on( 'click', function() {
      gridItem = $(this).closest('article.flip-card');
      showContent();
    });
    // close the content element
		$('button.close-content').on( 'click', function() {
			hideContent();
		});

    // support: support for pointer events, transitions and 3d transforms
		this.support = support.pointerevents && support.csstransitions && support.csstransforms3d;
    if( this.support ) {
      //window resize

      window.on( 'resize', function() { resizeHandler(); } );
      // trick to prevent scrolling when animation is running (opening only)
      // this prevents that the back of the placeholder does not stay positioned in a wrong way
      window.on( 'scroll', function() {
        if ( this.isAnimating ) {
          window.scrollTo( this.scrollPosition ? this.scrollPosition.x : 0, this.scrollPosition ? this.scrollPosition.y : 0 );
        }
        else {
          this.scrollPosition = { x : window.pageXOffset || docElem.scrollLeft, y : window.pageYOffset || docElem.scrollTop };
          // change the grid perspective origin as we scroll the page
          this.scrollHandler();
        }
      });
    }

    var showContent = function() {
      if( $(this).isAnimating ) {
        return false;
      }
      this.isAnimating = true;
      var loadContent = function() {
          // simulating loading...
          setTimeout( function() {
            // hide loader
            $('.loading').removeClass( 'show' );
            $('.content > div').addClass('show');
          }, 1000 );

          // show content area
          $('.content').addClass( 'show' );
          // show loader
          $('.loading').addClass( 'show' );
          $('body').addClass( 'noscroll' );
          $(this).isAnimating = false;
        };

        // if no support just load the content (simple fallback - no animation at all)
    		// if( !this.support ) {
    		// 	loadContent();
    		// 	return false;
    		// }

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

  var hideContent = function() {
  		$( 'div.content > div' ).removeClass( 'show' );
  		$( 'div.content' ).removeClass( 'show' );
  		// without the timeout there seems to be some problem in firefox
  		setTimeout( function() { $( 'body' ).removeClass( 'noscroll' ); }, 25 );
  		// that's it for no support..
  		// if( !this.support ) return false;
  		$( '.grid-wrap').removeClass( 'view-full' );

      // reset placeholder style values
  		placeholder.style.left = gridItem.offset().left + 'px';
  		placeholder.style.top = gridItem.offset().top + 'px';
  		placeholder.style.width = gridItem.width() + 'px';
  		placeholder.style.height = gridItem.height() + 'px';
      alert (gridItem.width);
  		gridItem.removeClass( 'active' );

  	};

    // changes the grid perspective origin as we scroll the page
  	var scrollPage = function() {
  		var perspY = scrollY() + getViewportH() / 2;
  		$('.grid-wrap').style.WebkitPerspectiveOrigin = '50% ' + perspY + 'px';
  		$('.grid-wrap').style.MozPerspectiveOrigin = '50% ' + perspY + 'px';
  		$('.grid-wrap').style.perspectiveOrigin = '50% ' + perspY + 'px';
  		this.didScroll = false;
  	};
    // function to create the placeholder
  	var createPlaceholder = function( content ) {
  		// var placeholder = document.createElement( 'div' );
      // placeholder.className = 'placeholder';
  		// placeholder.innerHTML = content;


      var front = document.createElement( 'div' );
  		front.className = 'front';
  		front.innerHTML = content;
  		var back = document.createElement( 'div' );
  		back.className = 'back';
  		back.innerHTML = '&nbsp;';
  		var placeholder = document.createElement( 'div' );
  		placeholder.className = 'placeholder';
  		placeholder.appendChild( front );
  		placeholder.appendChild( back );
  		return placeholder;
  	};

    var resizeHandler = function() {
  		function delayed() {
  			resizePlaceholder();
  			scrollPage();
  			this._resizeTimeout = null;
  		}
  		if ( this._resizeTimeout ) {
  			clearTimeout( this._resizeTimeout );
  		}
  		this._resizeTimeout = setTimeout( delayed, 50 );
  	};

    var resizePlaceholder = function() {
  		// need to recalculate all these values as the size of the window changes
  		//gridItem = { width : gridItem.offsetWidth, height : gridItem.offsetHeight };

      if( placeholder ) {
  			// set the placeholders top to "0 - grid offsetTop" and left to "0 - grid offsetLeft"

  			var gridOffset = $('.grid').offset();

  			placeholder.style.left = Number( -1 * ( gridOffset.left - scrollX() ) ) + 'px';
  			placeholder.style.top = Number( -1 * ( gridOffset.top - scrollY() ) ) + 'px';
  			// set the placeholders width to windows width and height to windows height
  			placeholder.style.width = $(window).width() + 'px';
  			placeholder.style.height = $(window).height() + 'px';
  		}
  	};


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
