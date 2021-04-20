$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


$(document).ready(function() {
// grab the initial top offset of the navigation 
var stickyNavTop = $('.nav').offset().top;


var stickyNav = function(){
var scrollTop = $(window).scrollTop(); 


if (scrollTop > stickyNavTop) { 
$('.nav').addClass('sticky');
// $('.bop').addClass('visible-title');
} else {
$('.nav').removeClass('sticky'); 
// $('.bop').removeClass('visible-title');
}
};


stickyNav();
// and run it again every time you scroll
$(window).scroll(function() {
stickyNav();
});
});



console.log