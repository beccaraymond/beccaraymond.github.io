$(document).ready(function(){
  $(window).bind('scroll', function() {
    var navHeight = 0; // custom nav height
    ($(window).scrollTop() > navHeight) ? $('navbar').addClass('goToTop') : $('navbar').removeClass('goToTop');
  });
});
