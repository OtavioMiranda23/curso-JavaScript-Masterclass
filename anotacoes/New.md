# New
## Função fábrica
- Retorna um novo objeto após ser invocada diretamente
```
const personPrototype = {
  getAge() {
      return (new Date()).getFullYear() - this.year;
    }
}
const createPerson = function (name, city, year) {
  const person = {
    name, 
    city,
    year,
  }
  Object.setPrototypeOf(person, personPrototype)
  return person;
}
```
## Função Construtora 
- Retorna um novo objeto ao ser invocada por meio do operador new
```
const _new = function (fn, ...params) {
  const obj = {};
  Object.setPrototrypeOf(obj, fn.prototype)
  fn.apply(obj, params)
  return obj;
};

const Person = function(name, city, year) {
  this.name = name;
  this.city = city;
  this.year = year;
};

Person.prototype.getAge = function() {
      return (new Date()).getFullYear() - this.year;
    }
const person1 = _new(Person, "Lomus", "Helsinki", 1955);
```
- Toda função tem uma propriedade chamada prototype, que é vinculada ao \_\_proto__ do objeto criado pelo operador new