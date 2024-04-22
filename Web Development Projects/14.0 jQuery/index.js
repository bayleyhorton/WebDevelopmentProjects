$("h1").css("color","green");

$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function(){
    $("h1").css("color","purple");
});

$(document).keypress(function(event) {
    $("h1").text(event.key);
   });


$("h1").on("mouseover", function() {
    $("h1").css("color", "blue");
});

$("button").on("click", function(){
    $("h1").toggle();
});