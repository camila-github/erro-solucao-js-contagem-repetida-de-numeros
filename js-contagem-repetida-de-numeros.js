//SOLUCAO 1 - Utilizado Reduce()
const contagemDeNumerosRepetidos = (arrNum) => {
    const arrResultado = arrNum.sort((a, b) => a - b)
                        .reduce((init, current) => {
                            (current in init) ? init[current]++ : init[current] = 1;
                            return init;
                        }, []);
    return arrResultado;
}; 

const imprimirResultado = (arrResultado) => {
    for (let i in arrResultado) console.log(i + ' aparece ' + arrResultado[i] + ' vez(es)');
}

(function quantValoresLidos(num){
    let arrayNumeros = [];
    while (num--) arrayNumeros.push(gets()); 
    imprimirResultado(contagemDeNumerosRepetidos(arrayNumeros));
})(gets());



//SOLUCAO 2 - Utilizado Reduce()
quantNum = gets();
numeros = [];
while (quantNum--) numeros.push(gets()); 
contagemRepetida(numeros);

function contagemRepetida(num) {
    result = num.sort((a, b) => a - b)
        .reduce((init, current) => {
            (current in init) ? init[current]++: init[current] = 1;
            return init;
        }, []);
    for (i in result) console.log(i + ' aparece ' + result[i] + ' vez(es)');
}



//SOLUCAO 3
let quantNum = gets();
let numeros = [];

for (i = 0; i < quantNum; i++) {
    numeros[i] = gets();
}

contagemRepetida(numeros);

function contagemRepetida(num) {
    semItensRepetidos = num.sort((a, b) => a - b).filter((elem, index, self) => {
        return index === self.indexOf(elem);
    });
    var cont = 0;
    for (i = 0; i < semItensRepetidos.length; i++) {
        var valor = semItensRepetidos[i]; 
        for (x = 0; x < num.length; x++) {
            if (semItensRepetidos[i] === num[x]) cont++; 
        }
        console.log(valor + ' aparece ' + cont + ' vez(es)');
        cont = 0;
    }
}