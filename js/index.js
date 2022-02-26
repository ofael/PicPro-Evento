const listaOpcoes = document.querySelector(".secaoDetalhesConta")

listaOpcoes.addEventListener("click",identificador)

function identificador(event){

const li = event.target

    if(li.tagName == "LI"){
        const id = li.id

        const secaoEscolha = document.querySelector(`div[data-id="${id}"]`)

        //removendo todas as classes mostrar
        removeClasseMostrar()

        //adicionar uma classe
        secaoEscolha.classList.add("mostrar")
    }
}

function removeClasseMostrar(){
    const divs = document.querySelectorAll(".secaoTransacao .container div")
    
    for(let i = 0;i < divs.length; i++){
        divs[i].classList.remove("mostrar")
    }
}