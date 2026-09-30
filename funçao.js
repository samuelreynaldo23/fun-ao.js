// 1- Crie uma função que receba um número e retorne o dobro.
function funçaoemdobro(numero, dobro){
    return numero * dobro 
}
console.log (funçaoemdobro(10,2))


// 2- Crie uma função que receba um número e retorne o triplo.
function funçaoemtriplo (numero, triplo){
    return numero * triplo 
}
console.log (funçaoemtriplo(20,3))


// 3- Crie uma função que receba dois números e retorne a soma.
function somar (a, b) {

return a + b; 
}

console.log (somar(2,15))

// 4- Crie uma função que receba dois números e retorne a multiplicação.
function multiplicação (a, b) {

return a * b; 
}

console.log (multiplicação(11,2))
// 5- Crie uma função que receba um salário e calcule aumento de 10%. 
function aumentoSalario (valorSalario, aumento) {
        return valorSalario + (valorSalario * 0.10);
    }

console.log (aumentoSalario (100));


// 6 - Crie uma função que imprima números de 1 até 10.
    function imprimirdeumatedez(){
        for (let i = 1; i <= 10; i++){
            console.log(i);
        }
    }
    imprimirdeumatedez();
// 7- Crie uma função que some todos os números até 10.
function somaratedez() {
    let soma = 0; 

    for (let i = 1; i <= 10; i++){
        soma += i;
    }          
    return soma;
}