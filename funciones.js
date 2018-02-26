$(document).ready(iniciarEventos);

function iniciarEventos()
{
    
    $("#sucessPanel").hide();   
    $("#errorPanel").hide();   
    $("#divBrand").hide();
    $("#divModel").hide();
    $("#marca").click(function(){
        $("#divBrandList").hide();
        $("#divBrand").show("slow");
        $("#divMain").hide("slow");
    })
     $("#modelo").click(function(){
        $("#divModel").show("slow");
         $("#divMain").hide("slow");
         
    })
    $("#regresarmarca").click(function(){
        $("#divBrand").hide("slow");
        $("#divMain").show("slow");
    })
     $("#regresarmodelo").click(function(){
        $("#divModel").hide("slow");
        $("#divMain").show("slow");
    })
    $("#añadirmarca").click(function(){
        $("#divBrandList").show("slow");
        $("#mensaje").hide();
    })
    
    $("#guardarmarca").click(guardarmarca);
     $("#guardartodo").click(guardartodo);

}




function implementarcampos()
{
    if(sessionStorage.getItem(['inicio'])==null)
    {
        sessionStorage.setItem('inicio','SI');
        sessionStorage.setItem('coche','vacio');
    }
    else
    {
        var coche = sessionStorage.getItem(['coche']);
        var cochecito = JSON.parse(coche);
        var total = cochecito.length;
        for(var i = 0;i<total;i++)
        {
            var matricula = cochecito[i].matricula;
            var marca = cochecito[i].marca;
            var modelo = cochecito[i].modelo;
            var transmision = cochecito[i].transmision;
            var comentario = cochecito[i].comentario;
            
            $("#tabla").append('<tr><th>'+matricula+'</th><th>'+marca+'</th><th>'+modelo+'</th><th>'+transmision+'</th><th>'+comentario+'</th></tr>');
        }
        $("#tabla").append('</tbody>');
    }
}

function guardartodo(e)
{
    e.preventDefault();
    var matricula = $("#carId").val();
    var marca = $("#brand").val();
    var modelo = $("#model").val();
    var transmision = $("#transmission").val();
    var comentario = $("#commentary").val();

    var cadenajson = '{"matricula":"'+matricula+'","marca":"'+marca+'","modelo":"'+modelo+'","transmision":"'+transmision+'","comentario":"'+comentario+'"}';
    
    if(sessionStorage.getItem(['coche'])=="vacio")
    {
        var coche = new Array;
        cadenajson= JSON.parse(cadenajson);

        coche.push(cadenajson);
        
        coche = JSON.stringify(coche);
        sessionStorage.setItem('coche',coche);
        $("#mensaje").attr("class","alert alert-success alert-dismissible");
        $("#mensaje").html("Vaquita insertados correctamente");
    }
    else
    {
       
        var coche = sessionStorage.getItem(['coche']);
        coche = JSON.parse(coche);
        cadenajson= JSON.parse(cadenajson);
        coche.push(cadenajson);
        coche = JSON.stringify(coche);
        sessionStorage.setItem('coche',coche);
        $("#mensaje").attr("class","alert alert-success alert-dismissible");
        $("#mensaje").html("Datos insertados correctamente");
         
    }
    implementarcampos();
    
}

function guardarmarca(e)
{
    e.preventDefault();
    var marca = $("#marcaid").val();
    sessionStorage.setItem('marca', marca);
    var marcas = sessionStorage.getItem('marca');
    $("#brand").append('<option name="'+marcas+'" value="'+marcas+'">'+marcas+'</option>');
    $("#divBrand").hide("slow");
    $("#divMain").show("slow");
}


