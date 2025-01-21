# Async/await
- Facilita a interação com chamadas assíncronas, aguardando o retorno de uma determinada promise
```
function sum(a, b) {
  new Promise((resolve, reject) => {
    if (!a || !b) return reject("Invalid input")
    setTimeout(() => {
      resolve(a + b);
    }, 1000)
  })
}
(async function() {
  try {
    const a = await sum(2, 2);
    const b = await sum(3, 3);
    const result = await sum(a, b)
  } catch (e) {
    console.log(e)
  }
})()

```

## É possível iterar usando async await?
```
function sum(a, b) {
  new Promise((resolve, reject) => {
    if (!a || !b) return reject("Invalid input")
    setTimeout(() => {
      resolve(a + b);
    }, 1000)
  })
}
(async function() {
  try {
    const functions = [
      sum(2, 2)
      sum(3, 3)
    ];
    const results = [];
    for (let fn of functions) { -> usar o for of
      const result = await fn;
      results.push(result)
    }
    const [a, b] = results;
    const result = await sum(a, b)
  } catch (e) {
    console.log(e)
  }
})()

```

## É possível utilizar o bloco for-await-of para iterar sobre um iterator de promises
- Implementado no es9. Node só suporta com fla --harmony-async-iteration
```
function sum(a, b) {
  new Promise((resolve, reject) => {
    if (!a || !b) return reject("Invalid input")
    setTimeout(() => {
      resolve(a + b);
    }, 1000)
  })
}
(async function() {
  try {
    const functions = [
      sum(2, 2)
      sum(3, 3)
    ];
    const results = [];
    for await (let result of functions) { -> usar o for of
      results.push(result)
    }
    const [a, b] = results;
    const result = await sum(a, b)
  } catch (e) {
    console.log(e)
  }
})()

```