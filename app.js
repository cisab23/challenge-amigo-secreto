// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value

   if (amigo === ""){
        alert("Por favor, ingresa un nombre.");
        return;
    }
    if (listaDeAmigos.includes(amigo)){
        alert(`${amigo} ya se encuentra ingresado en la lista!`)
        return;
    }
 
       listaDeAmigos.push(amigo);
       mostrarNombres();
       limpiarInput();
}

function mostrarNombres(){
    let listaNombres = document.getElementById("listaAmigos");
    listaNombres.innerHTML = "";
    
    for (let i = 0; i < listaDeAmigos.length; i++){
        let nombre = document.createElement("li");
        nombre.textContent = listaDeAmigos[i];
        listaNombres.appendChild(nombre);
    }
}

function limpiarInput(){
    document.getElementById("amigo").value = "";
}

function sortearAmigo(){
    if (listaDeAmigos.length < 2){
        alert("Ingresa mas nombres para hacer el sorteo.");
    } 
    else {
    seleccion = Math.floor(Math.random()*listaDeAmigos.length);
    amigoSecreto = listaDeAmigos[seleccion];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    let nombre = document.createElement("li");
    nombre.textContent = `El amigo seleccionado es ${amigoSecreto}!`
    resultado.appendChild(nombre);
    return;
    }
}