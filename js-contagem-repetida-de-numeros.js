//SOLUÇAO 1
let quantNum = gets();
let numeros = [];
for (i = 0; i < quantNum; i++) { /*Armazena os valores no array*/
    numeros[i] = gets();
}
contagemRepetida(numeros); /*chama a função*/

function contagemRepetida(num) {
    /*ordena os item em ordem crescentebb(sort).Remove itens repetidos e armazena no array (filter)*/
    semItensRepetidos = num.sort((a, b) => a - b).filter((elem, index, self) => {
        return index === self.indexOf(elem);
    });
    var cont = 0;
    for (i = 0; i < semItensRepetidos.length; i++) {
        var valor = semItensRepetidos[i]; /*armaze o item que será verificado no proxomo for()*/
        for (x = 0; x < num.length; x++) {
            if (semItensRepetidos[i] === num[x]) cont++; /*faz a contagem de quantas vezes o item aparece no for()*/
        }
        /*imprime o numero e a quantidade de vezes que apareceu no array, depois é feito leitura do proximo numero*/
        console.log(valor + ' aparece ' + cont + ' vez(es)');
        cont = 0;
    }
}

//SOLUCAO 2 - Utilizado Reduce()
quantNum = gets();
numeros = [];
while (quantNum--) numeros.push(gets()); /*Armazena os valores no array*/
contagemRepetida(numeros); /*chama a função*/

/* Ordena os item em ordem crescente(sort). Conta os numeros repetidos (reduce)
/* init - inicia como um array de objeto vazio
/* curret - é refente o primeiro elemento do array 'num'
/* (current in init) - verifica se o elemento do array 'num' tem dentro do array objeto 'init'
/* init[current]++  - o array 'init' na posição 'current' irá ser adicionado a soma de um numero para contabilizar, 
quantos numeros tem de um mesmo elemento. O 'current' é referente o valor do array 'init', e quando estiver no 
formato init[current] o 'current' se torna indice para o array 'init'.
/* for(var i in result) irá capturar o nome do indice do array result
/* result[i] - dentro do for, irá captura o valor do array result*/
function contagemRepetida(num) {
    result = num.sort((a, b) => a - b)
        .reduce((init, current) => {
            (current in init) ? init[current]++: init[current] = 1;
            return init;
        }, []); /*Inicia o acumulador (init) com um array vazio*/
    for (i in result) console.log(i + ' aparece ' + result[i] + ' vez(es)'); /*Imprime o resultado*/
}