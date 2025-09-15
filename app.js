// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
let amigoSecreto = sortearAmigo();


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
 
       listaDeAmigos.push(amigo)
       mostrarNombres()
}

function mostrarNombres(){
    let listaNombres = document.getElementById("listaAmigos");
    listaNombres.innerHTML = "";
    
    for (let i = 0; i < listaDeAmigos.length; i++){
        let nombre = document.createElement("li");
        nombre.textContent = listaDeAmigos[i]
        listaNombres.appendChild(nombre);
    }
}
