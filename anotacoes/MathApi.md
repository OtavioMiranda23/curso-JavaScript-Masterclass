# Math API
- abs: Converte sinal para positivo
- ceil e floor: arredonda para cima e baixo, respectivamente
- round: Arredonda para cima se o decimal for de 5 a 9 e para baixo se 0 a 4.
- sign: Retorna 1 se positivo e 0 para negativo
- trunc: Elimina a parte decimal do número, tornando-o inteiro
- min e max: Menor e maior número dados os parâmetros, respectivamente
- random: Número Randômico entre 0 e 1, excluindo o 1.

## Nan
- acontece onde não é possível determinar o resultado em uma operação matemática.
- Não interrompe o fluxo da aplicação quando acontece
Ex: `10 * "a"`, `0/0`
- Verificação correta é isNaN(Nan)

