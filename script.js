$(document).ready(function(){
    $('.main_btn, .main_btna').on('click', function(){
        $('.overlay').fadeIn(500);
        $('.modal').slideDown(700);
    })

    $('.close').on('click', function(){
        $('.modal').slideUp(500);
        $('.overlay').fadeOut(700);
    })
    $("a[href^='#sheldure']").on('click', function(){
        $('.overlay').fadeIn(500);
        $('.modal').slideDown(700);
    })
  
  
});