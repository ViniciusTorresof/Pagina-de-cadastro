export default function cadastro(){};

const erroCadastral = document.querySelector(".erro");
function preencherCep (endereco) {
    document.querySelector(".estado").value = endereco.uf;
    document.querySelector(".cidade").value = endereco.localidade;
    document.querySelector(".bairro").value = endereco.bairro
    document.querySelector(".endereco").value = endereco.logradouro;
}
const pesquisarCep = async() => {
    const cep = document.querySelector(".cep");
    const apiURL = `https://viacep.com.br/ws/${cep.value}/json/`;

    let dados = await fetch(apiURL);
    const endereco = await dados.json()
    if(endereco.hasOwnProperty('erro')) {
        cep.classList.add("erro-input")
        erroCadastral.innerHTML = `<i class="fa-solid fa-circle-exclamation icone"></i> O Cep é inválido.`
    } else {
        cep.classList.remove("erro-input")
        erroCadastral.innerHTML = "";
        preencherCep(endereco);
    }
}
document.querySelector(".cep").addEventListener("keyup", pesquisarCep);

const cpfInput = document.querySelector("#cpf");
const telefone = document.querySelector("#telefone");
cpfInput.addEventListener("keyup", ()=> { 
    const regexCpf = /^(\d{3}).?(\d{3}).?(\d{3})-?(\d{2})$/;
    cpfInput.value = cpfInput.value.replace(regexCpf, "$1.$2.$3-$4")

    if(cpfInput.value.length < 11 || cpfInput.value.length > 14) {
        cpfInput.classList.add("erro-input");
    } else {
        cpfInput.classList.remove("erro-input");
    }

    if (cpfInput.value === "") {
        erroCadastral.innerHTML = `<i class="fa-solid fa-circle-exclamation icone"></i> Insira um CPF`
    } else {
        erroCadastral.innerHTML = "";
    }
})

telefone.addEventListener("keyup", ()=> {
    if(telefone.value.length === 1) {
        telefone.value = "(" + telefone.value
    } else if (telefone.value.length === 3) {
        telefone.value += ")" + " "
    } else if (telefone.value.length === 10) {
        telefone.value += "-"
    }

    if(telefone.value === "") {
        telefone.classList.add("erro-input");
        erroCadastral.innerHTML = `<i class="fa-solid fa-circle-exclamation icone"></i> Insira seu número`
    } else {
        telefone.classList.remove("erro-input");
        erroCadastral.innerHTML = "";
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
const botaoProx = document.querySelector(".botao-prox");
const inputsCadastro = document.querySelectorAll("input");
inputsCadastro.forEach((input)=> {
    input.addEventListener("keyup", ()=> {
        if (checkInputs(inputsCadastro)) {
            botaoProx.disabled = false;
        } else {
            botaoProx.disabled = true;
        }
    })
})

botaoProx.addEventListener("click", (e)=> {
    e.preventDefault()
    window.location.href = "../pages/form-pagamento.html"
})

const botaoVoltar = document.querySelector(".botao-voltar");
botaoVoltar.addEventListener("click", (e)=>{
    e.preventDefault();
    window.location.href = "../index.html"
})
