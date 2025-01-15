# Instanceof 
- Verifica se um objeto foi criado por meio de uma determinada função construtora __analisando sua cadeia de protótipos__
```
date instanceof Date -> true
date instanceof Object -> true
```
## Typeof x Instanceof
- Typeof é o typo de dado
```
typeof date -> object
```

## Implementação instanceof
```
const _instanceof = function(obj, fn) {
  if(obj === fn.prototype) return true;
  if(obj === null) return false;
  return _intanceof(obj.__proto__, fn)
}
```