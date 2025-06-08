$(function(){

let i =0;
function slide(){
  if (i<2){
    i++;
  }else i= 0;
  $(".slide").animate({marginTop: -600 * i},1000);
}
setInterval(slide,3000);

})