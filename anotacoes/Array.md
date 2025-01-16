# Array
- Se usar o operador `delete` no array, o length contará o item deletado.

## Mutator API
- No final do array:
  - .push insere
  - .pop remove
- No começo do array:
  - .unshift adiciona
  - .shift remove
- .splice: Remove, substitui ou adiciona um ou mais elemento em uma determinada posição
- .sort: Ordena os elemento de acordo com a função de ordenação:
  - Se a função de ordenação retornar -1  ou 0, os elementos se mantém.
  - Se volta 1, é invertido
  ```
  array.sort(function(a,b) {
    return a.year - b.year
  })
  ```
    ```
  array.sort(function(a,b) {
    return (a.name <= b.name) ? -1 : 1
    //ou
    return a.name.localeCompare(b.name);
  })
  ```
- .reverse: inverte ordem do array
- .fill: completa o array com o parâmetro fornecidido

## Iteration API
- .forEach()
- .filter() retorna novo array
- .find() retorna primeiro elemento
- .some() retorna booleano se __alguma__ condição for satisfeita
- .every() retorna booleano se __todas__ as condições forem satisfeitas
- .map() retorna novo array com base no retorno da função passada
- .reduce() retorna um valor com base no retorno da função passada por parâmetor
  - Ex:
  ```
    const frameworks = [
      {
        name: "Angular",
        contributors: 1548
      },
      {
        name: "Ember",
        contributors: 746
      },
      {
        name: "Vue",
        contributors: 240
      },
    ];
   const result = frameworks.reduce(function (total, framework) {
    return total + framework.contributors; 
   }, 0) //o valor do acc é passado como paramêtro
   result -> 2534
  ```

## Acessor API
- Imutável
- .indexOf() Retorna a posição do primeiro elemento encontrado
- .lastIndexOf() Retorna a posição do último elemento encontrado
- .includes()
- .concat(): Retorna novo array da concatenação de outros dois ou mais (retorna array, não matriz)
- .slice(): Retorna partes de um determinado array de acordo com a posição de início e fim
- .join(): Converte o array para String, juntando os elmento com base em um separador (semelhante ao .split())