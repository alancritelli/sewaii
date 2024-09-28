const frases = [
  'Dia 00: Hoje foi um dia diferente de todos os outros, onde você me liga depois de uma briga com seu pai (confesso que achei estranho), senti de te oferecer carona para ir trabalhar, que por algum motivo sabia que você precisaria disso. E você vestida de mostarda, nosso misto quente em um dos meus lugares favoritos só me fizeram ver o quão importante são esses momentos com você e nesse dia, posso dizer que me apaixonei de novo por você. ',


  'Se a vida fosse um jogo, te amar seria o meu gol nos acréscimos, como nos jogos mais tensos do Curica.',

  'Eu amo amar você, nunca se esqueça disso...'

  
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
