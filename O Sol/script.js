const frases = [
  '📅 25/09/2024 - Dia 00: Hoje foi um dia diferente de todos os outros, onde você me liga depois de uma briga com seu pai (confesso que achei estranho), eu queria muito te ver depois disso e ofereci carona para ir trabalhar, que por algum motivo sabia que era exatamente o que precisava. E ver você vestida de mostarda, nosso misto quente em um dos meus lugares favoritos só me fizeram ver o quão importante são esses momentos com você e nesse dia, posso dizer que me apaixonei(de novo). A noite, quando fomos no parque das aguas, foi uma noite diferente de tudo, ali tivemos conversas aleatorias, conversas sérias, brincamos, falamos mal dos outros, etc... uma noite perfeita (quero que todos nossos dias sejam assim). ',

  '📅 26/09/2024 - Dia 01: Depois do dia de ontem, eu queria muito te ver e então fiz a educação positiva para ter alguma forma de ver você (KKKKKKKKKKKKKK), e por sorte, você aceitou que eu te levasse para o trabalho (que manha maravilhosa), insisti para você meter o loko no trampo, eu queria muito ter sua companhia, não precisariamos fazer nada, só queria ta com você perto. O livro que baixei para você, vai ficar para sempre marcado como uma lembrança de você. Mesmo eu querendo muito, eu não imaginava que iriamos se ver de novo, e no fim você quis tomar sorvete e passar a noite comigo (que dia meu amigo), não deveriamos ter feito nada nesse dia, os dois estavam tensos,  aceleramos muito o processo e você acabou aceitando ser a minha ficante plus ultra master 4k.',

  '📅 27/09/2024 - Dia 02: Eu cheguei a sonhar com você nesse dia, e bateu uma saudade surreal (nem parecia que tinhamos se visto na noite anterior). Fiz educação positiva de novo e tive a melhor resposta que poderia ter recebido (você queria me ver tanto de manha quanto de noite). Essas manhãs se tornaram algo que quero fazer todos os dias, quero poder tomar café com você, te levar para o trabalho (até o dia que você vai ser minha esposa trofeu e não vai trabalhar nunca mais) ou seja, te ver todos os dias. A noite, quando fomos com o cice no shopping sorocaba, não sei explicar, mas tinha alguma coisa diferente ali e quando chegamos em casa, eu percebi que tava me sentindo muito mais confortavel com você do que nunca, tivemos sim uma conversa dificil (extremamente necessaria para o nosso recomeço) e de verdade? Quero muito finalizar ela para que possamos seguir juntos. Uma coisa que me falou a noite, eu entendi perfeitamente. Você vai amar alguém como me ama e vai receber um amor tão intenso quanto o meu (Spoiler: eu vou essa pessoa na sua vida). Não é por costume da rotina ou qualquer outra coisa, é pelo sentimento que um tem pelo outro, a pergunta que finalizei a noite, é justamente o que eu quero: ME DEIXA ENFRENTAR SEUS MEDOS COM VOCÊ?',

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