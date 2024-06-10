# Guia sobre Loops em JavaScript

## Introdução

Loops são estruturas de controle que permitem a repetição de um bloco de código várias vezes. Em JavaScript, temos várias formas de loops, cada uma adequada para diferentes situações. Este guia irá explicar detalhadamente cada tipo de loop e como utilizá-los em conjunto com o DOM para interagir com elementos de uma página web.

## Tipos de Loops

### For

O loop `for` é utilizado quando você sabe, previamente, quantas vezes o bloco de código deve ser executado. Ele possui uma estrutura inicial, uma condição de continuação e um incremento.

**Sintaxe:**

```javascript
for (inicialização; condição; incremento) {
  // Código a ser executado
}
``` 

**Exemplo:**

```javascript
for (let i = 0; i < 5; i++) {
  console.log("O valor de i é: " + i);
}
```

### For...of

O loop `for...of` é utilizado para percorrer elementos de um array ou objetos iteráveis.

**Sintaxe:**

```javascript
for (variável of iterável) {
  // Código a ser executado
}
``` 

**Exemplo:**

```javascript

let valores = [10, 30, 50, 100];
let soma = 0;

for (let numero of valores) {
  soma += numero;
}

console.log(soma); // -> 190` 
```

### For...in

O loop `for...in` é utilizado para percorrer as propriedades de um objeto.

**Sintaxe:**

```javascript
for (variável in objeto) {
  // Código a ser executado
}
``` 

**Exemplo:**

```javascript
let user = {
  name: "Calvin",
  surname: "Hart",
  age: 66,
  email: "CalvinMHart@teleworm.us"
};

for (let key in user) {
  console.log(key + ": " + user[key]);
}
``` 

### While

O loop `while` é utilizado quando não sabemos, previamente, quantas vezes o bloco de código deve ser executado. Ele repete enquanto a condição especificada for verdadeira.

**Sintaxe:**

```javascript
while (condição) {
  // Código a ser executado
}
``` 

**Exemplo:**

```javascript
let count = 0;

while (count < 5) {
  console.log("Contagem: " + count);
  count++;
}
```

### Do...while

O loop `do...while` é semelhante ao `while`, mas a condição é verificada após a execução do bloco de código, garantindo que o código seja executado pelo menos uma vez.

**Sintaxe:**

```javascript
do {
  // Código a ser executado
} while (condição);
``` 

**Exemplo:**

```javascript

let count = 0;

do {
  console.log("Contagem: " + count);
  count++;
} while (count < 5);
```

## Exemplos Práticos com DOM

### Exemplo 1: Usando `for` para listar números em um elemento `<ul>`

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exemplo For</title>
</head>
<body>
  <ul id="numberList"></ul>
  <script> const list = document.getElementById('numberList');

    for (let i = 1; i <= 10; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = "Número " + i;
      list.appendChild(listItem);
    } </script>
</body>
</html>
```

### Exemplo 2: Usando `for...of` para exibir elementos de um array em um `<div>`

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exemplo For...of</title>
</head>
<body>
  <div id="numberDiv"></div>
  <script> const div = document.getElementById('numberDiv');
    const numbers = [1, 2, 3, 4, 5];

    for (let number of numbers) {
      const paragraph = document.createElement('p');
      paragraph.textContent = "Número: " + number;
      div.appendChild(paragraph);
    } </script>
</body>
</html>
``` 

### Exemplo 3: Usando `for...in` para iterar sobre propriedades de um objeto e exibir em um `<table>`

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exemplo For...in</title>
</head>
<body>
  <table border="1" id="userTable">
    <thead>
      <tr>
        <th>Propriedade</th>
        <th>Valor</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
  <script> const user = {
      name: "Calvin",
      surname: "Hart",
      age: 66,
      email: "CalvinMHart@teleworm.us"
    };

    const tableBody = document.getElementById('userTable').getElementsByTagName('tbody')[0];

    for (let key in user) {
      const row = tableBody.insertRow();
      const cellKey = row.insertCell(0);
      const cellValue = row.insertCell(1);
      cellKey.textContent = key;
      cellValue.textContent = user[key];
    } </script>
</body>
</html>
``` 

### Exemplo 4: Usando `while` para pedir ao usuário valores até que um valor válido seja fornecido

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exemplo While</title>
</head>
<body>
  <button id="startBtn">Iniciar</button>
  <p id="output"></p>
  <script> document.getElementById('startBtn').addEventListener('click', function() {
      let input;
      const output = document.getElementById('output');
      output.textContent = '';

      while (true) {
        input = prompt("Digite um número maior que 10:");
        if (input > 10) {
          output.textContent = "Você digitou um número válido: " + input;
          break;
        } else {
          alert("Número inválido. Tente novamente.");
        }
      }
    }); </script>
