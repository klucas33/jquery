$(function(){
    $('.happy div span').on('click',function(e){
        e.preventDefault();
        $('.click').css('display','block')

        $('.round').on('click',function(){
            $('.click').hide();
        })
    });

    $('.row').on('click',function(e){
        e.preventDefault();
        if($('.row').hasClass('active') & $('.burger nav a').hasClass('active')){
        $('.row').removeClass('active');
        $('.burger nav a').removeClass('active');
    }else{
        $('.row').addClass('active');
        $('.burger nav a').addClass('active');
    }
    })
        
})