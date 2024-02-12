/* 
Calcule o que deve ser pago por um produto, considerando preço da etiqueta e forma de pagamento;

Condição de pagamento:
    1- À vista Debito, 10 % de desconto;
    2- À vista no dinheiro ou PIX, 15 % de desconto;
    3- Em 2x, preço normal
    4- Acima de duas vezes, preço normal + 10 % de juros;
*/

const valor_produto = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1){
    const pagamento_debito = valor_produto - (valor_produto * 0.10);
    console.log(pagamento_debito);
} else if (formaDePagamento === 2){
    const pagamento_avista = valor_produto - (valor_produto * 0.15);
    console.log(pagamento_avista);
} else if (formaDePagamento === 3){
    const pagamento_2x = valor_produto;
    console.log(pagamento_2x);
} else if(formaDePagamento === 4){
    const pagamento_acima2x = valor_produto + (valor_produto * 0.10);
    console.log(pagamento_acima2x);
} else {
    console.log('Digite uma forma de pagamento válida')
}