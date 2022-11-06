export default function acesso(){}

const regexEmail = /^[a-z0-9]+\.?[a-z0-9]+@[a-z]+\.[a-z]+(\.[a-z]+)?$/;
const inputEmail = document.querySelector("#email");
const inputEmailConfirmar = document.querySelector("#confirmar-email");
const erroJustificado = document.querySelector(".erro");

inputEmail.addEventListener("blur", ()=> {
if(!regexEmail.exec(inputEmail.value)) {
    inputEmail.classList.add("erro-input");
    erroJustificado.innerHTML = `<i class="fa-solid fa-circle-exclamation icone"></i> O seu e-mail é inválido.`
} else {
    inputEmail.classList.remove("erro-input");
    erroJustificado.innerHTML = ""
}});

inputEmailConfirmar.addEventListener("blur", ()=> {
if(!regexEmail.exec(inputEmailConfirmar.value)) {
    inputEmailConfirmar.classList.add("erro-input");
    erroJustificado.innerHTML = `<i class="fa-solid fa-circle-exclamation icone"></i> O seu e-mail é inválido.`
} else {
    inputEmailConfirmar.classList.remove("erro-input");
    erroJustificado.innerHTML = ""
}

if(inputEmail.value != inputEmailConfirmar.value) {
    inputEmailConfirmar.classList.add("erro-input");
    inputEmail.classList.add("erro-input");
    erroJustificado.innerHTML = `<i class="fa-solid fa-circle-exclamation icone"></i> Os e-mails estão diferentes.`
} else {
    inputEmailConfirmar.classList.remove("erro-input");
    inputEmail.classList.remove("erro-input");
    erroJustificado.innerHTML = "";
}
})

const inputSenha = document.querySelector("#senha");
const inputSenhaConfirmar = document.querySelector("#confirmar-senha");
const senhaLength = document.querySelector("#length");
const senhaLetra = document.querySelector("#letra");
const senhaNumero = document.querySelector("#numero");
const senhaCaracter = document.querySelector("#caracter");
const senhasIguais = document.querySelector("#senhas-iguais");

inputSenha.addEventListener("keyup", ()=> {
const senha = inputSenha.value;
if(senha.length < 8){
    senhaLength.setAttribute("id", "erro-senha");
} else {
    senhaLength.removeAttribute("id")
    senhaLength.setAttribute("id", "check");
}
if(senha.match(/\d+/)) {
    senhaNumero.setAttribute("id", "check");
} else {
    senhaNumero.removeAttribute("id");
    senhaNumero.setAttribute("id", "erro-senha");
}

if(senha.match(/[A-Z]/) && senha.match(/[a-z]/)) {
    senhaLetra.setAttribute("id", "check");
} else {
    senhaLetra.removeAttribute("id");
    senhaLetra.setAttribute("id", "erro-senha");
}

if(senha.match(/[$*&\.@#]/)) {
    senhaCaracter.setAttribute("id", "check");
} else {
    senhaCaracter.removeAttribute("id");
    senhaCaracter.setAttribute("id", "erro-senha");
}
})

inputSenhaConfirmar.addEventListener("keyup", ()=> {
if(inputSenha.value != inputSenhaConfirmar.value) {
    senhasIguais.setAttribute("id", "erro-senha");
} else {
    senhasIguais.removeAttribute("id");
    senhasIguais.setAttribute("id", "check")
}})

function checkInputs(inputs) {
    let inputPreenchido = true;
    inputs.forEach((input) => {
        if(input.value === "") {
            inputPreenchido = false
        }
    })
    return inputPreenchido
}

const botaoProx = document.querySelector(".botao-prox"); 
const inputRequired = document.querySelectorAll("[required]");
inputRequired.forEach((input)=> {
    input.addEventListener("keyup", ()=> {
        if (checkInputs(inputRequired)) {
            botaoProx.disabled = false;
        } else {
            botaoProx.disabled = true;
        }
    })
})

botaoProx.addEventListener("click", (e)=> {
    e.preventDefault()
    window.location.href = "../pages/form-cadastro.html"
})
