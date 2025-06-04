$(function(){

  $("nav>li>a").mouseenter(function(){
    $(this).children(".sub").stop().slideDown();
  })

    $("nav>li>a").mouseleave(function(){
    $(".sub").stop().slideUp();
  })

  let i=0;
  function slide(){
  if(i<2){
    i++;
  }else{
    i=0;
  }
  $(".slide ul").animate({marginLeft:-100 * i + "%"},1000);WW
  }
  setInterval(slide, 3000);
})