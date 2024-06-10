# Guia sobre Funções em JavaScript

## Introdução

Funções são blocos de código que realizam tarefas específicas e podem ser reutilizadas em diferentes partes de um programa. Elas são essenciais para modularização, delegação e reaproveitamento de código. Este guia explora as funções em JavaScript, destacando suas vantagens e características, e fornece exemplos práticos de interação com HTML e páginas web.

## Vantagens das Funções

-   **Modularização:** Dividir o código em partes independentes e logicamente coerentes.
-   **Reutilização:** Reutilizar blocos de código em diferentes partes do programa.
-   **Delegação:** Delegar tarefas específicas a funções para melhorar a organização e a legibilidade do código.

## Definição de Funções

A sintaxe básica para definir uma função em JavaScript é a seguinte:

```javascript
function nomeDaFuncao() {
  // Código a ser executado
}
``` 

### Exemplo de Função Simples

```javascript
function saudacao() {
  console.log("Olá, mundo!");
}

saudacao(); // Chama a função saudacao` 
```


### Funções com Parâmetros

Funções podem receber parâmetros que são valores passados para a função quando ela é chamada.

```javascript
function saudacao(nome) {
  console.log("Olá, " + nome + "!");
}

saudacao("Alice"); // Chama a função saudacao com o parâmetro "Alice"` 
```

### Funções com Retorno

Funções podem retornar valores usando a palavra-chave `return`.

```javascript
function soma(a, b) {
  return a + b;
}

let resultado = soma(5, 7);
console.log(resultado); // Saída: 12` 
```


### Exemplo Completo com Parâmetros e Retorno

```javascript
function getMeanTemp(temperatures) {
  let sum = 0;
  for (let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i];
  }
  return sum / temperatures.length;
}

let temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log(`mean: ${getMeanTemp(temperatures)}`); // -> mean: 16.666666666666668`` 
```


## Interação com HTML e Páginas Web

### Exemplo: Multiplicação de Dois Números

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Multiplicação</title>
</head>
<body>
  <input type="number" id="num1" placeholder="Digite o primeiro número">
  <input type="number" id="num2" placeholder="Digite o segundo número">
  <button onclick="multiplicar()">Multiplicar</button>
  <p id="resultado"></p>

  <script> function multiplicar() {
      let a = document.getElementById('num1').value;
      let b = document.getElementById('num2').value;
      let produto = a * b;
      document.getElementById('resultado').innerText = "Resultado: " + produto;
    } </script>
</body>
</html>
```

### Exemplo: Verificar se um Número é Par ou Ímpar

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Par ou Ímpar</title>
</head>
<body>
  <input type="number" id="numero" placeholder="Digite um número">
  <button onclick="verificarPar()">Verificar</button>
  <p id="resultado"></p>

  <script> function verificarPar() {
      let num = document.getElementById('numero').value;
      if (num % 2 === 0) {
        document.getElementById('resultado').innerText = "O número é par";
      } else {
        document.getElementById('resultado').innerText = "O número é ímpar";
      }
    } </script>
</body>
</html>
```

## Funções Recursivas

A recursão é quando uma função chama a si mesma. É útil para resolver problemas que podem ser divididos em subproblemas menores do mesmo tipo.

### Exemplo de Função Recursiva: Fatorial

```javascript
function fatorial(n) {
  if (n > 1) {
    return n * fatorial(n - 1);
  } else {
    return 1;
  }
}

console.log(fatorial(6)); // -> 720` 
```

### Exemplo: Interação com HTML

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fatorial</title>
</head>
<body>
  <input type="number" id="numero" placeholder="Digite um número">
  <button onclick="calcularFatorial()">Calcular Fatorial</button>
  <p id="resultado"></p>

  <script> function calcularFatorial() {
      let num = document.getElementById('numero').value;
      let resultado = fatorial(num);
      document.getElementById('resultado').innerText = "Fatorial: " + resultado;
    }

    function fatorial(n) {
      if (n > 1) {
        return n * fatorial(n - 1);
      } else {
        return 1;
      }
    } </script>
</body>
</html>

```

## Funções como Callbacks

Funções podem ser passadas como argumentos para outras funções e são chamadas dentro dessas funções. Essas são conhecidas como funções de callback.

### Exemplo de Callback

```javascript
function outer(callback) {
  console.log('outer 1');
  callback();
  console.log('outer 2');
}

function inner() {
  console.log('inner 1');
}

outer(inner);
```

### Exemplo: Interação com HTML

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Callback</title>
</head>
<body>
  <button onclick="executar()">Executar</button>
  <p id="resultado"></p>

  <script> function executar() {
      outer(inner);
    }

    function outer(callback) {
      document.getElementById('resultado').innerText = 'outer 1';
      callback();
      document.getElementById('resultado').innerText += ' outer 2';
    }

    function inner() {
      document.getElementById('resultado').innerText += ' inner 1';
    } </script>
</body>
</html>
```

## Exercícios

### Exercício 1: Multiplicação de Dois Números

```javascript
function multiplicar(a, b) {
  return a * b;
}

let resultado = multiplicar(5, 7);
console.log(resultado); // -> 35
```


### Exercício 2: Verificar se um Número é Par

```javascript
function par(a) {
  if (a % 2 === 0) {
    return alert("O número é par");
  } else {
    return alert("O número é ímpar");
  }
}

let numero = prompt("Digite um número: ");
par(numero);
``` 

### Exercício 3: Substituir Letras em uma String

```javascript
function substituir(string, letraASubstituir, letraSubstituta) {
  return string.replace(new RegExp(letraASubstituir, 'g'), letraSubstituta);
}

function getUserInput(mensagem) {
  return prompt(mensagem);
}

let entradaUsuario = getUserInput('Digite uma string:');
let letraASubstituir = getUserInput('Digite a letra a ser substituída:');
let letraSubstituta = getUserInput('Digite a letra de substituição:');

let stringModificada = substituir(entradaUsuario, letraASubstituir, letraSubstituta);

alert('String modificada: ' + stringModificada);
```

## Conclusão

Funções são fundamentais em JavaScript para modularização, reutilização e delegação de código. Elas podem interagir facilmente com elementos HTML, facilitando a criação de aplicações web dinâmicas. Este guia cobriu a definição de funções, passagem de parâmetros, retorno de valores, recursão, callbacks e interação com o DOM. Pratique os exemplos e exercícios para consolidar seu entendimento e aplicação das funções em JavaScript.