$(function(){


// type js 
var typed = new Typed('.element', {
    strings: ["Ashik iqbal",
     "Web designer",
     "Front End Developer"],
    typeSpeed: 100,
    loop:true
  });


// backto top 

$(" .backto-top i").click(function(){

  $('html,body').animate({
    scrollTop:0,

  })
})

$(window).scroll(function(){

  var scrolling = $(this).scrollTop()
  if(scrolling > 20 ){
    $(".backto-top i").fadeIn(500)
  }else{
    $(".backto-top i").fadeOut(500)
  }

  if(scrolling > 50 ){
    $(".menu-bg").addClass("nav-bg")
  }else{
    $(".menu-bg").removeClass("nav-bg")
  }

})







})