let inputNome = document.querySelector('#input_nome')
let inputIdade = document.querySelector('#input_idade')
let inputPeso = document.querySelector('#input_peso')
let inputAltura = document.querySelector('#input_altura')
let botaoVerificar = document.querySelector('#verificar')
let lista = document.querySelector('#listaTarefa')

botaoVerificar.addEventListener('click', function(){
    let pessoa = {
        nome : inputNome.value,
        idade : inputIdade.value,
        peso : parseFloat(inputPeso.value),
        altura : parseFloat(inputAltura.value),
        
        
    }

adicionar(pessoa)
calculoIMC(pessoa.peso,pessoa.altura)
    
})

function adicionar(pessoa){
   
    let li = criarLista(pessoa)
    lista.appendChild(li)
    inputNome.value = ''
    inputIdade.value = ''
    inputPeso.value = ''
    inputAltura.value = ''
}

function criarLista(p){
   
    let li = document.createElement('li')
    li.classList.add('lista')
    let div = document.createElement('div')
    let span = document.createElement('span')
    span.innerHTML = `O seu nome é ${p.nome} a sua idade é de ${p.idade} anos`

    li.appendChild(div)
    li.appendChild(span)
    
 
    return li
}

function calculoIMC(peso,altura){
   
    let imc = peso / (altura * altura)
    let classificacao = ''  
    let res = document.createElement('p')
    
    lista.appendChild(res)

    

    if (imc <= 18.5) {
        classificacao = 'Magreza'

    } else if (imc >= 18.5 && imc <= 24.8) {
        classificacao = 'Normal'

    } else if (imc >= 25.0 && imc <= 29.9) {
        classificacao = 'Sobrepeso'

    } else if (imc >= 30.0 && imc <= 39.9) {
        classificacao = 'Obesidade'

    } else if (img >= 40.0 && imc <= 80.0){
        classificacao = 'Obesidade grave'
    }

    res.innerHTML = `O seu IMC é de ${imc.toFixed(2)} e sua classificação é ${classificacao} <br><hr>`
            
}