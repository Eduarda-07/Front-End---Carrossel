'use strict'

async function backEnd (){
    const url = `https://back-end-carrossel.onrender.com/fotos`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

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
