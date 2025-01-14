# Tipos de dados
## Primitivos
- Os tipos se dividem entre primitivos e objetos. 
- Primitivos são imutáveis, sendo 6: Number, string, boolean, symbol, null (`typeof null` mostra 'object'), undefined
- Esses tipos sofrem o processo de autoboxing, como um wrapper, que nos fornece a api do objeto. Ex: `(10).toFixed(2)` -> '10.00'. 
`('Javascript').replace('a', 4)` -> 'J4vaScript'
## Objetos
- Os objetos são valores que representam uma referência em memória que pode ser alterada
- As funções possuem propriedades próprias
- Em `typeof [1,2,3]` -> 'object' a instância é de array, mas o tipo é 'object'
- É preciso diferenciar o tipo de dado do tipo de instância

# Number
- Representado pelo padrão IEEE 754 de 64bits
## Sistemas de numeração
- Decimal, hexadecimal, binário e octal
- Decimal, de base 10, inicia com 1 a 9, seguido de 0 a 9 com ou sem ponto, indicando se é inteiro ou decimal
- Hexadecimal, de base 16, inicia com 0x ou 0X, seguido por numéro de 0 a 9 e letras de A a F. Ex: 7,8,9,A,B,C, ..., E, F, 10, 11, ...., 19, 1A, 1B, 1C ...
- Binário, de base 2, inicia com 0b ou 0B, seguido por 0 a 1. Ex com 6 bits: 000000, 000001, 00010, 000011, 000100, 000101, 000110, 000111, ...
- Octal, base 8, deve iniciar com 0, 0o ou 0O, seguido por números de 0 a 7. Ex: 6, 7, 10, 11, 12, ..., 17, 20, 21
### No JS
- new Number(10) é igual a (10) para o processo de autoboxing
- (123.4).toExponential(10) -> 1.2340000000e+2. Voltar a vírgula para o início e cada vez que voltar representar no expoente.
- .toFixed(n) N casas após a vírgula.
- .toPrecision(n) Completar o número de casas até n.

# Operadores Numéricos
- Pré incremento `++1` incrementa primeiro e retorna depois, já no pós incremento `1++` retorna e incrementa depois

## Operadores Binários
- São: |, &, ^, ~, <<, >> e >>>
- (OR) |: `4 | 3`-> 7 
    - (4).toString(2) -> '100' (Converte para binário)
    - (3).toString(2) -> '11'
    - (3).toString(2).padStart(32, 0) -> 00000000000000000000000000000100 (todas as operações são feitas em 32 bits)  
    - (4).toString(2).padStart(32, 0) -> 00000000000000000000000000000011
    100
    011
    111 -> 7
- (AND) &: `3 | 1` -> 1
  - 011
  - 001
  - 001 -> 1
- (XOR) (Somente 1 com 0 dá 1) ^: 5 ^ 2 -> 7
  - 101
  - 010
  - 111 -> 7
- (NOT) ~x Inverte todos os bits
- y << x Desloca para esquerda multiplicando por 2 x vezes. 4 << 2 -> 16
  - 00100 -> 4
  - 10000 -> 16
- y >> x Desloca para a direita, dividindo por 2 x vezes. 128 >> 1 -> 64
- x >>> 1 rotação que leva o sinal junto

# Conversão Numérica
- toString converte para bases numéricas. Ex: `(010).toString(2)`
- parseInt e parseFloat aceitam como segundo parâmetro a base numérica