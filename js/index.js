//let predio = ["terreo","primeiroAndar","segundoAndar"];

//predio.push("quartoAndar") adiciona item no final da lista
//predio.unshift("subsolo") adiciona item no começo da lista
//predio.shift() RETIRA um item do começo da lista
//predio.pop() RETIRA um item do final da lista

/*for (let contador = 0; contador < 3; contador++){
    console.log(contador);
}*/

/*let estados = ["rio", "sao paulo", "bahia"]

for(let i = 0; i < estados.length; i++){
    console.log(estados[i])
}*/

//objetos em java
/*let minhaXicara = {
    cor: marrom,
    peso: 30
}*/

function identificadorOpcoes(event){
    const elemento = event.target;

    if(elemento.tagName == "LI"){
        const id = elemento.id;

        const secaoEscolha = document.querySelector('div[data-id"${id}"]')
    }
}