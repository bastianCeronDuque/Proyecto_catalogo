jQuery(document).ready(function ($) {
    $('#slider').bjqs({


        // PARAMETROS OPCIONALES QUE NOS OFRECE EL PLUGIN
        width: 700,
        height: 300,

        // animation values
        animtype: 'fade', // accepts 'fade' or 'slide'
        animduration: 1500, // how fast the animation are
        animspeed: 5000, // the delay between each slide
        automatic: true, // automatic

        // control and marker configuration
        showcontrols: true, // show next and prev controls
        centercontrols: true, // center controls verically
        nexttext: 'Next', // Text for 'next' button (can use HTML)
        prevtext: 'Prev', // Text for 'previous' button (can use HTML)
        showmarkers: true, // Show individual slide markers
        centermarkers: true, // Center markers horizontally

        // interaction values
        keyboardnav: true, // enable keyboard navigation
        hoverpause: true, // pause the slider on hover

        // presentational options
        usecaptions: true, // show captions for images using the image title tag
        responsive: true // enable responsive capabilities (beta)
    });
});
$(document).ready(function () {
    $("#validar").validate({
        rules: {
            nombre: "required",
            email: {
                required: true,
                email: true
            },
            telefono: "required",
            mensaje: "required"
        },
        messages: {
            nombre: "Este campo es obligatorio.",
            email: {
                required: "Este campo es obligatorio",
                email: "Ingresa un email válido"
            },
            telefono: "Este campo es obligatorio",
            mensaje: "Este campo es obligatorio"
        }
    });
});


let calculo = () => {
    let num1 = document.getElementById("auto1").value;
    let num2 = document.getElementById("auto2").value;
    let num3 = document.getElementById("auto3").value;
    let num4 = document.getElementById("auto4").value;
    var resultado = 30990000 / num1;
    var cot2 = 70090000 / num2;
    var cot3 = 36990000 / num3;
    var cot4 = 41420000 / num4;
    return resultado, cot2, cot3, cot4;
}
document.getElementById("resultado1").innerHTML = calculo();
document.getElementById("resultado2").innerHTML = calculo();
document.getElementById("resultado3").innerHTML = calculo();
document.getElementById("resultado4").innerHTML = calculo();
var alumno = {
    nombre: "Bastian Paulo Ceron Duque",
    rut: "18.048.869-3",
    carerra: "Desarrollador Front-End",
    mostrar: function () {
        return "Hola mi nombre es " + this.nombre + " mi rut es " + this.rut + " y estoy cursando la carrera de " + this.carerra;

    }
}
var estudiante = Object.create(alumno);
console.log(estudiante.mostrar());