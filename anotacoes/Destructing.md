# Destructing
## Valores padrões
```
const language = "C".split(";");
const [name = "-", author = "-", year = "-"] = language;
console.log(name, author, year) -> C - - 
```

## Atribuição de variável
- É possível atribuir variáveis na desestruturação com : após a chave`{name: n}`

## Passar como parâmetro
```
const sum = function({a, b}) {
  return a + b;
}
sum({a: 2, b: 2});
```