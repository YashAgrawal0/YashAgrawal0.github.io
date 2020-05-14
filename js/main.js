(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();
  
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }else{
    	if($('#mainNav').hasClass('navbar-trans')){
			$('.navbar-expand-md').removeClass('navbar-reduce');
    	}
    }
  })

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#back2top').fadeIn('slow');
      $('#scrollDown').fadeOut('slow');
    } else {
      $('#back2top').fadeOut('slow');
      $('#scrollDown').fadeIn('slow');
    }
  });
  $('#back2top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			if(this.hash.slice(1) == 'home' || this.hash.slice(1) == 'about' || this.hash.slice(1) == 'timeline'){
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: (target.offset().top - navHeight + 20)
					}, 1000, "easeInOutExpo");
					return false;
				}
			}
			else{
				var x = 0;
				if(!$("#img_2019").is(":visible")) x += $("#img_2019").outerHeight();
				if(!$("#img_2018").is(":visible")) x += $("#img_2018").outerHeight();
				if(!$("#img_2016").is(":visible")) x += $("#img_2016").outerHeight();
				if(!$("#img_2015").is(":visible")) x += $("#img_2015").outerHeight();
				if(!$("#img_2008").is(":visible")) x += $("#img_2008").outerHeight();

				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					if(x==0){
						$('html, body').animate({
							scrollTop: (target.offset().top - navHeight + 20 + x)
						}, 1000, "easeInOutExpo");	
					}else{
						$('html, body').animate({
							scrollTop: (target.offset().top - navHeight - 10 + x)
						}, 1000, "easeInOutExpo");
					}
					return false;
				}
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

})(jQuery);


function sendEmail() {
	var input = document.getElementById('messageBody');
	var body = input.value.replace(/\n/g,"%0D%0A");
	var input = document.getElementById('subject');
	var subject = input.value;

	console.log(subject);
	console.log(body);

	if(subject!="" && body!=""){
		window.location.href = "mailto:yashagrawal048@gmail.com" + "?subject=" + subject + "&body=" + body;
	}
}

// function whatsapp() {
// 	var input = document.getElementById('messageBody');
// 	var body = input.value.replace(/\n/g,"%0D%0A");
// 	var input = document.getElementById('subject');
// 	var subject = input.value;

// 	console.log(subject);
// 	console.log(body);

// 	window.location.href = "whatsapp://send?text= Subject : " + subject + "%0D%0A%0D%0A" + body;
// }