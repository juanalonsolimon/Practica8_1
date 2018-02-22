$(document).ready(inicializarEventos);

function inicializarEventos(){
    $("#tablita").append("<tr><td>No hay vacas registradas crack</td></tr>");
    $("#enviar").click(guardarvaca);
}

function guardarvaca(e){
    e.preventDefault();
    
    if(sessionStorage.length == 0)
        {
            var id = 0;
            $("#tablita tr:first").remove();
            $("#tablita").append("<tr><td>ID</td><td>Nombre</td><td>Correo</td><td>Peso</td><td>Fecha</td></tr>");
        }else{
            var obj = jQuery.parseJSON("id");
            alert(obj.id);
        }
    
    var nombre = $("#nombre").val();
    var correo = $("#correo").val();
    var peso = $("#peso").val();
    var fecha = $("#fecha").val();

    $("#tablita").append("<tr><td>"+id+"</td><td>"+nombre+"</td><td>"+correo+"</td><td>"+peso+"</td><td>"+fecha+"</td><td><button id='editar'>Editar</td></td></tr>");
    
    $("#editar").click(editarvaca);
    
    var vaca1 = [id, nombre, correo, peso, fecha];
    var vaca2 =JSON.stringify(vaca1);
    var vaca = JSON.parse(vaca2);
    alert(vaca);
    
    sessionStorage.setItem("vaquita", vaca);
    
}

// ESTA FUNCIÓN VIENE DEL BOTON QUE HE PUESTO AL HACER EL APPEND EN "TABLITA" ;)

function editarvaca(){
    alert("muuu");
}