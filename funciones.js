$(document).ready(InicializarEventos);

function InicializarEventos(){
    $("#guardar").click(introducirVaca);
}

function introducirVaca(e){
    e.preventDefault();
    var nombre=$("#nombre").val();
    var correo=$("#correo").val();
    var peso=$("#peso").val();
    var fecha=$("#fecha").val();
    var obj ='{ "nombre":"'+nombre+'", "correo":"'+correo+'", "peso":"'+peso+'", "fecha":"'+fecha+'"}';
    var obj2=JSON.stringify(obj);
    var array2=new Array();
    array2.push(obj2);
    sessionStorage.setItem("vaca",array2);
    var traduccion=JSON.parse(sessionStorage.getItem("vaca"));
    var tabla=$("#tabla");
    
    alert(traduccion.length);
        for(var i=0;i<traduccion.length;i++)
            {
                tabla.html("<thead><tr><th>Id</th><th>Nombre</th><th>Correo</th><th>Peso</th><th>fecha_nacimiento</th></tr></thead><tbody><tr><td></td><td>"+traduccion[i].nombre+"</td><td>"+traduccion[i].correo+"</td><td>"+traduccion[i].peso+"</td><td>"+traduccion[i].fecha+"</td></tr></tbody>");
            }
                
        
    

}