$(function(){
  let t;
  $(".tabmenu>li").click(function(){
    $(".tabmenu>li").removeClass("on");
    $(this).addClass("on");

  t =$(this).index();
  console.log(t);

  $(".tabcon").hide();
  $(".tabcon").eq(t).show();

  return false;
    })
})