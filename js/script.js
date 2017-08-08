$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing1").slideToggle();
    $("#walrus-hidden1").slideToggle();
  });
});
$(document).ready(function() {
$(".clickable2").click(function() {
  $("#walrus-showing2").slideToggle();
  $("#walrus-hidden2").slideToggle();
  });
});

$(document).ready(function() {
  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
    //$("body").css("background-color", "green");
  });
  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
    //$("body").css("background-color", "#cca300");
  });
  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
    //$("body").css("background-color", "#660000");
  });

  $("div.highlightP").click(function() {
    //$("span.clickableP").removeClass();
    $("span.clickableP").addClass("yellow-background");
    //$("body").css("background-color", "#660000");
  });




});

//var addclass = 'highlightcolor';
//var $cols = $('clickableP').click(function(e) {
  //$("body").removeClass();
  //$("body").addClass("red-background");
//});
