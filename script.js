const frases = [
  'Assim como o sol e a lua, somos diferentes, mas feitos para estar juntos...',

  'Se a vida fosse um jogo, te amar seria o meu gol nos acréscimos, como nos jogos mais tensos do Curica.',

  'Você não se acha merecedora do amor, mas saiba que você é uma pessoa linda de se amar...',

  'Eu gostaria que você pudesse se ver do jeito que eu vejo você...',

  'Eu amo amar você, nunca se esqueça disso...',

]

let indice = 0

function mostrarFrase() {
  const elementoFrase = document.getElementById('frase')
  elementoFrase.innerText = frases[indice]
}

function mostrarProximaFrase() {
  indice = (indice + 1) % frases.length // Incrementa o índice e reinicia se chegar ao fim
  mostrarFrase()
}

// Exibe a frase inicial ao carregar a página
document.addEventListener('DOMContentLoaded', mostrarFrase)

// Chama a função de mostrar a próxima frase ao clicar no botão
