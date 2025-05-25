$(function(){
  alert("Welcome to the website!");
  
  $("nav > ul > li").mouseenter(function(){
    $(this).children(".sub").stop().slideDown();
  }).mouseleave(function(){
    $(this).children(".sub").stop().slideUp();
  });
});
