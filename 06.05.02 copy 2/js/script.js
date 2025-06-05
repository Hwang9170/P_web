$(function(){
  $("nav>ul>li").mouseenter(function(){
    $(this).children(".sub").stop().fadeIn();
  })
  $("nav>ul>li").mouseleave(function(){
    $(".sub").stop().fadeOut();
  })
  let i =0;
  function slide(){
    if(i<2){
      i++;
    }else{
      i=0;
    }
    $(".slide ul").animate({marginTop: -350 * i},1000);
  }
  setInterval(slide,3000)
})