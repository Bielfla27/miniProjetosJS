document.body.addEventListener('keyup' , (evento)=>{
    
    tocaSom(event.code.toLowerCase()) 

})

document.querySelector('.composer button').addEventListener('click' , () => {
    let musica = document.querySelector('#input').value;

    console.log(musica)

    if(musica !== '' ){
        let musicaArray = musica.split('')
        composicao(musicaArray)
    }
})


function tocaSom(som){

    let elementoAudio =  document.querySelector(`#s_${som}`)
    let elementoTecla =  document.querySelector(`div[data-key="${som}"]`)

    if(elementoAudio){
        elementoAudio.currentTime = 0
        elementoAudio.play()
    }

    if(elementoTecla){
        elementoTecla.classList.add('active')

        setTimeout(()=> {
            elementoTecla.classList.remove('active')
        },300)


    }
}


function composicao(musicaArray){
    let tempo = 0

    for(let itemMusica of musicaArray){
        setTimeout(()=> {
            tocaSom(`key${itemMusica}`)
        },tempo)

        tempo += 250
    }
}