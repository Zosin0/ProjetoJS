## Aula de Hoje: Mais Conceitos em JavaScript

### LocalStorage

#### O que é?

LocalStorage é uma maneira de armazenar dados no navegador de forma persistente. Os dados armazenados no LocalStorage não são removidos quando o navegador é fechado, permitindo que informações sejam preservadas entre as sessões.

#### Quando usar?

Use LocalStorage quando precisar armazenar dados simples e persistentes no navegador do usuário, como preferências, estados de login, ou itens de um carrinho de compras.

#### Exemplos de Código

**Armazenar Dados:**

```javascript
localStorage.setItem('nome', 'João');
localStorage.setItem('idade', '25');
``` 

**Recuperar Dados:**

```javascript
let nome = localStorage.getItem('nome');
let idade = localStorage.getItem('idade'); 
```

**Remover Dados:**

```javascript
localStorage.removeItem('nome');
``` 

#### Usabilidade em Projetos Reais

-   **Sessões de Usuário:** Armazenar informações sobre o usuário logado.
-   **Carrinho de Compras:** Guardar os itens que o usuário adicionou ao carrinho.
-   **Preferências:** Salvar preferências de usuário, como temas ou configurações.

### DOM (Document Object Model)

#### O que é?

O DOM é uma interface de programação que representa a estrutura de um documento HTML ou XML como uma árvore de objetos. Ele permite que scripts acessem e atualizem o conteúdo, estrutura e estilo de documentos dinamicamente.

#### Quando usar?

Sempre que precisar manipular o conteúdo ou a estrutura de uma página web em tempo real.

#### Exemplos de Código

**Selecionar um Elemento:**

```javascript
document.getElementById('meuElemento');
``` 

**Criar um Novo Elemento:**

```javascript
let novoElemento = document.createElement('div');
novoElemento.innerText = 'Novo Conteúdo';
document.body.appendChild(novoElemento);` 
```

**Modificar um Elemento Existente:**

```javascript
document.getElementById('meuElemento').innerText = 'Conteúdo Atualizado';
``` 

#### Usabilidade em Projetos Reais

-   **Interatividade:** Atualizar o conteúdo da página sem recarregar.
-   **Formulários:** Validar dados de entrada do usuário.
-   **Dinâmica:** Adicionar ou remover elementos da página conforme necessário.

### JSON (JavaScript Object Notation)

#### O que é?

JSON é um formato leve de intercâmbio de dados que é fácil para humanos lerem e escreverem e fácil para máquinas analisarem e gerarem. Ele é amplamente usado para transmitir dados entre um servidor e uma aplicação web.

#### Quando usar?

Sempre que precisar enviar ou receber dados estruturados entre um servidor e uma aplicação web.

#### Exemplos de Código

**Estrutura JSON:**

```json
{
  "nome": "João",
  "idade": 25,
  "cidade": "São Paulo"
}
``` 

**Converter JSON para Objeto JavaScript:**

```javascript
let jsonString = '{"nome":"João", "idade":25}';
let obj = JSON.parse(jsonString);
``` 

**Converter Objeto JavaScript para JSON:**

```javascript
let obj = {nome: 'João', idade: 25};
let jsonString = JSON.stringify(obj);
```

#### Usabilidade em Projetos Reais

-   **APIs:** Troca de dados entre cliente e servidor.
-   **Configurações:** Armazenamento de configurações em arquivos JSON.
-   **Dados Estruturados:** Facilitar a leitura e escrita de dados estruturados.

### jQuery

#### O que é?

jQuery é uma biblioteca JavaScript rápida, pequena e rica em recursos. Ela facilita muito coisas como manipulação de documentos HTML, manipulação de eventos, animação e Ajax, simplificando muito a utilização de JavaScript em seu website.

#### Quando usar?

Quando quiser simplificar a manipulação do DOM, eventos, animações, e operações Ajax.

#### Exemplos de Código

**Selecionar um Elemento:**

```javascript
$('#meuElemento');
``` 

**Adicionar um Event Listener:**

```javascript
$('#meuBotao').on('click', function() {
  alert('Botão clicado!');
});
``` 

**Realizar uma Requisição Ajax:**

```javascript
$.ajax({
  url: 'meus_dados.json',
  method: 'GET',
  success: function(data) {
    console.log(data);
  }
});
``` 

#### Usabilidade em Projetos Reais

-   **Manipulação do DOM:** Simplificar a seleção e modificação de elementos.
-   **Animações:** Criar efeitos de animação de maneira simples.
-   **Ajax:** Facilitar a comunicação assíncrona com servidores.

### AJAX (Asynchronous JavaScript and XML)

#### O que é?

AJAX é uma técnica para criar aplicações web mais rápidas e dinâmicas. Ela permite que páginas web atualizem partes da página sem recarregar a página inteira, comunicando-se com o servidor de forma assíncrona.

#### Quando usar?

Quando quiser atualizar partes da página sem recarregar a página inteira, como em buscas dinâmicas, atualizações de conteúdo, ou envio de formulários sem recarga.

#### Exemplos de Código

**Requisição Ajax com XMLHttpRequest:**

```javascript

