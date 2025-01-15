## Getters e Setters
- Aponta para o contexto que invoca
- const rectangle = {
-  set x() { this._x = 10 }, 
-  set y() { this._y =  2 },
-  get calculateArea() {
     return this.x * this. y
  }
}