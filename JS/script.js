function saludar(){
    let nombre = prompt("Bienvenidos al Simulador de estos ambientadores de Eventos, Dinos tu nombre.")
    alert("Bienvenido/a "+ nombre+ " , responde las siguientes opciones asi sabremos mas de lo que estas buscando.")
}
saludar();
let evento = prompt("Escriba el numero del tipo de evento por el que quieres consultar: 1-Infantil, 2-Casamiento, 3-Baby Shower, 4-Despedida de Solteros")
switch (evento){
    case "1":
        alert("Seleccionaste Fiesta Infantil, contamos con todas las tematicas que quieren los peques, acontinuación te diremos que es lo que ofrecemos para ese evento.")
        break;
    case "2":
        alert("Seleccionaste Casamientos, contamos con todo lo neceserio para que esa noche sea mágica, acontinuación te diremos que es lo que ofrecemos para ese evento.")
        break;
    case "3":
        alert("Selececcionaste Baby Shower, contamos con todo lo necesario para la bienvenida que ese pequeño/a, acontinuación te diremos que es lo que ofrecemos para ese evento.")
        break;
    case "4":
        alert("Seleccionaste Despedida de Solteros, contamos con toda la fiesta que ellos/as van a disfrutar y dar comienzo a una nueva etapa, acontinuación te diremos que es lo que ofremos para ese evento.")
        break;
    default:
        alert("Opcion incorrecta")
        break;
}

const servicios = ["Transporte", "Catering", "Decoración", "Muebles", "Disfraces", "Fotografia", "Sonido"]

if (evento == "1"){
    alert(servicios)
} else if(evento == "2"){
    alert(servicios)
} else if(evento == "3"){
    alert(servicios)
} else if(evento == "4"){
    alert(servicios)
} else { 
    alert("Opcion Invalida")
}

let numeroInvitados;

do {
  numeroInvitados = parseInt(prompt("¿Cuántos invitados tienes para el evento?"));
} while (isNaN(numeroInvitados) || numeroInvitados <= 0);

alert("Número de invitados confirmado: " + numeroInvitados);
alert("Ahora imprimiremos por pantalla los datos obtenidos de tu consulta.")

function imprimirXconsola(){
    if(evento == 1){
        console.log("Para el evento de Fiesta Infantil, contamos con los siguientes servicios ", servicios," y tenemos un numero confirmados de invitados de ", numeroInvitados, " personas")
    } else if(evento == "2"){
        console.log("Para el evento de Casamientos, contamos con los siguientes servicios ", servicios," y tenemos un numero confirmados de invitados de ", numeroInvitados, " personas")
    } else if(evento == "3"){
        console.log("Para el evento de Baby Shower, contamos con los siguientes servicios ", servicios," y tenemos un numero confirmados de invitados de ", numeroInvitados, " personas")
    } else if(evento == "4"){
        console.log("Para el evento de Despedida de solteros, contamos con los siguientes servicios ", servicios," y tenemos un numero confirmados de invitados de ", numeroInvitados, " personas")
    } else { 
        console.warn("Opcion Invalida")
        }
}

imprimirXconsola();
