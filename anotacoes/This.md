# This
- Aponta para o contexto que invoca
- const calculateArea = function() { return this.x * this. y }
- const rectangle = {
  x: 10, 
  y: 2,
  calculateArea
}

- __rectangle__.calculateArea() -> 20
- É necessário olhar sempre para quem invoca o this