let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('assunto')
let nomeok = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('mapa')
nome.style.width ='34%'
email.style.width ='34%'

function validaNome(){

    let txtNome = document.querySelector('#txtNome')
   
    let txtNome = document.querySelector('txtNome')
    if (nome.value.lenght < 3){
        txtNome.innerHTML = 'Nome Inválido!'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#email')
    
    if (email.value.indexof('@') == -1 || email.value.indexof){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style ='red'
    } else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style ='green'
        emailOk = true
    }
}
function validaAssunto () {
    let txtAssunto = document.querySelector('#assunto')

    if (assunto.value.lenght >= 100){
        txtAssunto.innerHTML = 'O texto não pode conter mais de 100 caracteres!'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}
function enviar (){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Formulário enviado com sucesso!')
    }else{
        alert ('Preencha o formulário corretamente!')
    }
}
function mapaZoom (){
 mapa.style.width= '800px'
 mapa.style.lenght= '600px'
}
function mapaNormal (){
    mapa.style.width= '600px'
    mapa.style.lenght= '450px'
}