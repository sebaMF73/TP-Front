

const borrar=document.getElementById("btnBorrar")
const nombre=document.getElementById("nombre")
const apellido=document.getElementById("apellido")
const cantidad=document.getElementById("cantidad")
const categoria=document.getElementById("categoria")
const correo=document.getElementById("email")
const calcular_total=document.getElementById("btn_calcular")



const validarCorreo=()=>{
var expReg =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

var verificacion=expReg.test(correo.value)
return verificacion
}


function limpiarForm(){
  let formulario=document.getElementById("formulario")
    formulario.reset()
    total.innerHTML=""
    }

function calcular(){
  
    if (nombre.value.trim()==""){
        alert("Debe ingresar un Nombre")
        nombre.focus()
        return
    }
    if (apellido.value.trim()==""){
        alert("Debe ingresar un Apellido")
        apellido.focus()
        return
    }
   
    if (!validarCorreo()){
        
        alert("Debe ingresar un correo válido")
        correo.focus()
        return
    }



    if (Number.isNaN(cantidad)||cantidad.value==0){
        alert("Debe ingresar una cantidad válida de Tickets a Comprar")
        cantidad.focus()
        return
    }
    if (categoria.value=="--Seleccione--"){
        alert("Debe seleccionar una categoría")
        categoria.focus()
        return
    }
    var precio=200
    var porcentaje=0
    switch (categoria.value) {
       
        case "Estudiante":
            porcentaje=80;
            break;
        case "Trainee":
            porcentaje=50;
            break;
        case "Junior": 
            porcentaje=15   
            break;
            
        default:
            porcentaje=0
            break;
    }
    resultado=(precio-(precio*porcentaje)/100)*cantidad.value;

    total.innerHTML=resultado

}

calcular_total.addEventListener("click",calcular)
borrar.addEventListener("click",limpiarForm)
