'use strict'
 
{
    const botaoSoma = document.getElementById('botao-Soma')



function mostrarResultado (){

    const num1  = document.getElementById('nb1').value
    const num2  = document.getElementById('nb2').value
    const resultado  = document.getElementById('resultado')

    const valor = Number(num1) + Number(num2)

resultado.textContent = `${Number(num1)} + ${Number(num2)} é igual á: ${Number(valor)}`

}

botaoSoma.addEventListener('click', mostrarResultado)
}



{
    const botaoSub = document.getElementById('botao-sub')

function mostrarResultado(){

    const num1 = document.getElementById('nb1').value
    const num2 = document.getElementById('nb2').value
    const resultado = document.getElementById('resultado')

    const valor2 = Number(num1) - Number(num2)

    resultado.textContent = `${Number(num1)} - ${Number(num2)} é igual á: ${Number(valor2)}`

}

botaoSub.addEventListener('click', mostrarResultado)
}





{
    const botaoMult = document.getElementById('botao-mult')

function mostrarResultado(){

    const num1 = document.getElementById('nb1').value
    const num2 = document.getElementById('nb2').value
    const resultado = document.getElementById('resultado')

    const valor3 = Number(num1) * Number(num2)

    resultado.textContent = `${Number(num1)} x ${Number(num2)} é igual á: ${Number(valor3)}`
}

botaoMult.addEventListener('click', mostrarResultado)
}






{
    const botaoDivi = document.getElementById('botao-divi')

function mostrarResultado(){

    const num1 = document.getElementById('nb1').value
    const num2 = document.getElementById('nb2').value
    const resultado = document.getElementById('resultado')

    const valor4 = Number(num1) / Number(num2)

    resultado.textContent = `${Number(num1)} ÷ ${Number(num2)} é igual á: ${Number(valor4)}`

}

botaoDivi.addEventListener('click', mostrarResultado)
}