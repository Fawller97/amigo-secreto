//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
alert ("Seja bem vindo ao Amigo Secreto")

let listaNomes = [];

function adicionarAmigo(){
    let nomeDigitado = document.querySelector('input').value
     if(nomeDigitado == ""){
        alert('Por Favor insira um nome ! ')
     }else {
 listaNomes.push(nomeDigitado);
    document.querySelector('input').value = '';
    console.log(listaNomes);
     }
      
       
     }
