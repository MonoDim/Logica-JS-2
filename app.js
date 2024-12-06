//Inicio
let limiteNumerico = 10;
let listaDeNumerosSorteados = [];
exibirMensagemInicial();

//Variaveis
let numero = gerarNumeroAleatorio();
let tentativas = 1;

//Funções
function exibirTexto(tag, texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto;
};

function verificarChute() {
    let palpite = document.querySelector('input').value;
    if (palpite == numero) {
        exibirTexto('h1', 'Acertou legal!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o numero em ${tentativas} ${palavraTentativa}!!`;
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        
        if (palpite > numero) {
            exibirTexto ('p', `O numero é menor que ${palpite}`);
        }else{
            exibirTexto ('p', `O numero é maior que ${palpite}`);
        };
        tentativas++;
        limparCampo();
    }; 
    
};

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()*limiteNumerico+1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == limiteNumerico) {
        listaDeNumerosSorteados = [];
    };

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    };
};

function limparCampo() {
    let palpite = document.querySelector('input');
    palpite.value = '';
};

function reiniciarJogo() {
    numero = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
};

function exibirMensagemInicial() {
    exibirTexto ('h1', 'Advinhe o numero aleatorio.');
    exibirTexto ('p', `Escolha um numero de 1 a ${limiteNumerico}.`);
}

//Textos Html
