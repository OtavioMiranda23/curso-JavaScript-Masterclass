# WeakMap
- É um objeto, similar ao Map, que permite apenas chaves do tipo Object e matém as refẽncias de forma fraca, sendo volátil e não iterável

## Operações
- set(): Adiciona par de chave e valor
- has()
- get()
- delete()

## Objetivo
- Implementar uma coleção com referência fraca para que não se precise remover a referência dela e o garbage collector a remova. Pode ser usada como cache. 