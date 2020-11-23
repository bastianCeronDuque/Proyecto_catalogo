$(function () {
    $("div").on("mouseover", function () {
        $(this).css("color", "goldenrod");
    }).on("mouseout", function () {
        $(this).css("color", "red");
    }); 
});