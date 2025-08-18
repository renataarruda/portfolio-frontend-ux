# 📘 Anotações de Estudo – JavaScript

Este arquivo reúne conceitos e trechos importantes aprendidos durante meus estudos.

---

## 📝 Declarar variável com var ou let?

> "Nas últimas versões do JavaScript, passou-se a recomendar o uso de const ou let.  
> Uma variável criada a partir de um desses comandos possui um escopo local (de bloco),  
> o que pode evitar desperdício de memória -- pois, ao final do bloco, a variável deixa de existir.  
> Além disso, const e let impedem que um programa rode com alguns problemas no código,  
> como declarar duas variáveis com o mesmo nome no script."  
> *(IEPSEN, 2018, p. 31)*

---

## 🧩 Tipos primitivos

Para conferir o tipo de uma variável ou valor, deve-se usar o operador `typeof`.

```js
typeof 42;              // "number"
typeof "Renata";        // "string"
typeof true;            // "boolean"
typeof undefined;       // "undefined"
typeof {nome: "Ed"};    // "object"
typeof null;            // "object" (bug histórico do JS)
typeof (() => {});      // "function"

---

## 🔎 Diferenças entre null e undefined

### undefined
Significa que algo não foi definido.
Valor padrão de variáveis declaradas, mas não inicializadas.
Retornado quando você acessa uma propriedade que não existe em um objeto.
Não aponta para local nenhum na memória.

Exemplo:

let x;
console.log(x); // undefined

let obj = {};
console.log(obj.nome); // undefined

### null
Valor intencionalmente atribuído para indicar ausência de valor.
Não aponta para local nenhum na memória.
Devido a um bug, é considerado um "object" em JavaScript.

---

