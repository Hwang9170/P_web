$(function(){
  $("nav>ul>li").mouseenter(function(){
    $(this).children(".sub").stop().fadeIn(200);
  })
    $("nav>ul>li").mouseleave(function(){
    $(".sub").stop().fadeOut(200);
  })
  let i=-2;
  function slide(){
    if(i<0){
      i++;
    }else{
      i=-2;
    }
    $(".slide ul").animate({marginTop:700 * i},1000);
  }

  setInterval(slide,3000);


})