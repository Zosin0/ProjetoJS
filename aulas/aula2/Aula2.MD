# Guia sobre Condicionais, Operadores Lógicos e Estruturas: if, else if e else em JavaScript

## Introdução

Este guia fornece uma explicação detalhada sobre como utilizar condicionais, operadores lógicos e estruturas como `if`, `else if` e `else` em JavaScript. Além disso, inclui exemplos práticos de como interagir com elementos da página web utilizando essas estruturas.

## Condicionais em JavaScript

### Estrutura Condicional if/else

A estrutura condicional `if` avalia uma expressão e executa um bloco de código se a expressão for verdadeira. A estrutura `else` é usada para especificar um bloco de código a ser executado se a expressão `if` for falsa.

**Sintaxe:**

```javascript
if (condicao) {
  // Código a ser executado se a condição for verdadeira
} else {
  // Código a ser executado se a condição for falsa
}
```

**Exemplo:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo if/else</title>
</head>
<body>
    <h1 id="myHeading">Texto Original</h1>
    <button id="changeTextBtn">Mudar Texto</button>
    <script> document.getElementById('changeTextBtn').addEventListener('click', function () {
            const heading = document.getElementById('myHeading');
            if (heading.innerText === 'Texto Original') {
                heading.innerText = 'Texto Modificado';
            } else {
                heading.innerText = 'Texto Original';
            }
        }); </script>
</body>
</html>
``` 

### Estrutura Condicional if/else if/else

A estrutura condicional `if/else if/else` é usada para testar múltiplas expressões. Quando uma expressão `if` ou `else if` for verdadeira, o bloco de código correspondente será executado.

**Sintaxe:**

```javascript
if (condicao1) {
  // Código a ser executado se a condição1 for verdadeira
} else if (condicao2) {
  // Código a ser executado se a condição1 for falsa e a condição2 for verdadeira
} else {
  // Código a ser executado se todas as condições anteriores forem falsas
}
``` 

**Exemplo:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo if/else if/else</title>
</head>
<body>
    <h1 id="mainHeading">Cabeçalho Principal</h1>
    <p id="infoParagraph">Parágrafo de informação</p>
    <button id="updateContentBtn">Atualizar Conteúdo</button>
    <script> document.getElementById('updateContentBtn').addEventListener('click', function () {
            const heading = document.getElementById('mainHeading');
            const paragraph = document.getElementById('infoParagraph');

            if (heading.innerText === 'Cabeçalho Principal') {
                heading.innerText = 'Cabeçalho Atualizado';
                paragraph.innerText = 'O conteúdo foi atualizado para a primeira condição.';
            } else if (heading.innerText === 'Cabeçalho Atualizado') {
                heading.innerText = 'Cabeçalho Modificado Novamente';
                paragraph.innerText = 'O conteúdo foi atualizado para a segunda condição.';
            } else {
                heading.innerText = 'Cabeçalho Principal';
                paragraph.innerText = 'O conteúdo voltou ao original.';
            }
        }); </script>
</body>
</html>
```


### Estrutura Condicional switch

A estrutura `switch` é usada para selecionar um dos muitos blocos de código a serem executados. Ela compara o valor de uma variável ou expressão com os valores especificados em cada `case` e executa o bloco de código correspondente.

**Sintaxe:**

```javascript
switch (expressao) {
  case valor1:
    // Código a ser executado se a expressão for igual a valor1
    break;
  case valor2:
    // Código a ser executado se a expressão for igual a valor2
    break;
  // Mais cases...
  default:
    // Código a ser executado se a expressão não corresponder a nenhum valor
}
``` 

**Exemplo:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo switch</title>
</head>
<body>
    <p id="myParagraph">Texto do parágrafo</p>
    <select id="textOptions">
        <option value="option1">Opção 1</option>
        <option value="option2">Opção 2</option>
        <option value="option3">Opção 3</option>
    </select>
    <script> document.getElementById('textOptions').addEventListener('change', function () {
            const paragraph = document.getElementById('myParagraph');
            const selectedValue = this.value;

            switch (selectedValue) {
                case 'option1':
                    paragraph.innerText = 'Você escolheu a Opção 1';
                    break;
                case 'option2':
                    paragraph.innerText = 'Você escolheu a Opção 2';
                    break;
                case 'option3':
                    paragraph.innerText = 'Você escolheu a Opção 3';
                    break;
                default:
                    paragraph.innerText = 'Por favor, selecione uma opção';
            }
        }); </script>
