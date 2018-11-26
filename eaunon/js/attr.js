$(document).ready(function () {

    var imagenes = document.querySelectorAll("img");

    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener("mouseover", color, false);
    }
    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener("mouseleave", decolor, false);
    }

    function color(param) {
        if (param.target.id == "meg1_1") {
            $("#meg1_1").attr("src", "images/mega/meg1_1.gif");
        } else if (param.target.id == "meg1_2") {
            $("#meg1_2").attr("src", "images/mega/meg1_2.gif");
        } else if (param.target.id == "meg1_3") {
            $("#meg1_3").attr("src", "images/mega/meg1_3.gif");
        } else if (param.target.id == "meg1_4") {
            $("#meg1_4").attr("src", "images/mega/meg1_4.gif");
        } else if (param.target.id == "meg1_5") {
            $("#meg1_5").attr("src", "images/mega/meg1_5.gif");
        } else if (param.target.id == "meg1_6") {
            $("#meg1_6").attr("src", "images/mega/meg1_6.gif");
        } else if (param.target.id == "meg1_7") {
            $("#meg1_7").attr("src", "images/mega/meg1_7.gif");
        } else if (param.target.id == "meg2_1") {
            $("#meg2_1").attr("src", "images/mega/meg2_1.gif");
        } else if (param.target.id == "meg2_2") {
            $("#meg2_2").attr("src", "images/mega/meg2_2.gif");
        } else if (param.target.id == "meg2_3") {
            $("#meg2_3").attr("src", "images/mega/meg2_3.gif");
        } else if (param.target.id == "meg2_4") {
            $("#meg2_4").attr("src", "images/mega/meg2_4.gif");
        } else if (param.target.id == "meg2_5") {
            $("#meg2_5").attr("src", "images/mega/meg2_5.gif");
        } else if (param.target.id == "meg2_6") {
            $("#meg2_6").attr("src", "images/mega/meg2_6.gif");
        } else if (param.target.id == "meg2_7") {
            $("#meg2_7").attr("src", "images/mega/meg2_7.gif");
        } else if (param.target.id == "meg2_8") {
            $("#meg2_8").attr("src", "images/mega/meg2_8.gif");
        } else if (param.target.id == "meg3_1") {
            $("#meg3_1").attr("src", "images/mega/meg3_1.gif");
        } else if (param.target.id == "meg3_2") {
            $("#meg3_2").attr("src", "images/mega/meg3_2.gif");
        } else if (param.target.id == "meg3_3") {
            $("#meg3_3").attr("src", "images/mega/meg3_3.gif");
        } else if (param.target.id == "meg3_4") {
            $("#meg3_4").attr("src", "images/mega/meg3_4.gif");
        } else if (param.target.id == "meg3_5") {
            $("#meg3_5").attr("src", "images/mega/meg3_5.gif");
        } else if (param.target.id == "meg3_6") {
            $("#meg3_6").attr("src", "images/mega/meg3_6.gif");
        } else if (param.target.id == "meg3_7") {
            $("#meg3_7").attr("src", "images/mega/meg3_7.gif");
        } else if (param.target.id == "meg3_8") {
            $("#meg3_8").attr("src", "images/mega/meg3_8.gif");
        } else if (param.target.id == "meg3_9") {
            $("#meg3_9").attr("src", "images/mega/meg3_9.gif");
        }
    }

    function decolor(param) {
        if (param.target.id == "meg1_1") {
            $("#meg1_1").attr("src", "images/mega/bn/megbn1_1.gif");
        } else if (param.target.id == "meg1_2") {
            $("#meg1_2").attr("src", "images/mega/bn/megbn1_2.gif");
        } else if (param.target.id == "meg1_3") {
            $("#meg1_3").attr("src", "images/mega/bn/megbn1_3.gif");
        } else if (param.target.id == "meg1_4") {
            $("#meg1_4").attr("src", "images/mega/bn/megbn1_4.gif");
        } else if (param.target.id == "meg1_5") {
            $("#meg1_5").attr("src", "images/mega/bn/megbn1_5.gif");
        } else if (param.target.id == "meg1_6") {
            $("#meg1_6").attr("src", "images/mega/bn/megbn1_6.gif");
        } else if (param.target.id == "meg1_7") {
            $("#meg1_7").attr("src", "images/mega/bn/megbn1_7.gif");
        } else if (param.target.id == "meg2_1") {
            $("#meg2_1").attr("src", "images/mega/bn/megbn2_1.gif");
        } else if (param.target.id == "meg2_2") {
            $("#meg2_2").attr("src", "images/mega/bn/megbn2_2.gif");
        } else if (param.target.id == "meg2_3") {
            $("#meg2_3").attr("src", "images/mega/bn/megbn2_3.gif");
        } else if (param.target.id == "meg2_4") {
            $("#meg2_4").attr("src", "images/mega/bn/megbn2_4.gif");
        } else if (param.target.id == "meg2_5") {
            $("#meg2_5").attr("src", "images/mega/bn/megbn2_5.gif");
        } else if (param.target.id == "meg2_6") {
            $("#meg2_6").attr("src", "images/mega/bn/megbn2_6.gif");
        } else if (param.target.id == "meg2_7") {
            $("#meg2_7").attr("src", "images/mega/bn/megbn2_7.gif");
        } else if (param.target.id == "meg2_8") {
            $("#meg2_8").attr("src", "images/mega/bn/megbn2_8.gif");
        } else if (param.target.id == "meg3_1") {
            $("#meg3_1").attr("src", "images/mega/bn/megbn3_1.gif");
        } else if (param.target.id == "meg3_2") {
            $("#meg3_2").attr("src", "images/mega/bn/megbn3_2.gif");
        } else if (param.target.id == "meg3_3") {
            $("#meg3_3").attr("src", "images/mega/bn/megbn3_3.gif");
        } else if (param.target.id == "meg3_4") {
            $("#meg3_4").attr("src", "images/mega/bn/megbn3_4.gif");
        } else if (param.target.id == "meg3_5") {
            $("#meg3_5").attr("src", "images/mega/bn/megbn3_5.gif");
        } else if (param.target.id == "meg3_6") {
            $("#meg3_6").attr("src", "images/mega/bn/megbn3_6.gif");
        } else if (param.target.id == "meg3_7") {
            $("#meg3_7").attr("src", "images/mega/bn/megbn3_7.gif");
        } else if (param.target.id == "meg3_8") {
            $("#meg3_8").attr("src", "images/mega/bn/megbn3_8.gif");
        } else if (param.target.id == "meg3_9") {
            $("#meg3_9").attr("src", "images/mega/bn/megbn3_9.gif");
        }
    }

    var botones = document.querySelectorAll("input");

    for (var i = 0; i < botones.length; i++) {
        botones[i].addEventListener("mouseover", removeImg, false);
    }

    function removeImg(param) {
        if (param.target.id = "but1") {
            $(".meg1").remove();
        }
    }








    /*
    .html inserta texto cambiandolo
    .txt igual que html pero no funciona con etiquetas
    .append() inserta texto detras
    .prepend() inserta texto delante
    .before() inserta antes del elemento seleccionado
    .after() inserta despues del elemento seleccionado
    .remove() elimina
    .replaceWith() cambia el contenido por lo de dentro de los parentesis
    .addClass() añade el nombre de una clase
    .removeClass() elimina una clase del elemento
    .toggleClass() 
    .attr("atributo",valor del atributo a cambiar) 
    */

});