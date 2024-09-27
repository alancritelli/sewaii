const frases = [
  'Você é a razão do meu sorriso.',
  'Cada momento com você é único.',
  'Te amo mais a cada dia que passa.',
  'O amor verdadeiro é aquele que o vento não leva e a distância não separa.',
  'Quando estou com você, o tempo para e o mundo se ilumina.',
  'Seu amor é a melodia que embala meu coração.'
]

let indice = 0

function mostrarProximaFrase() {
  const elementoFrase = document.getElementById('frase')
  if (indice < frases.length) {
    elementoFrase.innerText = frases[indice]
    indice++
  } else {
    elementoFrase.innerText = 'Você viu todas as frases!'
  }
}
