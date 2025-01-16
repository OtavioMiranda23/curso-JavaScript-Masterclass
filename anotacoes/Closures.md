# Closures
- Toda função permite utilizacação de variável que não foram declaradas e nem passadas por parâmetro
- O problema é que como as funções são de primeira classe, pode se existir uma ambiguidade. Isso foi resolvido com closure
- Closure é uma função com scope chain estático que é definida no em que a função é criada. Por isso, todas as funções de js são closures
```
const v1 = 10;
function fn1() {
  console.log(v1);
}
function fn2(fn1) {
  const v1 = 100;
  fn1();
}
fn2(fn1); -> 10
```
- O retorno é 10 porque no momento da criação de fn1 só existia v1 = 10;

```
const obj1 = {};
for (var v1 = 0; v1 < 3; v1++) {
  obj1[v1] = function () {
    console.log(v1); Não guarda o valor v1, mas sim a referência;
  }
}
obj1[0](); -> 3
obj1[1](); -> 3
obj1[2](); -> 3
```
- A saída é 3 porque no momento em que se invoca o loop já acabou.
- Correção:
```
const obj1 = {};
for (var v1 = 0; v1 < 3; v1++) {
  obj1[v1] = (function (v2) {
    return function () {
      console.log(v2);  
    }
  })(v1)
}
obj1[0](); -> 0
obj1[1](); -> 1
obj1[2](); -> 2
```
- É criado um novo escopo a cada execução, prendendo o escopo do valor.
- Exemplo com bind:
```
const obj1 = {};
for (var v1 = 0; v1 < 3; v1++) {
  obj1[v1] = (function (v2) {
    return function () {
      console.log(this.v2);  
    }
  }).bind({v2: v1})
}
obj1[0](); -> 0
obj1[1](); -> 1
obj1[2](); -> 2
```