</body>
</html>
``` 

## Operadores Lógicos

Os operadores lógicos são utilizados para combinar múltiplas expressões condicionais.

### Operador AND (&&)

O operador AND retorna verdadeiro se ambas as expressões forem verdadeiras.

**Exemplo:**

```javascript
let a = true;
let b = false;

if (a && b) {
  console.log("Ambos são verdadeiros");
} else {
  console.log("Pelo menos um é falso");
}
// Saída: "Pelo menos um é falso" 
```

### Operador OR (||)

O operador OR retorna verdadeiro se pelo menos uma das expressões for verdadeira.

**Exemplo:**

```javascript
let a = true;
let b = false;

if (a || b) {
  console.log("Pelo menos um é verdadeiro");
} else {
  console.log("Ambos são falsos");
}
// Saída: "Pelo menos um é verdadeiro"
``` 

### Operador NOT (!)

O operador NOT inverte o valor de uma expressão. Se a expressão for verdadeira, torna-se falsa e vice-versa.

**Exemplo:**

```javascript
let a = true;
let b = false;

console.log(!a); // Saída: false
console.log(!b); // Saída: true
``` 

## Exemplos Mais Completos

### Exemplo: Verificar se um Número é Par ou Ímpar

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificar Par ou Ímpar</title>
</head>
<body>
    <input type="number" id="numberInput" placeholder="Digite um número">
    <button id="checkNumberBtn">Verificar</button>
    <p id="result"></p>
    <script> document.getElementById('checkNumberBtn').addEventListener('click', function () {
            const num = document.getElementById('numberInput').value;
            const result = document.getElementById('result');

            if (num % 2 === 0) {
                result.innerText = 'O número é par';
            } else {
                result.innerText = 'O número é ímpar';
            }
        }); </script>
</body>
</html>
``` 

### Exemplo: Mostrar Aprovação ou Reprovação com Base na Nota

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aprovação ou Reprovação</title>
</head>
<body>
    <input type="number" id="gradeInput" placeholder="Digite a nota">
    <button id="checkGradeBtn">Verificar</button>
    <p id="gradeResult"></p>
    <script> document.getElementById('checkGradeBtn').addEventListener('click', function () {
            const grade = document.getElementById('gradeInput').value;
            const result = document.getElementById('gradeResult');

            if (grade >= 5) {
                result.innerText = 'Você foi Aprovado!';
            } else {
                result.innerText = 'Você foi Reprovado!';
            }
        }); </script>
</body>
</html>
``` 

### Exemplo: Calcular Valor a Pagar em um Plano de Telefonia

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plano de Telefonia</title>
</head>
<body>
    <input type="number" id="minutesInput" placeholder="Digite os minutos">
    <button id="calculateBtn">Calcular</button>
    <p id="paymentResult"></p>
    <script> document.getElementById('calculateBtn').addEventListener('click', function () {
            const minutes = document.getElementById('minutesInput').value;
            const result = document.getElementById('paymentResult');
            let value = 50;

            if (minutes > 100) {
                value += (minutes - 100) * 2;
            }

            result.innerText = `Valor a pagar: R$ ${value.toFixed(2)}`;
        }); </script>
</body>
</html>
``` 

### Exemplo: Cumprimentar de Acordo com o Horário

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cumprimentar</title>
</head>
<body>
    <input type="number" id="hourInput" placeholder="Digite a hora">
    <button id="greetBtn">Cumprimentar</button>
    <p id="greetResult"></p>
    <script> document.getElementById('greetBtn').addEventListener('click', function () {
            const hour = document.getElementById('hourInput').value;
            const result = document.getElementById('greetResult');

            if (hour >= 0 && hour < 6) {
                result.innerText = `Agora são ${hour} horas. Boa Madrugada!`;
            } else if (hour >= 6 && hour < 12) {
                result.innerText = `Agora são ${hour} horas. Bom Dia!`;
            } else if (hour >= 12 && hour < 18) {
                result.innerText = `Agora são ${hour} horas. Boa Tarde!`;
            } else if (hour >= 18 && hour <= 24) {
                result.innerText = `Agora são ${hour} horas. Boa Noite!`;
            } else {
                result.innerText = 'Hora inválida!';
            }
        }); </script>
</body>
</html>
``` 

## Conclusão

Este guia forneceu uma visão geral detalhada sobre como usar estruturas condicionais, operadores lógicos e interagir com elementos da página web em JavaScript. A prática desses exemplos ajudará a reforçar o entendimento e a aplicação desses conceitos em projetos reais.