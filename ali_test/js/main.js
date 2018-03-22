(function($){ 
    "use strict";
// 外掛slider owlCarousel
$('.carousel1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
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
$('.carousel2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        }
    }
})
// navbar作用 寫法項目一
// $(window).on('scroll', function (){
//     var scrollTop = $(window).scrollTop();
//     if (scrollTop > 50){
//         $(".navbar").addClass('navbar-shrink',1000);
//     } else {
//         $(".navbar").removeClass('navbar-shrink',1000);
//     }
// })

// navbar作用 寫法項目二
// If you want the nav bar to resize while you scroll the page you can give a look to this example: http://www.bootply.com/109943
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.navbar').addClass('navbar-shrink');
  } else {
    $('.navbar').removeClass('navbar-shrink');
  }
});

// bs官方程式使用，需要可解析的ID目標 導航欄鏈接必須具有可解析的ID目標。例如，<a href="#home">主頁</a>必須對應於DOM中的某些內容，例如<div id =“home”> </ div>。
// id="mainNav"
$('body').scrollspy({
    target: '#mainNav',
    offset: 100
});
// https://getbootstrap.com/docs/4.0/components/scrollspy/
})(jQuery)