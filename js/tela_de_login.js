const email = "gabriellyalves@gmail.com";
const senha = "Abc123";

var campoEmail = document.getElementById("email");
var campoSenha = document.getElementById("senha");
var botaoEntrar = document.getElementById("btn-entrar");

botaoEntrar.addEventListener('click',() => {
    if(campoEmail.value == "" || campoSenha.value == ""){
        alert("Email e senha devem ser preenchidos!");
    return;
    }else if(campoEmail.value.toLowerCase() != email || campoSenha.value != senha) {
        alert("Usuário ou senha inválidos");
    return;
    }else{
        window.open("tela_principal.html","_self");
    }
})