$(document).ready(iniciarEventos);

function iniciarEventos()
{
    implementarcampos();
    $("#enviar").click(guardar);        
}

function implementarcampos()
{
    if(sessionStorage.getItem(['inicio'])==null)
    {
        $("#contador").html('<a href="#" >Tienes actualmente</a><br><span class="badge" id="numerovacas">0</span><span> Vacas</span>');
        $("#vacas").html('<h2>No tienes vacas</h2>');
        sessionStorage.setItem('inicio','SI');
        sessionStorage.setItem('vacas','vacio');
    }
    else
    {
        var vacas = sessionStorage.getItem(['vacas']);
        vaquitas = JSON.parse(vacas);
        var total = vaquitas.length;
        $("#contador").html('<a href="#" >Tienes actualmente</a><br><span class="badge" id="numerovacas">'+total+'</span><span> Vacas</span>');
        $("#vacas").html('<thead><th>ID</th><th>Nombre</th><th>Correo</th><th>Peso</th><th>Fecha_Nacimiento</th><th></th></thead><tbody>');
        for(var i = 0;i<total;i++)
        {
            var nombre = vaquitas[i].nombre;
            var correo = vaquitas[i].correo;
            var peso = vaquitas[i].peso;
            var fecha = vaquitas[i].fecha;
            
            $("#vacas").append('<tr><td>'+i+'</td><td>'+nombre+'</td><td>'+correo+'</td><td>'+peso+'</td><td>'+fecha+'</td></tr>');
        }
        $("#vacas").append('</tbody>');
    }
}

function guardar(e)
{
    e.preventDefault();
    var nombre = $("#nombre").val();
    var correo = $("#correo").val();
    var peso = $("#peso").val();
    var fecha = $("#fecha").val();

    var cadenajson = '{"nombre":"'+nombre+'","correo":"'+correo+'","peso":"'+peso+'","fecha":"'+fecha+'"}';
    
    if(sessionStorage.getItem(['vacas'])=="vacio")
    {
        var vacas = new Array;
        cadenajson= JSON.parse(cadenajson);
        vacas.push(cadenajson);
        vacas = JSON.stringify(vacas);
        sessionStorage.setItem('vacas',vacas);
    }
    else
    {
        var vacas = sessionStorage.getItem(['vacas']);
        vacas = JSON.parse(vacas);
        cadenajson= JSON.parse(cadenajson);
        vacas.push(cadenajson);
        vacas = JSON.stringify(vacas);
        sessionStorage.setItem('vacas',vacas);
    }
    implementarcampos();
    
}