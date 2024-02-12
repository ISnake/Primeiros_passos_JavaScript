/* 
Calcule o que deve ser pago por um produto, considerando preço da etiqueta e forma de pagamento;

Condição de pagamento:
    1- À vista Debito, 10 % de desconto;
    2- À vista no dinheiro ou PIX, 15 % de desconto;
    3- Em 2x, preço normal
    4- Acima de duas vezes, preço normal + 10 % de juros;
*/

const valor_produto = 100;
const formaDePagamento = 1;

if (formaDePagamento === 1){   
    console.log(valor_produto - (valor_produto * 0.10));
} else if (formaDePagamento === 2){
    console.log(valor_produto - (valor_produto * 0.15));
} else if (formaDePagamento === 3){
    console.log(valor_produto);
} else if(formaDePagamento === 4){
    console.log(valor_produto + (valor_produto * 0.10));
} else {
    console.log('Digite uma forma de pagamento válida.')
}
