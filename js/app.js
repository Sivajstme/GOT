
$(document).ready(function(){

    var scrollLink = $('.scroll');

    //Smooth Scrolling
    scrollLink.on('click',function(e){
        if (this.hash !== " ") {
            e.preventDefault();

            var hash = this.hash;
            $('html,body').animate({
                scrollTop : $(hash).offset().top
            },2000, function () {
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
window.addEventListener('scroll', function () {
    const para = document.querySelector('.header-title');
    let offset = window.pageYOffset;
    para.style.marginTop = offset * 0.8 + 'em';
});*/


window.addEventListener('scroll', function () {
    /*
    const para = document.querySelector('.header-images');
    let offset = window.pageYOffset;
    para.style.backgroundPositionY = offset * 0.4 + 'px';
    */
    
    parallel('.header-images', 0.8);
    console.log(pageYOffset);
});

//to scroll next page 
let scrollPage = ()=>{
    let scrollPosition = pageYOffset;

}

let parallel = (id,speed)=>{

    const para = document.querySelector(id);
    const offset = window.pageYOffset;
    para.style.backgroundPositionY = offset * speed + 'px';
}