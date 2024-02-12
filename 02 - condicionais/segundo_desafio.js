/* 
Faça um programa para calcular o valor de uma viagem.

Tendo 5 variáveis:
1- Preço da gasolina;
2- Preço do etanol;
3- O tipo de combustivel;
4- Gasto médio do combustível do carro por KM;
5- Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar a viagem.
*/

const preco_etanol = 5.20
const preco_gasolina = 5.79;
const gasto_medio_km = 12;
const distancia_viajem_km = 150;

let preco_combustivel = 0;
let tipo_combustivel = 'Gasolina';

const litros_consumidos = distancia_viajem_km / gasto_medio_km;

if (tipo_combustivel === 'Etanol') {
    preco_combustivel = preco_etanol;
} else {
    preco_combustivel = preco_gasolina;
}
console.log('Tipo do combustivel:')
console.log(tipo_combustivel)

const valor_gasto = litros_consumidos * preco_combustivel;
console.log('Litros consumidos:')
console.log(litros_consumidos);
console.log('Valor gasto da viagem:')
console.log(valor_gasto.toFixed(2));


/*CASO UTILIZE VARIAVEL/CONST DENTRO DO BLOCO CONDICIONAL, DEVO IMPRIMI-LO DENTRO DA ESTRUTURA.

if (tipo_combustivel === 'Etanol') {
    const valorViagem = litros_consumidos * preco_etanol;
    console.log(valorViagem.toFixed(2));
} else {
    const valorViagem = litros_consumidos * preco_gasolina;
    console.log(valorViagem.toFixed(2));
}
*/

