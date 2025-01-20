# Promises
- As promises são objetos responsáveis por modelar comportamento assíncrono, permitindo o seu tratamento de uma forma mais fácil e direta
```
function sum(a, b, callback) {
  setTimeout(function () {
    callback(a + b)
  }, 1000)
  return a + b;
}

const result = sum(2, 2, funtion(result) {
  console.log(result);
}) 
```
```
function sum(a, b, callback) {
  setTimeout(function () {
    callback(a + b);
  }, 1000)
}

sum(2, 2, function(a) {
  sum(4, 4, function (b) {
    sum(a, b, function(result) {
      console.log(result)
    })
  })
})
```
- Para criar uma promise basta instanciá-la, executando a função resolve em caso de sucesso, sendo tratato por meio de then
```
function sum(a, b) {
  return new Promise(resolve, reject) {
    if (!a || !b) return reject('invalid input');
    setTimeout(function () {
      resolve(a + b)
    }, 1000);

  }
}

sum(2, 2).then(function (a) {
  sum(4, 4).then(function (b) {
    sum(a, b).then(function(result) {
      console.log(result)
    }).catch( function(e) {
      console.log(e)
    })
  })
})
```
- É possível centralizar o tratamento de uma promise encadeando seus retornos
```
function sum(a, b) {
  return new Promise(resolve, reject) {
    if (!a || !b) return reject('invalid input');
    setTimeout(function () {
      resolve(a + b)
    }, 1000);

  }
}

sum(2, 2).then(function (a) {
  return sum(4, 4).then(function (b) {
    return sum(a, b).then(function(result) {
      console.log(result)
    })
  })
}).catch(function (e) {
  console.log(e)
})
```
