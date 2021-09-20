/**
 * Dado um array de inteiros, ache o menor e o maior valor nele armazenado
 */
const array = [-10, -50, -40, -1, -4, 10, 345, 23, 1, -12];

// code
function achaMaiorValor(arrayDeInteiros) {
    let maiorValor = arrayDeInteiros[0];

    for (let i = 0; i < arrayDeInteiros.length; i++) {
        const elemento = arrayDeInteiros[i];
        if(elemento > maiorValor) {
            maiorValor = elemento
        }
    }

    return maiorValor;
}


function achaMenorValor(arrayDeInteiros) {
    let menorValor = arrayDeInteiros[0];

    for (let i = 0; i < arrayDeInteiros.length; i++) {
        const elemento = arrayDeInteiros[i];
        if(elemento < menorValor) {
            menorValor = elemento
        }
    }

    return menorValor;
}



console.log('Maior valor ', achaMaiorValor(array))
console.log('Menor valor ', achaMenorValor(array))