</body>
</html> 
```

### Exemplo 5: Usando `do...while` para garantir que o código seja executado pelo menos uma vez

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exemplo Do...while</title>
</head>
<body>
  <button id="countBtn">Contar</button>
  <p id="countOutput"></p>
  <script> document.getElementById('countBtn').addEventListener('click', function() {
      let count = 0;
      const output = document.getElementById('countOutput');
      output.textContent = '';

      do {
        output.textContent += "Contagem: " + count + " ";
        count++;
      } while (count < 5);
    }); </script>
</body>
</html>
``` 

## Exercícios Práticos

### Exercício 1: Leia um valor inteiro N. Este valor será a quantidade de valores inteiros X que serão lidos em seguida. Mostre quantos destes valores X estão dentro do intervalo [10, 20] e quantos estão fora do intervalo mostrando essas informações.

**HTML:**

```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercício 1</title>
</head>
<body>
  <input type="number" id="quantityInput" placeholder="Digite a quantidade">
  <button id="startBtn">Iniciar</button>
  <p id="result"></p>
  <script> document.getElementById('startBtn').addEventListener('click', function() {
      const quantity = parseInt(document.getElementById('quantityInput').value);
      let inside = 0;
      let outside = 0;

      for (let i = 0; i < quantity; i++) {
        const num = parseInt(prompt("Digite o número " + (i + 1) + ":"));
        if (num >= 10 && num <= 20) {
          inside++;
        } else {
          outside++;
        }
      }

      document.getElementById('result').textContent = 
        `Números dentro do intervalo [10, 20]: ${inside} 
         Números fora do intervalo: ${outside}`;
    }); </script>
</body>
</html>
``` 

### Exercício 2: Leia um valor inteiro X. Em seguida, mostre os ímpares de 1 até X, um valor por linha inclusive o X se for o caso.

**HTML:**

```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercício 2</title>
</head>
<body>
  <input type="number" id="valueInput" placeholder="Digite um valor">
  <button id="showOddsBtn">Mostrar Ímpares</button>
  <ul id="oddList"></ul>
  <script> document.getElementById('showOddsBtn').addEventListener('click', function() {
      const value = parseInt(document.getElementById('valueInput').value);
      const list = document.getElementById('oddList');
      list.innerHTML = '';

      for (let i = 1; i <= value; i++) {
        if (i % 2 !== 0) {
          const listItem = document.createElement('li');
          listItem.textContent = i;
          list.appendChild(listItem);
        }
      }
    }); </script>
</body>
</html>
```

### Exercício 3: Ler um número inteiro N e calcular todos os seus divisores.

**HTML:**

```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercício 3</title>
</head>
<body>
  <input type="number" id="numberInput" placeholder="Digite um número">
  <button id="showDivisorsBtn">Mostrar Divisores</button>
  <ul id="divisorList"></ul>
  <script> document.getElementById('showDivisorsBtn').addEventListener('click', function() {
      const number = parseInt(document.getElementById('numberInput').value);
      const list = document.getElementById('divisorList');
      list.innerHTML = '';

      for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
          const listItem = document.createElement('li');
          listItem.textContent = i;
          list.appendChild(listItem);
        }
      }
    }); </script>
</body>
</html>

```

### Exercício 4: Ler um valor N. Calcular e escrever seu respectivo fatorial.

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercício 4</title>
</head>
<body>
  <input type="number" id="factorialInput" placeholder="Digite um número">
  <button id="calculateFactorialBtn">Calcular Fatorial</button>
  <p id="factorialResult"></p>
  <script> document.getElementById('calculateFactorialBtn').addEventListener('click', function() {
      const number = parseInt(document.getElementById('factorialInput').value);
      let factorial = 1;

      for (let i = number; i > 0; i--) {
        factorial *= i;
      }

      document.getElementById('factorialResult').textContent = `O fatorial de ${number} é ${factorial}`;
    }); </script>
</body>
</html>
``` 

### Exercício 5: Ler um número inteiro positivo N. Mostrar N linhas começando de 1 até N. Para cada linha, mostrar o número da linha, depois o quadrado e o cubo do valor.

**HTML:**

````html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercício 5</title>
</head>
<body>
  <input type="number" id="lineNumberInput" placeholder="Digite um número">
  <button id="showLinesBtn">Mostrar Linhas</button>
  <ul id="lineList"></ul>
  <script> document.getElementById('showLinesBtn').addEventListener('click', function() {
      const number = parseInt(document.getElementById('lineNumberInput').value);
      const list = document.getElementById('lineList');
      list.innerHTML = '';

      for (let i = 1; i <= number; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `${i} ${i * i} ${i * i * i}`;
        list.appendChild(listItem);
      }
    }); </script>
</body>
</html>
```` 

## Conclusão

Este guia detalha como utilizar diferentes tipos de loops em JavaScript e como integrá-los com o DOM para criar interações dinâmicas em uma página web. A prática dos exemplos e exercícios fornecidos ajudará a consolidar seu entendimento e aplicação desses conceitos em projetos reais.