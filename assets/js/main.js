
/*  1 primeiro foi feito o controle do eventos no formulario evitando o evento submit
    2 criaçao da funçao set resultado utilizando o querySelector para pegar id resultado da div utilizando o #(pega id) 
    3 setando funçao criaParagrafo para criar um paragrafo dentro da funçao resultado
    4 utilizando o queryselector para pegar os valores dentros dos inputs linha 14 e 15
    5 validaçao dos elementos que sao resgatados com o query selector linhas 18 e 19
    6 teste logico para ver se os valores vindos do usuario sao validos ou não.
    7 cirando constates para receber valores do calculo do imc
    8 criando funçao que calcula o imc
    9 crinado a faixa do imcs
    10 constante msg para definir a mensagem a ser exibida para o usuario
    11 setando parametros da função set resultado.
    12 configurando a função set resultado  para receber o paragrafo e para mudar o css de acordo com a respostas
    */

//controlando os eventos detro do formulario
const formulario = document.querySelector('#form');

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if (!peso) {
        setResultado("Peso invalido", false);
        return
    }

    if (!altura) {
        setResultado("Altura invalida", false);
        return
    }

    const imc = getImc(peso,altura);
    const faixaImc = getFaixaImc(imc);

    function getImc(peso, altura) {
        const imc = peso/(altura**2);
        return imc.toFixed(2);
    }
    
    const msg = `Seu IMC é ${imc} (${faixaImc}).`;

    setResultado(msg, true);

});

function getFaixaImc(imc) {
    const faixa = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3",];
    if (imc < 18.5) {
        return faixa[0];
    }
    if (imc <= 24.9) {
        return faixa[1];
    }
    if (imc <= 29.9){
        return faixa[2];
    }
    if (imc <= 34.9){
        return faixa[3];
    }
    if (imc <= 39.9){
        return faixa[4];
    }
    if (imc > 40){
        return faixa[5];
    }
}

function criaParagrafo() {
    const paragraph = document.createElement('p');
    return paragraph;
    
}


function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    
    const paragraph = criaParagrafo();
    if (isValid){
        paragraph.classList.add("paragrafo-resultado");
    }else{
        paragraph.classList.add("paragrafo-resultado2");
    }
    paragraph.innerHTML = msg;
    resultado.appendChild(paragraph);
}
