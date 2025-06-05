$(function(){

$("nav>ul>li").mouseenter(function(){
  $(this).children(".sub").stop().slideDown();
})
$("nav>ul>li").mouseleave(function(){
  $(".sub").stop().slideUp();
})

function slide(){
  $(".slide ul").animate({
    marginLeft:"-100%"
  } ,1000, function(){
    $(".slide ul").append($(".slide ul li").first());
    $(".slide ul").css({ marginLeft: 0});
  })
}
setInterval(slide,3000);
})