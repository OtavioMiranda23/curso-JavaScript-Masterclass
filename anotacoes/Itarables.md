# Iterables e Iterators
- São convenções implementadas por Arrays, Maps, Sets e String que os tornam iteráveis por meio de um protocolo de iteração
- Todo Iterable tem uma propriedade de chave Symbol.iterator que define o protocolo de iteração para o objeto:
```
  const letras = ['a', 'b', 'c']
  const iterator = letras[Symbol.iterator]();
  iterator.next() -> { value: 'Fortan', done: false }
```

## Spread Operator
```
  const letras = ['a', 'b', 'c']
  const nums = [1, 2, 3]
  const numsLetras = [...letras, ...nums] -> ['a', 'b', 'c', 1, 2, 3]
```

## Criar um iterable
```
function createIterable(...array) {
  return {
    [Symbol.iterator]() {
        let i = 0;
        return {
          next() {
            if (i < array.length) {
              return {
                value: array[i++],
                done: false
              }
            } else {
              return { 
                value: undefined,
                done: true,
              }
            }
          }
        };
    }
  }

}
const iterable = createIterable("Fortran", "Lisp", "Cobol")
iterable.next()
```