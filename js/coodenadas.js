$(function () {
    $(".div5").on("mousemove", function () {
        let coords = "X:" + event.clientX + "Y: " + event.clientY + " )";
        $(this).text(coords);
    });
});