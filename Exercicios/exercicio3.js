/* 
Calcule o que deve ser pago por um produto, considerando preço da etiqueta e forma de pagamento;

Condição de pagamento:
- À vista Debito, 10 % de desconto;
- À vista no dinheiro ou PIX, 15 % de desconto;
- Em 2x, preço normal
- Acima de duas vezes, preço normal + 10 % de juros;
*/

const valor_produto = 100;
const pagamento_debito = valor_produto - (valor_produto * 0.10);
const pagamento_avista = valor_produto - (valor_produto * 0.15);
const pagamento_2x = valor_produto;
const pagamento_acima2x = valor_produto + (valor_produto * 0.10);

if (valor_produto === valor_produto){
    console.log('Pagamento em duas vezes')
} else if (valor_ valor_produto)