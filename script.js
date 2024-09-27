const frases = [
  'Se a vida fosse um jogo, te amar seria o meu gol nos acréscimos, como nos jogos mais tensos do Curica.',

  'Assim como o sol e a lua, somos diferentes, mas feitos para estar juntos...',

  'Você não se acha merecedora do amor, mas saiba que você é uma pessoa linda de se amar...'
]

let fraseIndex = 0
const fraseElement = document.getElementById('frase')

function mostrarFrase() {
  fraseElement.classList.add('fade-out')
  setTimeout(() => {
    fraseElement.textContent = frases[fraseIndex]
    fraseElement.classList.remove('fade-out')
    fraseIndex = (fraseIndex + 1) % frases.length
  }, 1000)
}

setInterval(mostrarFrase, 5000)

// Exibir a primeira frase imediatamente
mostrarFrase()