let xhr = new XMLHttpRequest();
xhr.open('GET', 'dados.json', true);
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();
```

**Requisição Ajax com jQuery:**

```javascript
$.ajax({
  url: 'dados.json',
  method: 'GET',
  success: function(data) {
    console.log(data);
  }
});
``` 

#### Usabilidade em Projetos Reais

-   **Buscas Dinâmicas:** Atualizar resultados de pesquisa enquanto o usuário digita.
-   **Formulários:** Enviar dados do formulário sem recarregar a página.
-   **Conteúdo Dinâmico:** Carregar conteúdo novo em uma página sem recarga completa.

### Aplicação no Projeto

#### Como Aplicar?

**LocalStorage:**

-   **Uso:** Armazenar informações do usuário, como dados de login e itens no carrinho de compras.
-   **Código no Projeto:**
    
    ```javascript    
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    ``` 
    

**DOM:**

-   **Uso:** Manipular a estrutura da página dinamicamente, como exibir produtos e adicionar itens ao carrinho.
-   **Código no Projeto:**
    
    ```javascript
    let novoElemento = document.createElement('div');
    novoElemento.innerText = 'Produto Adicionado';
    document.body.appendChild(novoElemento);
    ``` 
    

**JSON:**

-   **Uso:** Armazenar e transferir dados estruturados, como a lista de produtos.
-   **Código no Projeto:**
    
    ```json
    [
      {"id": 1, "nome": "Produto 1", "descricao": "Descrição do Produto 1", "preco": 100.0},
      {"id": 2, "nome": "Produto 2", "descricao": "Descrição do Produto 2", "preco": 200.0}
    ]
    ``` 
    

**jQuery:**

-   **Uso:** Facilitar a manipulação do DOM e a realização de operações Ajax.
-   **Código no Projeto:**
    
    ```javascript
    $('#searchInput').on('input', function() {
      const searchQuery = $(this).val().toLowerCase();
      $.getJSON('produtos.json', function(produtos) {
        const resultados = produtos.filter(produto => produto.nome.toLowerCase().includes(searchQuery));
        displayResultados(resultados);
      });
    });
    ``` 
    

**AJAX:**

-   **Uso:** Realizar buscas dinâmicas e atualizar a exibição de produtos sem recarregar a página.
-   **Código no Projeto:**
    
    ```javascript
    $.ajax({
      url: 'produtos.json',
      method: 'GET',
      success: function(data) {
        displayResultados(data);
      }
    });
    ``` 
    

### Diferenças do Projeto Antes e Agora

-   **Antes:**
    
    -   Produtos eram exibidos estaticamente.
    -   Sem funcionalidades de busca dinâmica.
    -   Sem armazenamento persistente de dados do usuário.
-   **Agora:**
    
    -   Produtos carregados dinamicamente a partir de um arquivo JSON.
    -   Busca dinâmica de produtos utilizando jQuery e AJAX.
    -   Armazenamento persistente de informações do usuário e do carrinho utilizando LocalStorage.
    -   Manipulação dinâmica do DOM para exibir e atualizar informações na página em tempo real.

