# Symbol
- Primitivo, único e imutável, atuando como uma chave única em um objeto
- `Symbol("a") == Symbol("a")` -> false
  - `let regexp = /JavaScript|/;`
  - `regexp[Symbol.match] = false`;
  - `"/JavaScript/".startsWith(regexp)` -> true 