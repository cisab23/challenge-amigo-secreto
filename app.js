// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let amigoSecreto = sortearAmigo();


function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value

   if (amigo === ""){
        alert("Por favor, ingresa un nombre.");
        return;
    }
    if (listaAmigos.includes(amigo)){
        alert(`${amigo} ya se encuentra ingresado en la lista!`)
        return;
    }
 
       listaAmigos.push(amigo)
}
