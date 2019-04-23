$(".map").hide();
$(".ship").hide();
$(".map2").hide();
$(".chest").hide();
$(".done").hide();


$(".pirate").mouseover(function() { 
    $(".map").show();
    $(".text").text("Ayooo i have found the map. i'll use this to find my ship ! head east. click on the red box");
    $(".ship1").click(function() {
        $(".textbox").text( "click on the hull to head east");
        $(".ship").show();
        $(".ship1").hide();
    });
});


$(".ship").click(function() {
    $(".map2").show();
    $(".textbox").text("click on the 2nd map to find the chest");
});

$(".map2").click(function() {
    $(".chest").show();
    $(".done").show();


});

