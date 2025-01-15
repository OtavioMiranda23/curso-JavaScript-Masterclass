# Call Apply Bind
## Call e Apply
- Por meio das operações call e appy é possível incovar uma função passando o this por parâmetro
```
  const calculateArea = function () {
    return Math.PI * Math.pow(this.radius, 2);
  }
  const circle = {
    radius: 10,
    calculateArea
  }
  circle.calculateArea.call(circle);
  circle.calculateArea.apply(apply);
```

```
  const calculateArea = function (fn) {
    fn(return Math.PI * Math.pow(this.radius, 2));
  }
  const circle = {
    radius: 10,
    calculateArea
  }
  circle.calculateArea.call(circle, Math.round);
  circle.calculateArea.call(apply, [Math.ceil]);
```
- No apply, é necessário passar os parâmetros por []

## Bind
```
  const calculateArea = function () {
    return Math.PI * Math.pow(this.radius, 2);
  }
  const circle = {
    radius: 10,
    calculateArea
  }
  circle.calculateArea.bind(circle);
```