
$(document).ready(function(){

    var scrollLink = $('.scroll');

    //Smooth Scrolling
    scrollLink.on('click',function(e){
        if (this.hash !== " ") {
            e.preventDefault();

            var hash = this.hash;
            $('html,body').animate({
                scrollTop : $(hash).offset().top
            },1500, function () {
                window.location.hash = hash;
            });
        };
    });

    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();
        
        scrollLink.each(function(){
            var sectionOffset = $(this.hash).offset().top;

            if (sectionOffset <= scrollbarLocation) {
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
            }
        })


    })

});
/*
function scrollParallel(element){
    let el = document.querySelector(element);
    console.log(el)
    let offSet = window.pageYOffset;
    console.log(offSet);
    el.style.backgroundPositionY = -offSet * 0.2 + 'px';

} */

//['.header-title', '.whiteLegs','.header-fire'].forEach(e => {

    window.addEventListener('scroll', function () {
        const pare = document.querySelector('.header-fire');
        //let el = document.querySelector(e);
        let offSet = window.pageYOffset;
        pare.style.backgroundPositionY = -offSet * 0.2 + 'px';
    });
//});

window.addEventListener('scroll' , function () {
    const para = document.querySelector('.header-images');
    let offset = window.pageYOffset;
    para.style.backgroundPositionY = -offset * 0.2 +'px';
});