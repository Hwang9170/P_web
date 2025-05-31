$(function(){
    // 메인 메뉴에 마우스를 올리면 서브 메뉴 나타남
    $("nav>ul>li").mouseenter(function(){      
        $(this).children(".sub").stop().slideDown(); // 해당 li의 .sub 요소를 슬라이드 다운
    });

    // 마우스를 떼면 서브 메뉴 사라짐
    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp(); // 모든 .sub 요소 슬라이드 업
    });

})