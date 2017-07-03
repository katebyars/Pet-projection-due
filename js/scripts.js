$(function(){

  $("button#night").click(function(){
    $("body").removeClass();
    $("p").removeClass();
    $("body").addClass("black-background");
    $("p").addClass("white-text");
  });

  $("button#day").click(function(){
    $("body").removeClass();
    $("p").removeClass();
    $("body").addClass("pink-background");
    $("p").addClass("purple-text");
  });
});
