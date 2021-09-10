let tabuleiro = ['', '', '', '', '', '', '', '', '']
let vez = 0
let simbolo = ['x' , 'o']

function movimentando(posicao){
    if(tabuleiro[posicao] == ''){
        tabuleiro[posicao] = simbolo[vez]

        if(vez == 0){
            vez = 1
        }else{
            vez = 0
        }
    }
}