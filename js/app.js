$(document).ready(function () {
    console.log("funcionamiento");
});

//escribir jqdocReady
//acceso a h1
$("h1").html("Titulo 1");
//acceso a class
$(".display-4").html("Clases Online");
//acceso a ID
$("#id1").html("JQUERY");

//acceso  con Javascript
//acceso a h1
document.querySelector("h1").innerHTML="Titulo 1 js";
document.querySelector("#id1").innerHTML="Desde ID";
document.querySelector(".display-4").innerHTML="Desde IDD";