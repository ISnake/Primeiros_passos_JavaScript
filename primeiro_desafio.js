/* 
Faça um programa para calcular o valor de uma viagem.

Tendo 3 variáveis:
1- Preço do combustível;
2- Gasto médio do combustível do carro por KM;
3- Distância em KM da viagem;
*/

const preco_combustivel = 5.79;
const gasto_medio_km = 12;
const distancia_viajem_km = 150;

const litros_consumidos = distancia_viajem_km / gasto_medio_km;
const valor_gasto = litros_consumidos * preco_combustivel;
console.log('Litros consumidos:')
console.log(litros_consumidos);
console.log('Valor gasto da viagem:')
console.log(valor_gasto.toFixed(2));
