  $(function(){

  alert("Welcome to the website!");
  
  $("nav > ul > li").mouseenter(function(){
    $(this).children(".sub").stop().slideDown();
  }).mouseleave(function(){
    $(this).children(".sub").stop().slideUp();
  });
//슬라이드
let i =0;
function slide(){
  if(i<2){
    i++;
  }
  else{
    i=0;
  }
  $(".slide ul").animate({MarginLeft:-1200 * i},1000);
}
setInterval(slide, 1000);

$(".pop").click(function(){
  $(".popup").show();
  return false;
})

$(".close button").click(function(){
  $(".popup").hide();
})

});
