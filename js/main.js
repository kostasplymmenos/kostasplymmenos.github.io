 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(".mycontent").scroll(function() {
		var menuItems = $("#mainlib-main-menu").find("ul").find("li");
		var categories = $(".category");
		for (let i = 0; i < categories.length; i++) {
			const element = categories[i];
			var hT = $(element).offset().top;
			var hH = $(element).outerHeight();
			var wH = $(window).height();
			var wS = $(this).scrollTop();
			if (wS - 1016 > (hT+hH-wH)){
				$(menuItems).removeClass("mainlib-active");
				$(menuItems[i]).addClass("mainlib-active");
			}
			
		}
	
	 });

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: false,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

   $.Scrollax();

   var burgerMenu = function() {

		$('.js-mainlib-nav-toggle').on('click', function(event){
			event.preventDefault();
			var $this = $(this);

			if ($('body').hasClass('offcanvas')) {
				$('body').removeClass('offcanvas');
				$this.removeClass('active');	
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');	
			}
		});
	};
	burgerMenu();

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#mainlib-aside, .js-mainlib-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-mainlib-nav-toggle').removeClass('active');
			
	    	}
	    	
	    }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-mainlib-nav-toggle').removeClass('active');
			
	    	}
		});

	};
	mobileMenuOutsideClick();


	
})(jQuery);

