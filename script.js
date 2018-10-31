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
    $(document).on('click', function (e){
        var d = $('.modal');
        if (!d.is(e.target)){
            $('.modal').slideUp(500);
            $('.overlay').fadeOut(700);
        }
    });
});