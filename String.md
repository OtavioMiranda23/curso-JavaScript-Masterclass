# String
- Primitivo, imutável e padrão Unicode, codificado em UTF-16
- A função construtora é mais lenta e pode prejudicar a performance. Ex: `new String("abc")`

## Conflitos
- Se houver o uso de aspas duplas dentro de asplas duplas ou de uma simples dentro de simples, é necessário usar '\' para escapar. Ex: `'An object\'s`
- Para imprimir a \ é necessário usar duas `\\`

## String API
- indexOf(), lastIndexOf()
- toLowerCase, ToUpperCase()
- charAt() retorna o caractere na posição passada por parâmetro
- charCodeAt() retorna o código com base na posição passada por parâmetro
- fromCharCode() retorna um caractere  com base no código passado por parâmetro
- startsWith() e endsWith() returnam booleano verificando o começo ou fim da string, respectivamente 
- localeCompare() retorna -1 se a String passada por parametro for maior, 0 se igual e 1 se menor. Obs: funciona para acentos.
 - padStart() e padEnd(): completa a string com caracteres no inicio e no fim, respectivamente 

- slice(indexInicial, indexFinal - 1): Retorna uma parte da String que está invocando a função iniciando na posição passada no primeiro parâmetro até a posição final passada no segundo parâmetro, ou da posição no primeiro parâmetro até o fim caso o segundo parâmetro não seja informado.
- substring(): Similar ao slice, Não aceia valores negativos e permite inversão dos parâmetros

### Regex
- match() retorna partes da String com base na regex passada por parâmetro
- seach() retorna a primeira posição encontrada com base na regex passada por parâmetro
