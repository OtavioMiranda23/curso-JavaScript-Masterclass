# Heranca
- No JS a herança se dá entre objetos e não entre classes, é baseasda em protótipos
- A propriedade \_\_proto__ é uma refência para o protótipo do objeto 
  - const functionalLanguage = { paradigm: "Functional }
  - const scheme = {
    name: "Scheme,
    \_\_proto__: functionalLanguage
  }
  - const javascript = {
    name: "JavaScript,
    \_\_proto__: functionalLanguage
  }
  - A propriedade só exibe as propriedades do próprio objeto, portanto paragidm não é exibido por estar em outro objeto.
  - Caso se consulte javascript.paradigm irá aparacer.
  - Quando se consulta uma propriedade dessa forma e ela não há no objeto, sua consulta sobre para o objeto pai. Por padrão todos os objetos são Object no JS. Assim, functionalLanguage aponta para object.
  - Quando não se encontra a referência, retorna-se undefined.

## HasOwnProperty
- O método hasOwnProperty pode ser utilizado para determinar se uma propriedade pertece ao objeto
  - for (let key in scheme) {
    scheme.hasOwnProperty(key) -> paradigm será false
  }

## Outras formas de definir os protótipos
- Os métodos Object.setPrototypeOf e Object.getPrototypeOf permitem a interação com o protótipo do objeto.
  - const functionalLanguage = { paradigm: "Functional }
  - const scheme = {
    name: "Scheme,
    \_\_proto__: functionalLanguage
  }
  - Object.setPrototypeOf(schema, functionalLanguage)
  - const javascript = {
    name: "JavaScript,
    \_\_proto__: functionalLanguage
  }
  - Object.setPrototypeOf(schema, functionalLanguage)
- Object.create(null) encerra a cadeia de protótipo.
- Caso a mesma propriedade exista no objeto e no seu protótipo, a propriedade do próprio objeto é retornada, faznedo sombra à propriedade do protótipo