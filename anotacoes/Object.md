# Object
- É uma coleção dinâmica de propriedades definidas por chaves (String ou Symbol) e valores de qualquer tipo
- É possível criar pela notação literal, função construtora ou método create da Object API `Object.create(null)`

## Criação em tempo de execução (es6)
- Chave computada: 
  - `const key1 = "title"`
  - `const book = {
    [key1]: "Clean Code"
  }` -> { title: 'Clean Code' }

## Atribuição por referência
- Chave computada: 
  - `const key1 = "title"`
  - `const book = {}`
  - `book[key1]: "Clean Code"` -> { title: 'Clean Code' }

## For in
- Usado para percorrer propriedades do objeto
  - Propriedades: `for (let key of book) {
    console.log(key)
  }`
  - Chave: `for (let key of book) {
    console.log(book[key])
  }`
  - Cópia das chave e propriedades: 
    - `const book1 = {...}`
    - `const book2 = {}`
    - `for (let key in book1) {
      book2[key] = book1[key]
    }`

## Undefined e  null
- O tipo `undefined` é retornado caso a chave não seja encontrada.
  - `const book = { title: "Clean Code" }`
  - `book.publisher` -> undefined
- `Null` siginifica ausência de valor, enquanto `undefined` demonstra a não existência da propridade.
- Operador `in` faz a consulta. Ex: `"title" in book `-> true
- `book.available = undefined` atribui o valor undefined para a propriedade, mas não a torna ausente.
  - Para excluir a propriedade é necessário utilizar o operador `delete`. Ex: `delete book.available`

## Comparação de Objetos
- A comparação dos objetos é feita pela sua refência. Portanto, caso dois objetos tenham as mesmas propriedades ainda serão considerados diferentes.
- Algorítimo de comparção
  - `let equal = true;`
  - `for (let key in book1) {
      if (book1[key] !== book2[key]) equal = false;
  }`
  - `for (let key in book2) {
      if (book1[key] !== book2[key]) equal = false;
  }`

## Object API
- .assign faz a cópdia das propriedades dos objetos passados por parâmetro para o objeto alvo, que é retornado
- .keys retorna as chaves das propriedades do objeto
- .values retorna os valores
- .entries retorna uma matriz com as chaves e valores
- .is compara os tipos de dado (semelhante ao ==)

### defineProperty
- configurable - Permite que a propriedade seja apagada
- enumerable - Permite enumeração
- value - Define o valor
- writable - Permite mudança de valor

### preventExtensions, seal e freeze
- preventExtensions: Impede que o objeto tenha novas propriedades, mas __permite modificar ou remover__ as propriedades existentes
- seal - Impede que o objeto tenha novas propriedades ou apague as existentes, mas __permite modificar__
- freeze - Impede que o objeto tenha novas propriedades, apague ou modifique
- prototipo fica imutável