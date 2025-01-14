# Regex
- Pode-se escrever entre duas // ou instanciar a classe `RegExp()`
- `typeof /john@gmail.com/` -> 'object'
- .test(string) testa regex em string retornando booleano
- .exec(string) retorna array com detalhes. Volta null quando não acha a string.
## Metacaracteres
- `\` A barra é utilizada antes de caracteres especiais para escapar de caracteres especiais
- `^` Inicia com um determinado caractere
- `$` Finaliza com um determinado caractere

## Grupos de caracteres
- [abc] , nessa caso a, b e c
- [^abc] Não aceita qualquer caractere dentro do grupo
- [0-9] Aceita qualquer caractere entre 0 e 9
- [^0-9] Não aceita qualquer caractere entre 0 e 9

## Quantificadores
- Os quantificadores podem ser aplicados a caracteres, grupos, conjuntos ou metacaracteres
- {n} Quantifica um número específico
- {n,} Quantifica um número mínimo
- {n,m} Quantifica um número mínimo e máximo
- ? Zero ou um
- \* Zero ou mais
- \+ Um ou mais

## Metacaracteres
- \w Representa [a-zA-Z0-9_]
- \W Representa [^a-zA-Z0-9_]
- \d Representa [0-9]
- \D Representa [^0-9]
- \s Representa espaço em branco
- \S Representa um não espaço em branco
- \n Representa quebra de linha
- \t Representa tab

- Ex: `/^\w+@\w+(\.\w{2,3})+$/`
   - Exige no começo da string mais que uma letra ou número, seguido de @, depois outro conjunto de letra e número, depois um . com uma conjunto de letra e numero de 2 a 3 letras por mais de uma vez no final

## Grupos de Separação
- Envolver os blocos com parênteses retorna os grupos separadamente com o metodo exec. Ex: `/(^\w+)@(\w+)(\.\w{2,3})+$/`
