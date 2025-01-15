# Function
## Function declaration
- `function sum() {}`
- Tem hoisting

## Function expression
- `const sum = function() {}`
- Não tem hoisting

## Primeira classe
- No JS, as funções são de primeira classe, podme ser atribuídas a uma variável, passadas por parâmetro ou retornadas de uma outra função
- `const calculator = function (fn) {
    return function (a, b) {
      return fn(a, b)
    }
  }`
- console.log(calculator(sum)(2, 2))

## Quantidade de parâmetros
- Se aceita mais parâmetros, o excedente será ignorado
- Se aceita menos, porém será completado com undefined

## Valores padrão
- É possível colocar valores padrões nos parâmetros da função

## Arguments
- Variável implícita que é possível acessar os parâmetros passados
- const sum = function () {
    console.log(arguments)
}
- sum(1, 2) -> { '0': 1, '1': 2 }

## Rest parameter
-  const sum = function (a, b, ...numbers) {
    console.log(numbers)
}
- sum(1, 2, 3, 4) -> [3, 4]
- Precisa ser sempre o último da lista