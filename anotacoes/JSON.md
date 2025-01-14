# JSON
- É um formato de intercâmbio de dados

## Tipos de dados
- Number, String, Boolean, Object, Array, null

## JSON.stringify
- Converte um determinado tipo de dado para JSON
- Json é uma string, começa com àspas simples.
  - `JSON.stringify("JavaScript")` -> '"JavaScript"'

## JSON.parse
- Converte JSON para um determinado tipo de dado

## Possibilidades
- Comparar objetos com o método .stringify, pois é comparado duas strings:
  - const book1 = {...}
  - const book2 = {...}
  - JSON.stringify(book1) === JSON.stringify(book2)
- Clonar objetos sem compartilhar o mesmo endereço de memória: 
  - const book3 = JSON.parse(JSON.stringify(book2))