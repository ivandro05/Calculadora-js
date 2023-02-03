const display = document.getElementById('display')
const displayText = document.getElementById('display').textContent
const igual = document.getElementById('igual')
const apagar = document.getElementById('apagar')
const maismenos = document.getElementById('maismenos')
const limparCalculo = document.getElementById('limparCalculo')
const limparTudo = document.getElementById('limparTudo')
const porc = document.getElementById('porc')
const virg = document.getElementById('virg')
const divisaoUm = document.getElementById('divisaoUm')
const potencia = document.getElementById('potencia')
const raiz = document.getElementById('raiz')

const nums = document.querySelectorAll("[id*=num]")
const operadores = document.querySelectorAll("[id*=sinal]")

let primeiro = true
let operador
let numeroAnterior
let numeroAtual
let apagarIgual

const ajustaPontoVirgula = () => display.textContent = display.textContent.replace(',', '.')

const inserirDisplay = text => {

  if (primeiro) {
    display.textContent = text
    primeiro = false
  } else {
    display.textContent += text
  }

  display.textContent = display.textContent.substring(0, 17)
  numeroAtual = display.textContent
  apagarIgual = true
}


const inserir  = e => inserirDisplay(e.target.textContent)

nums.forEach(e => e.addEventListener('click', inserir))

/*-------------------------------Operadores ------------------------ */
const inserirOperador = e => {
  primeiro = true
  operador = e.target.textContent
  if (operador == 'x') {
    operador = '*'
  } else if (operador == '÷') {
    operador = '/'
  }
  numeroAnterior = display.textContent
}


operadores.forEach(e => e.addEventListener('click', inserirOperador))

/*-------------------------------Calcular no Botão de Igual  ------------------------ */ 

const calcular = () => {
  if (numeroAnterior && operador) {
    let result = numeroAnterior + operador

    if(numeroAtual) {
      result += numeroAtual
    } else {
      result += numeroAnterior
    }

    display.textContent = eval(result.replace(',', '.'))
    ajustaPontoVirgula()

    if (display.textContent == 'NaN') {
      display.textContent = '0'
    }

    numeroAnterior = display.textContent
    primeiro = true
    apagarIgual = false
  }
}
igual.addEventListener('click', calcular)

/*------------------------------- Apagar o ultimo numero ------------------------ */
const apagarUltimo = () => {
  if (apagarIgual) {
    if (display.textContent.length > 1) {
      display.textContent = display.textContent.slice(0, -1)
    } else {
      display.textContent = 0
    }

    primeiro = true
  }
}
apagar.addEventListener('click', apagarUltimo)
/*------------------------------- Inverter sinal +/- ------------------------ */
const inverteSinal = () => {
  display.textContent = parseFloat(display.textContent.replace(',', '.')) * -1
  ajustaPontoVirgula()
}
maismenos.addEventListener('click', inverteSinal)

/*-------------------------------Limpar calculo ------------------------ */

const limpaCalculo = () => {
  display.textContent = '0'
  primeiro = true
}

limparCalculo.addEventListener('click', limpaCalculo) 

/*-------------------------------Limpar tudo ------------------------ */

const limpaTudo = () => {
  display.textContent = '0'
  numeroAnterior = '0'
  numeroAtual = '0'
  primeiro = true
}

limparTudo.addEventListener('click', limpaTudo) 

/*-------------------------------Porcentagem ------------------------ */

const porcentagem = () => {
  display.textContent = parseFloat(display.textContent.replace(',', '.')) /100 
  ajustaPontoVirgula()
  numeroAtual = display.textContent
  primeiro = true
}

porc.addEventListener('click', porcentagem) 

/*-------------------------------Porcentagem ------------------------ */
const divisaoporum = () => {
  display.textContent = 1 / parseFloat(display.textContent.replace(',', '.'))
  ajustaPontoVirgula ()
  numeroAtual = display.textContent
  primeiro = true
}

divisaoUm.addEventListener('click', divisaoporum) 

/*-------------------------------Potência ------------------------ */

const calcpotencia = () => {
  display.textContent = Math.pow (parseFloat(display.textContent.replace(',', '.')), 2 )
  ajustaPontoVirgula ()
  numeroAtual = display.textContent
  primeiro = true
}

potencia.addEventListener('click', calcpotencia) 

/*-------------------------------Raiz ------------------------ */

const raizquadrada = () => {
  display.textContent = Math.sqrt (parseFloat(display.textContent.replace(',', '.'))  )
  ajustaPontoVirgula ()
  numeroAtual = display.textContent
  primeiro = true
}

raiz.addEventListener('click', raizquadrada) 