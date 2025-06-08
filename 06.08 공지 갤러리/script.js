$(function(){

let i =0;
function slide(){
  if (i<2){
    i++;
  }else i= 0;
  $(".slide").animate({marginLeft:-1200 * i},1000);
}
setInterval(slide,3000);

    $(".pop").click(function(){
    $(".popup").fadeIn();
    return false;
  })
    $(".closePopup").click(function(){
    $(".popup").hide();})


      let t;
$(".tebmanu>li").click(function(){
$(".tebmanu>li").removeClass("on");
$(this).addClass("on");
t = $(this).index();
$(".tabcon").hide();
$(".tabcon").eq(t).show();
return false;
})

})