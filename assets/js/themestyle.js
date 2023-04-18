new WOW().init();

// JavaScript Document
$(document).ready(function() {
    $("#owl-demo2").owlCarousel({
        items: 4,
        loop: true,
        margin:0,
		padding:30,
        autoplay: true,
        autoplayHoverPause: true,
        responsiveClass: true,
        smartSpeed:500,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            360: {
                items: 1,
                nav: false,
            },
            414: {
                items: 1,
            },
            480: {
                items: 2,
            },
            576: {
                items: 2,
            },
            640: {
                items: 2,
            },
            768: {
                items: 3,
            },
            960: {
                items: 4,
            },
            1024: {
                items: 4,
            },
            1280: {
                items: 4,
            },
            1366: {
                items: 4,
            }
        }
    });
});

// up Arrow 
$(document).ready(function(){$(function(){$(window).scroll(function(){$(this).scrollTop()>50?$("#uparrow").fadeIn():$("#uparrow").fadeOut()}),$("#uparrow").click(function(){return $("body,html").animate({scrollTop:0},999),!1})})});

// Smoth Scroll
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
