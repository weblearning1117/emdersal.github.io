$(document).ready(function () {
    var scrolled, headHei, menuHei, winWid;
    winWid = $(window).outerWidth();
    headHei = $('.header').outerHeight();
    menuHei = $('.header .menu .navbar').outerHeight();
    arrowHei = $('#arrow').outerHeight();
    var dataJs = $('body').attr('data-js');
    carouselHei = $('.weare .carousel-items').outerHeight();
    var links = $('.anchor');  //все ссылки
    
    
    
    
    if (dataJs == 'index') {
          
        setInterval(function() {
            menuFixHei = $('.header .menu-fixed .navbar').outerHeight();
            menuHei = $('.header .menu .navbar').outerHeight();
            scrolled = window.pageYOffset || document.documentElement.scrollTop;
            if (scrolled >= headHei - menuHei) {
                $('.header .menu-fixed .navbar').css('transform', 'translateY(0)');
                $('.header .menu .navbar').css('transform', 'translateY(-' + (menuHei * 2) +'px)');
             
            }
            else {
                $('.header .menu .navbar').css('transform', 'translateY(0)');
                $('.header .menu-fixed .navbar').css('transform', 'translateY(-' + (menuFixHei * 2) +'px)');
            }
          }, 10);

  links.on('click', function (e) {
    e.preventDefault();
    var selector= $(this).attr('href');

    var target = $(selector);  
    $('html,body').animate({
        scrollTop: target.offset().top - (menuFixHei / 2)
    },700)
}); 
    }
    else {
        links.on('click', function (e) {
           target = $(this).attr('data-target');
           setTimeout(() => {
               $('.' + target).trigger('click');
           }, 400);
        }); 
    }
    $('#arrow').css('bottom', arrowHei + 'px');
    $('.weare .carousel-items').css('height', carouselHei + 'px');
    setInterval(function() {
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
        $('.time').html(time);
      }, 1000);

    
 var year = (new Date()).getFullYear();
    $('.year').html(year);

    
    
   $('.header .menu .navbar .nav-link').on('click', function () {
    $('.header .menu .navbar .navbar-toggler').trigger('click');
   });
   $('.header .menu-fixed .navbar .nav-link').on('click', function () {
    $('.header .menu-fixed .navbar .navbar-toggler').trigger('click');
   });
   
 
 
  if (winWid <= 992) {
      $('.proj').addClass('container-fluid').addClass('m-0').removeClass('container');
      $('.proj .col-md-6').removeClass('mb-4').addClass('p-0');
      $('.features .row').removeClass('mt-5');
       if (winWid <= 450) {
        $('.feature .longer').html('Лучшие специалисты');
    }
  }

 
});