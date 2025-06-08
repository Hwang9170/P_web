$(function(){
  $(".tabmenu>li").click(function(){
    $(".tabmenu>li").removeClass("on");
    $(this).addClass("on");
  $(".tabcon").hide();
  $(".tabcon").eq($(this).index()).show();

  return false;
    })
    $(".pop").click(function(){
    $(".popup").fadeIn();
})
 $(".close").click(function(){
   $(".popup").fadeOut(); 
 });
    })