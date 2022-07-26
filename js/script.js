/*
Case sensitive
por ID getElementById
por tag getElementByTag
por nome getElementsByName
por classe getElementsByClass
por seletor querySelector
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let desfile = document.querySelector('#desfile')
let nomeOk = false
let emailOk = false
let desfileOk = false

nome.style.width = '100%'
email.style.width = '100%'
desfile.style.width = '100%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1){
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'

    } else {
        txtEmail.innerHTML = 'Email válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }

}

function validaDesfile(){
    let txtDesfile = document.querySelector('#txtDesfile')
    if(desfile.value.length >= 100){
        txtDesfile.innerHTML = '<h3> Limite de caracteres atingido</h3>'
        txtDesfile.style.color = 'red'
        txtDesfile.style.display = 'block'
    } else {
        txtDesfile.style.display = 'none'
        desfileOk = true
    }
}
function enviar () {
    if(nomeOk == true && emailOk == true && desfileOk == true){
        alert('Sugestão enviada com sucesso')
    }
    else {
        alert('Preencha corretamento todos os campos obrigatórios')
    }
}