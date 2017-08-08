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
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
    //$("body").css("background-color", "green");
  });
  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
    //$("body").css("background-color", "#cca300");
  });
  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
    //$("body").css("background-color", "#660000");
  });

});
