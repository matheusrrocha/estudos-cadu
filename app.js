/*
igual ->  ==
atribuição -> =
diferente -> !=
multiplicação -> 
divisão -> *
soma -> +
substração -> -
resta da divisão -> %
maior -> >
menor -> <
maior igual -> >=
menor igual -> <=

variaveis
condicionais
loops
funcoes
*/

//variaveis

const tamanhosDisponiveis = ["P", "M", "G", "GG", "XL", "XXL", "XXXXL", "P", "M", "G", "GG", "XL", "XXL", "XXXXL"];

let nome = "Camiseta La case de papel";
let descricao = "sdljhk kjhaskjh kjashdkjh kjashdkjh";
let foto = 'https://rockcontent.com/br/wp-content/uploads/sites/2/2018/01/Descri%C3%A7%C3%A3o-de-produto-no-e-commerce.png';
let cor = "preta";
let tamanho = tamanhosDisponiveis[1];
const variacao = 20;
const variacaoMenor = 10;
let qty = 10;
let preco = 100;



let teste = qty * 2;

if(tamanho == "P" && preco >= 150) {
    preco = preco - (preco * (variacao / 100));
} else if(tamanho == "M" ) {
    preco = preco - (preco * (15 / 100));
} else if(tamanho == "G" ) {
    preco = preco - (preco * (2 / 100));
} else {
    preco = preco - (preco * (variacaoMenor / 100));
}


let selectTamanhos = document.getElementById('selectTamanhos')
for(let i = 0; i < tamanhosDisponiveis.length; i++) {
    selectTamanhos.innerHTML += `<option value="${tamanhosDisponiveis[i]}">${tamanhosDisponiveis[i]}</option>`;
}


let listaprodutos = document.getElementById('listaprodutos');

listaprodutos.innerHTML = `
    <li>
        <h3>${nome}</h3>
        <p>${descricao}</p>
        <p>${preco}</p>
        <p>
            <img src="${foto}" />
        </p>
    </li>
`;























































