$(document).ready(function () {
    $("button").click(function () { 
       $(".div1").fadeIn(); //desliza div1
       $(".div2").fadeIn("slow"); //desliza div2 mas lento
       $(".div3").fadeIn(2000); //desliza div3 con 2000 milisegundos de retraso
       
        
    });
});