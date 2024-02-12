/* Faça um algoritmo que dado 3 notas de um aluno no sementre, calcule e imprima a média e a classificação 
conforme tabela abaixo:

Média (nota1 + nota2 +nota 3) / 3;

Média-> Menor que 5: Reprovado;
        Entre 5 e 7: Recuperação;
        Acima de 7: Aprovado.
*/

const nota1 = 7;
const nota2 = 8;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('Reprovado');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação');
} else {
    console.log('Aprovado');
}