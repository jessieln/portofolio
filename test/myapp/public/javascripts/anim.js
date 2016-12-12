function withAnimate() {
  $(".main2").animate({
    left: "500px",
  }, {
    duration: 3000, 
    easing: "linear"
  } ); 
}

$(".main2").on('click', function(){
  withAnimate();
});