$(document).ready(inicializarEventos);


function inicializarEventos()
{
    $("#enviar").click(crearVaca);
    alert("hola");
    
}


function crearVaca(e)
{
    e.preventDefault();
    var nombre = $("#nombre").val();
    var correo = $("#correo").val();
    var peso = $("#peso").val();
    var fecha = $("#fecha").val();
    
    var json = '{"nombre":"'+nombre+'" , "correo":"'+correo+'", "peso":"'+peso+'", "fecha":"'+fecha+'"}';
    var traducido = JSON.parse(json);
    var conjunto = new Array;
    conjunto.push(traducido);
    sessionStorage.setItem('vacas',JSON.stringify(conjunto));
    var array = sessionStorage.getItem('vacas');
    array = JSON.parse(array);
    for(var i=0;i<array.length;i++)
        {
            alert(array[i]["nombre"]);
        }

    

}