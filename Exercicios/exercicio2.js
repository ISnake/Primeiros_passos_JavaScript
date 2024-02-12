/* 
IMC = PESO / (altura * altura)

Condição do adulto:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25  Peso normal;
- Entre 25 e 30  Acima do Peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade grave;
*/

const peso = 66.7;
const altura = 1.78;
const imc = peso / Math.pow(altura, 2);

if (imc < 18.5) {
    console.log('Abaixo do peseo')
} else if (imc >= 18.5 && imc <= 25) {
    console.log('Peso normal')
} else if (imc >= 25.1 && imc <= 30) {
    console.log('Acima do peso')
} else if (imc >= 30.1 && imc <= 40) {
    console.loog('Obeso')
} else {
    console.log('Obesidade grave')
}