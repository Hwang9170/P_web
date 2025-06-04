$(function(){
$("nav>ul>li").mouseover(function () {
  $(".sub, .menuBg").stop().slideDown();
}).mouseout(function () {
  $(".sub, .menuBg").stop().slideUp();
});


let i=0;
function slide(){
if(i<2){
  i++;
}else{
  i=0;
}

$(".slide ul li").fadeOut();
$(".slide ul li").eq(i).fadeIn();
}
setInterval(slide,3000);
});
