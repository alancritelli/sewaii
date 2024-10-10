function calcularTempoDecorrido() {
  // Define a data inicial como 23 de setembro de 2024
  const dataInicial = new Date('2024-09-25')
  const agora = new Date() // Obtém a data e hora atuais

  // Calcula a diferença em milissegundos
  const diferenca = agora - dataInicial

  // Converte a diferença para segundos, minutos, horas e dias
  const segundosTotais = Math.floor(diferenca / 1000)
  const minutosTotais = Math.floor(segundosTotais / 60)
  const horasTotais = Math.floor(minutosTotais / 60)
  const dias = Math.floor(horasTotais / 24)

  const horas = horasTotais % 24
  const minutos = minutosTotais % 60

  // Atualiza o conteúdo do elemento com o tempo decorrido
  document.getElementById(
    'time-elapsed'
  ).textContent = `${dias} dias, ${horas} horas, ${minutos} minutos`
}

// Atualiza o timer a cada segundo
setInterval(calcularTempoDecorrido, 1000)
