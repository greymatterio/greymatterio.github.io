
jQuery(document).ready(function() {
  // Background slideshow
  // $('.top-content').backstretch([
  //                      "assets/img/backgrounds/1.jpg"
  //                    , "assets/img/backgrounds/2.jpg"
  //                    , "assets/img/backgrounds/3.jpg"
  //                   ], {duration: 3000, fade: 750});

    $('#top-navbar-1').on('shown.bs.collapse', function(){
      $('.top-content').backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
      $('.top-content').backstretch("resize");
    });

    // Wow (those silly animating in content blocks)
    new WOW().init();
});

jQuery(window).load(function() {
  // Loader
  $(".loader-img").fadeOut();
  $(".loader").delay(1000).fadeOut("slow");
});
