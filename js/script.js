

setInterval (function(){slide1()})
function slide1(){
    $(".main1>.slide").delay(2000).animate({marginLeft:'-1200px'},1000);
    $(".main1>.slide").delay(2000).animate({marginLeft:'-2400px'},1000);
    $(".main1>.slide").delay(2000).animate({marginLeft:'0px'},1000);
}


setInterval (function(){slide2()})
function slide2(){
    $(".main2>.slide").delay(2000).animate({marginTop:'-350px'},1000);
    $(".main2>.slide").delay(2000).animate({marginTop:'-700px'},1000);
    $(".main2>.slide").delay(2000).animate({marginTop:'0px'},1000);
}

$(".main3>.slide2, .main3>.slide3").hide()
setInterval (function(){slide3()})
function slide3(){
    $(".main3>.slide").delay(2000);
    $(".main3>.slide1").fadeOut(1000);
    $(".main3>.slide2").fadeIn(1000);

    $(".main3>.slide").delay(2000);
    $(".main3>.slide2").fadeOut(1000);
    $(".main3>.slide3").fadeIn(1000);

    $(".main3>.slide").delay(2000);
    $(".main3>.slide3").fadeOut(1000);
    $(".main3>.slide1").fadeIn(1000);
}