'use strict'
 
const botaoSoma = document.getElementById('botao-Soma')



function mostrarResultado (){

    const num1  = document.getElementById('nb1').value
    const num2  = document.getElementById('nb2').value
    const resultado  = document.getElementById('resultado')

    const valor = Number(num1) + Number(num2)

resultado.textContent = `${Number(num1)} + ${Number(num2)} é igual á: ${Number(valor)}`

}

botaoSoma.addEventListener('click', mostrarResultado)