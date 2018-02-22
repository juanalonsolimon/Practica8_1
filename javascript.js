$(document).ready(iniciarEventos);

function iniciarEventos(){
    guardarDatos();
    mostrarVacas();

}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function guardarDatos(e){


    var nombre = getParameterByName("nombre");
    var correo = getParameterByName("correo");
    var peso = getParameterByName("peso");
    var fecha = getParameterByName("fecha");

    if(nombre == "" || correo == ""){
        return false;
    }

    $("#alert").text("se ha añadido una vaquita");
    $("#alert").addClass("alert alert-danger");
    
    var txtjson = "";
    txtjson+='{';
    txtjson+='"nombre": "'+nombre+'", ';
    txtjson+='"correo": "'+correo+'", ';
    txtjson+='"peso": "'+peso+'", ';
    txtjson+='"fecha": "'+fecha+'"';
    txtjson+='}';


    var obj = JSON.parse(txtjson);

    var tabla = new Array;
    if(vacas = localStorage.getItem('vacas')) { 
        tabla = JSON.parse(vacas);
    }
    tabla.push(obj);

    txtjson = JSON.stringify(tabla);
    localStorage.setItem('vacas',txtjson);

}

function mostrarVacas(){
    var vacas = localStorage.getItem('vacas');
    if(vacas == null){
        var cantidad = 0;
    }else{
        vacas = JSON.parse(vacas);
        var cantidad = vacas.length;   
    }

    var txtCantidad ="";
    txtCantidad+= "<a href='#' >Tienes actualmente</a><br>";
    txtCantidad+= "<span class='badge'>"+cantidad+"</span> vacas<br>";
    
    $("#cantidad").html(txtCantidad);
    
    
    if(cantidad == 0){
        return false;
    }

    var txttabla = "";

    txttabla+= "<tr>"; 
    txttabla+= "<th>ID</th>"; 
    txttabla+= "<th>Nombre</th>"; 
    txttabla+= "<th>Correo</th>"; 
    txttabla+= "<th>Peso</th>"; 
    txttabla+= "<th>Fecha nacimiento</th>"; 
    txttabla+= "<th></th>"; 
    txttabla+= "<th></th>"; 
    txttabla+= "<th></th>"; 
    txttabla+= "</tr>"; 

    for(var i = 0 ; i < cantidad; i++){
        txttabla+= "<tr>"; 
        txttabla+= "<td>"+i+"</td>";  
        txttabla+= "<td>"+vacas[i]["nombre"]+"</td>";  
        txttabla+= "<td>"+vacas[i]["correo"]+"</td>";  
        txttabla+= "<td>"+vacas[i]["peso"]+"</td>";  
        txttabla+= "<td>"+vacas[i]["fecha"]+"</td>"; 
        txttabla+= "<td></td>"; 
        txttabla+= "<td></td>"; 
        txttabla+= "<td></td>"; 
        txttabla+= "</tr>";
    }

    $("#tabla").html(txttabla);
}