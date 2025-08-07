let contador = 1 

// const container = document.getElementById("container")
// const imagens = document.querySelectorAll(".conatiner img")


// function carrossel(){
//     contador++

//     if(contador > imagens.length -1){
//         contador = 0
//     }
//     console.log("olá");

//     container.style.transform = `translatex(${-contador * 1250}px)`
// }

// // acessar a funçao slider para colocar um tempo de repetiçao
// setInterval(carrossel, 2000)

'use strict'

async function backEnd (){
    const url = `https://back-end-carrossel.onrender.com/fotos`
    const response = await fetch(url)
    const data = await response.json()
    return data.fotos

function criarImagem (link){
    
    let contador = 0
    
    const img = document.getElementById("imagemback")
    const legenda = document.getElementById("legenda")
    const data = document.getElementById("data")

   function carrossel() {
    const imagem = link[contador]
    img.src = imagem.imagem
    legenda.textContent = imagem.legenda
    data.textContent = imagem.data

    contador = (contador + 1) % link.length
    }
    setInterval(carrossel, 2000)
}

async function iniciarCarrossel() {
    const fotos = await backEnd()
    criarImagem(fotos)
}

iniciarCarrossel()
