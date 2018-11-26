$(document).ready(function () {

    var but = document.getElementById('but');
    var nombre = document.getElementById('name');
    var apell = document.getElementById('surname');
    var edad = document.getElementById('age');

    but.addEventListener("click", procesa, false);
    function procesa() {
        var format = true;
        if (nombre.value == "" || apell.value == "" || edad.value == "") {
            alert("Rellena todos los campos");
            var format = false;
        } else {
            if (!isNaN(nombre.value)) {
                $("#name").after("Formato incorrecto");
            } else { var format = false; }
            if (!isNaN(apell.value)) {
                $("#surname").after("Formato incorrecto");
            } else { var format = false; }
            if (isNaN(edad.value)) {
                $("#age").after("Formato incorrecto");
            } else { var format = false; }
        } if (format == true) {
            $("#form1").replaceWith("<img src='images/image1.jpg'>");
        }
    }

});