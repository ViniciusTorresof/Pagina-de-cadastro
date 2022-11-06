export default function pagamento(){}

const inputNumeroCartao = document.querySelector("#numero-cartao");
const inputNomeCartao = document.querySelector("#nome-titular");
const inputDataCartao = document.querySelector("#data-cartao");
const inputCodigoCartao = document.querySelector("#codigo-cartao");
const erroMensagem = document.querySelector(".erro");

const numeroCard = document.querySelector(".numero-card");
const nomeCard = document.querySelector(".nome-card");
const dataCard = document.querySelector(".data-expiracao");
const codigoCard = document.querySelector(".codigo-cvc");

inputNumeroCartao.addEventListener("keyup", ()=> {
    inputNumeroCartao.value = inputNumeroCartao.value.replace(/[^0-9\s?]/, "")
    if(inputNumeroCartao.value === "") {
        inputNumeroCartao.classList.add("erro-input");
        erroMensagem.innerHTML = `<i class="fa-solid fa-circle-exclamation icone"></i> Insira o número do cartão`
    } else {
        inputNumeroCartao.classList.remove("erro-input");
        erroMensagem.innerHTML = "";
    }

    if(inputNumeroCartao.value.length === 4 || inputNumeroCartao.value.length === 9 || inputNumeroCartao.value.length === 14) {
        inputNumeroCartao.value += " "
    } 

    numeroCard.innerHTML = `${inputNumeroCartao.value}` 
    if(numeroCard.innerHTML === "") {
        numeroCard.innerHTML = "1234 5678 9123 4567"
    }
})

inputNomeCartao.addEventListener("keyup", ()=> {
    inputNomeCartao.value = inputNomeCartao.value.toUpperCase();
    nomeCard.innerHTML = `${inputNomeCartao.value}`;
    
    if(nomeCard.innerHTML === "") {
        nomeCard.innerHTML = "Seu nome"
    }
})

inputDataCartao.addEventListener("keyup", ()=> {
    inputDataCartao.value = inputDataCartao.value.replace(/[^0-9/?]/, "");
    if(inputDataCartao.value === "") {
        inputDataCartao.classList.add("erro-input");
        erroMensagem.innerHTML = `<i class="fa-solid fa-circle-exclamation icone"></i> Insira a data do cartão`
    } else {
        inputDataCartao.classList.remove("erro-input");
        erroMensagem.innerHTML = "";
    }

    if(inputDataCartao.value.length === 2) {
        inputDataCartao.value += "/"
    } 
    
    dataCard.innerHTML = `${inputDataCartao.value}`        
    if(dataCard.innerHTML === "") {
        dataCard.innerHTML = "12/34"
    }
});

inputCodigoCartao.addEventListener("keyup", ()=> {
    inputCodigoCartao.value = inputCodigoCartao.value.replace(/[^0-9]/, "");
    if(inputCodigoCartao.value === "") {
        inputCodigoCartao.classList.add("erro-input");
        erroMensagem.innerHTML = `<i class="fa-solid fa-circle-exclamation icone"></i> Insira a CVC do cartão`
    } else {
        inputCodigoCartao.classList.remove("erro-input");
        erroMensagem.innerHTML = "";
    }

    codigoCard.innerHTML = `${inputCodigoCartao.value}`      
    if(codigoCard.innerHTML === "") {
        codigoCard.innerHTML = "1234"
    }
})

function checkInputs(inputs) {
    let inputPreenchido = true;
    inputs.forEach((input) => {
        if(input.value === "") {
            inputPreenchido = false
        }
    })
    return inputPreenchido
}

const botaoFinalizar = document.querySelector(".botao-prox"); 
const inputsPagamento = document.querySelectorAll("input");
inputsPagamento.forEach((input)=> {
    input.addEventListener("keyup", ()=> {
        if (checkInputs(inputsPagamento)) {
            botaoFinalizar.disabled = false;
        } else {
            botaoFinalizar.disabled = true;
        }
    })
})

botaoFinalizar.addEventListener("click", (e)=> {
    e.preventDefault()
    window.location.href = "../pages/conclusao.html"
})

const botaoVoltar = document.querySelector(".botao-voltar");
botaoVoltar.addEventListener("click", (e)=>{
    e.preventDefault();
    window.location.href = "../pages/form-cadastro.html"
})

