$(function(){

  $(".pop").click(function(){
    $(".popup").fadeIn();
    return false;
  })
  $(".close").click(function(){
    $(".popup").hide();
  })
  
})