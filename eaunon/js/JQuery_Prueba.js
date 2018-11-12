$(document).ready(function(){

    var close=document.getElementById("close");
    close.addEventListener("click", cerrar_banner, false);
    
    function cerrar_banner(){
        $("#pop_up").remove();
    }

    var imagenes=document.querySelectorAll("#tablaImg .img");
    for(var i=0;i<imagenes.length;i++){
        imagenes[i].addEventListener("click" ,comprar_articulo, false);
    }

    function comprar_articulo(param){
        if(param.target.id=="but1"){
            $("#but1").replaceWith("<img src='images/sold.gif'>");
        }else if(param.target.id=="but2"){
            $("#but2").replaceWith("<img src='images/sold.gif'>");
        }else if(param.target.id=="but3"){
            $("#but3").replaceWith("<img src='images/sold.gif'>");
        }else if(param.target.id=="but4"){
            $("#but4").replaceWith("<img src='images/sold.gif'>");
        }
    }
    butCom.addEventListener("click" ,resaltarL1, false);
    function resaltarL1(){
        $(".link1").addClass("resaltar");
        $(".link2").removeClass("resaltar");
    }
    butTools.addEventListener("click" ,resaltarL2, false);
    function resaltarL2(){
        $(".link2").addClass("resaltar");
        $(".link1").removeClass("resaltar");
    }
    butTog.addEventListener("click" ,togAll, false);
    function togAll(){
        $(".link2").toggleClass("resaltar");
        $(".link1").toggleClass("resaltar");
    }
    butClear.addEventListener("click" ,clearAll, false);
    function clearAll(){
        $(".link2").removeClass("resaltar");
        $(".link1").removeClass("resaltar");
    }
    butCorr.addEventListener("click" ,corrAll, false);
    function corrAll(){
        $(".link2").addClass("resaltar");
        $(".link1").addClass("resaltar");
    }


    /*
    but1.addEventListener("click", comprar_articulo1, false);
    but2.addEventListener("click", comprar_articulo2, false);
    but3.addEventListener("click", comprar_articulo3, false);
    but4.addEventListener("click", comprar_articulo4, false);

    function comprar_articulo1(){
        $("#but1").replaceWith("<img src='images/sold.gif'>");
    }
    function comprar_articulo2(){
        $("#but2").replaceWith("<img src='images/sold.gif'>");
    }
    function comprar_articulo3(){
        $("#but3").replaceWith("<img src='images/sold.gif'>");
    }
    function comprar_articulo4(){
        $("#but4").replaceWith("<img src='images/sold.gif'>");
    }
    */
    

    /*
    .html inserta texto cambiandolo
    .txt igual que html pero no funciona con etiquetas
    .append() inserta texto detras
    .prepend() inserta texto delante
    .before() inserta antes del elemento seleccionado
    .after() inserta despues del elemento seleccionado
    .remove() elimina
    .remplaceWith() cambia el contenido por lo de dentro de los parentesis
    .addClass() añade el nombre de una clase
    .removeClass() elimina una clase del elemento
    .toggleClass() 
    */

});