let tabuleiro = ['', '', '', '', '', '', '', '', '']
let vez = 0
let simbolo = ['x' , 'o']
let gamerOver = false
let possivelVitoria =  [ [0,1,2] , [3,4,5] , [6,7,8],
                         [0,3,6] , [1,4,7] , [2,5,8],
                         [0,4,8] , [2,4,6] ]

function movimentando(posicao){

    if(gamerOver){
        return
    }

    if(tabuleiro[posicao] == ''){
        tabuleiro[posicao] = simbolo[vez]

        gamerOver = venceu()

        if(!gamerOver){
            if(vez == 0){
                vez = 1
            }else{
                vez = 0
            }
        }
    }

    return gamerOver
}

function venceu() {


    for (let i = 0; i < possivelVitoria.length; i++ ){
        let sequencia = possivelVitoria[i]

        let posicao1 = sequencia[0]
        let posicao2 = sequencia[1]
        let posicao3 = sequencia[2]
        
        if(tabuleiro[posicao1] == tabuleiro[posicao2] &&
           tabuleiro[posicao1] == tabuleiro[posicao3] &&
           tabuleiro[posicao1] != '' ){

                return true
           }
    }
}