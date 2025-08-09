//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
alert ("Seja bem vindo ao Amigo Secreto")

let listaNomes = [];

function adicionarAmigo(){
    let nomeDigitado = document.querySelector('input').value
     if(nomeDigitado == ""){
        alert('Por Favor insira um nome ! ')
     }else {
            listaNomes.push(nomeDigitado);
            atualizarlista()
            document.querySelector('input').value = '';
    
     }

    }
    function atualizarlista(){
      let lista = document.getElementById('listaAmigos');
      listaAmigos.innerHTML='';
        listaNomes.forEach((nomeDigitado) =>{
            let item = document.createElement('li');
            item.textContent = nomeDigitado;
            lista.appendChild(item);

        });

    }

     function sortearAmigo(){
        if(listaNomes == 0) {
            alert ("Favor preencha a lista para podermos sortear um amigo");
            return;
        }
            
        let amigoSorteado = Math.floor(Math.random() * listaNomes.length);

        let resultadoSorteio = listaNomes[amigoSorteado];

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>O Amigo sorteado foi: <strong>${resultadoSorteio}</strong></li>`;
        let lista = document.getElementById('listaAmigos');
        listaAmigos.innerHTML= '';
       
    }

     

    
     

