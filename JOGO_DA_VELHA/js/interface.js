document.addEventListener('DOMContentLoaded' ,() =>{

    let quadrados = document.querySelectorAll(".quadrado");

    quadrados.forEach((quadrado) => {
        quadrado.addEventListener('click' ,click)
    })

})

function click(event){
    
    let quadrado = event.target
    let posicao = quadrado.id

    if(movimentando(posicao)){
        setTimeout(function(){ 
            alert("O jogo acabou");
         }, 10);

    }
    colocandoPeca(posicao);
}

function colocandoPeca(posicao) {
    let quadrado = document.getElementById(posicao.toString())
    let simbolo = tabuleiro[posicao]
    quadrado.innerHTML = `<div class='${simbolo}'></div>`    
}


var tempo = 0

var mudaCor = setInterval(function () {
    if(tempo === 1 ){
        document.getElementById("titulo").style.color = 'saddlebrown'
    }else if(tempo === 2 ){
        document.getElementById("titulo").style.color = 'blue'
    }
    else if(tempo === 3){   
        document.getElementById("titulo").style.color = 'lightcoral'
    }else if(tempo === 4){  
        document.getElementById("titulo").style.color = 'cadetblue'
    }else if(tempo === 5){
        document.getElementById("titulo").style.color = 'red'
    }
    else if(tempo === 6){
        document.getElementById("titulo").style.color = 'pink'
        tempo = 0
    }
    tempo += 1
    },500)
tempo += 1