# Guia Completo para Projeto de Registro e Login com JavaScript, Bootstrap e LocalStorage

## Estrutura do Projeto

Vamos criar um projeto que consiste em uma página inicial, uma página de registro, uma página de login e uma página protegida que só pode ser acessada por usuários autenticados. Utilizaremos HTML, CSS, JavaScript e Bootstrap.

### Estrutura de Pastas

```arduino
projeto/
├── index.html
├── login.html
├── logged.html
├── registro.html
├── styles/
│   ├── home.css
│   └── accounts.css
├── script.js
``` 

### Arquivos e Explicações

#### Arquivo `index.html`

**Descrição:** Página inicial que oferece opções para registro e login.

**Código:**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projeto - Home</title>
    <link rel="stylesheet" href="styles/home.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
</head>

<body class="fundo">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="logged.html">Loja</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Login/Registro
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="login.html">Entrar</a></li>
                            <li><a class="dropdown-item" href="registro.html">Criar Conta</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <main>
        <header>
            <h1 class="heading1">Bem-vindo à construção do nosso site</h1>
        </header>

        <section class="exemplo-login">
            <h2>Seja bem-vindo ao Projeto</h2>
            <p>Esse é nosso exemplo de login</p>

            <div class="container-btn">
                <a href="registro.html" class="bttn">Registro</a>
                <a href="login.html" class="bttn">Login</a>
            </div>
        </section>
    </main>
</body>

</html>
```

#### Arquivo `registro.html`

**Descrição:** Página de registro de usuário.

**Código:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registro</title>
  <link rel="stylesheet" href="styles/accounts.css">
</head>
<body>
  <h1>Registro</h1>
  <form id="registroForm">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" required>
    
    <label for="email">E-mail:</label>
    <input type="email" id="email" required>
    
    <label for="senha">Senha:</label>
    <input type="password" id="senha" required>
    
    <label for="repetirSenha">Repetir Senha:</label>
    <input type="password" id="repetirSenha" required>
    
    <button type="submit">Registrar</button>
  </form>
  <script src="script.js"></script>
</body>
</html>
``` 

#### Arquivo `login.html`

**Descrição:** Página de login de usuário.

**Código:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" href="styles/accounts.css">
</head>
<body>
  <h1>Login</h1>
  <form id="loginForm">
    <label for="emailLogin">E-mail:</label>
    <input type="email" id="emailLogin" required>
    
    <label for="senhaLogin">Senha:</label>
    <input type="password" id="senhaLogin" required>
    
    <button type="submit">Entrar</button>
  </form>
  <script src="script.js"></script>
</body>
</html>
``` 

#### Arquivo `logged.html`

**Descrição:** Página protegida, acessível apenas para usuários logados.

**Código:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Página Logada</title>
  <link rel="stylesheet" href="styles/accounts.css">
</head>
<body>
  <h1>Bem-vindo!</h1>
  <p>Loja em construção.</p>
  <button id="logoutBtn">Logout</button>
  <script src="script.js"></script>
  <script> document.addEventListener('DOMContentLoaded', () => {
      const user = JSON.parse(localStorage.getItem('loggedInUser'));

      if (!user) {
        alert('Você não está logado!');
        window.location.href = 'login.html';
      }

      const logoutBtn = document.getElementById('logoutBtn');
      logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        alert('Você foi deslogado!');
        window.location.href = 'login.html';
      });
    }); </script>
</body>
</html>
``` 

#### Arquivo `script.js`

**Descrição:** Script JavaScript para manipulação dos formulários de registro e login, e para gerenciar o estado de login do usuário utilizando LocalStorage.

**Código:**

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const registroForm = document.getElementById('registroForm');
    const loginForm = document.getElementById('loginForm');
  
    if (registroForm) {
      registroForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const repetirSenha = document.getElementById('repetirSenha').value;
  
        if (senha !== repetirSenha) {
          alert('As senhas não coincidem!');
          return;
        }
  
        const user = {
          nome,
          email,
          senha
        };
  
        localStorage.setItem('user', JSON.stringify(user));
        alert('Registro bem-sucedido!');
        window.location.href = 'login.html';
      });
    }
  
    if (loginForm) {
      loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('emailLogin').value;
        const senha = document.getElementById('senhaLogin').value;
  
        const user = JSON.parse(localStorage.getItem('user'));
  
        if (user && user.email === email && user.senha === senha) {
          localStorage.setItem('loggedInUser', JSON.stringify(user));
          alert('Login bem-sucedido!');
          window.location.href = 'logged.html';
        } else {
          alert('E-mail ou senha incorretos!');
        }
      });
    }
  });
``` 

#### Arquivo `home.css`

**Descrição:** Estilos para a página inicial (`index.html`).

**Código:**

```css
* {
    margin: 0;
    padding: 0;
}

.fundo {
    background-color: rgb(162, 210, 252);
}

.heading1 {
    margin: 4%;
}

header,
.exemplo-login {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5%;
    margin: auto;
}

.exemplo-login {
    flex-direction: column;
}

.container-btn {
    margin: auto;
}

.bttn {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    font-size: 16px;
    border-radius: 5px;
}

.bttn:hover {
    background-color: #0056b3;
}
```

#### Arquivo `accounts.css`

**Descrição:** Estilos para as páginas de login e registro (`login.html` e `registro.html`).

**Código:**

```css
body {
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    background-color: #e7c3c3;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
  
  label {
    margin-bottom: 5px;
  }
  
  input {
    margin-bottom: 15px;
    padding: 10px;
    font-size: 16px;
  }
  
  button {
    padding: 10px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .container {
    display: flex;
    gap: 10px;
  }
  
  .btn {
    padding: 10px 20px;
    background-color: #ffffff;
    color: white;
    text-decoration: none;
    font-size: 16px;
    border-radius: 5px;
  }
  
  .btn:hover {
    background-color: #0056b3;
}
``` 

### Explicações Detalhadas

#### Forms: em HTML/CSS/JS

**HTML:**

-   Utilizamos a tag `<form>` para definir o formulário.
-   Elementos `<input>` são usados para receber dados do usuário.
-   Atributos como `type`, `id` e `required` são usados para especificar o tipo de dado e validar o formulário.

**CSS:**

-   Estilização dos formulários para torná-los mais atraentes e usáveis.
-   Classes e IDs são usadas para aplicar estilos específicos.

**JavaScript:**

-   Manipulação de eventos (`submit`) para validar e processar dados do formulário.
-   Utilização de métodos DOM (`getElementById`) para acessar e manipular elementos do formulário.

#### DOM: O que é? Para que serve? Como utilizar em meu projeto?

**O que é?**

-   Document Object Model (DOM) é uma interface de programação para documentos HTML e XML.
-   Representa a estrutura do documento como uma árvore de objetos.

**Para que serve?**

-   Manipular a estrutura, estilo e conteúdo de um documento web.
-   Facilitar a interação dinâmica com a página.

**Como utilizar?**

-   Utilizando métodos DOM em JavaScript para acessar e modificar elementos.
-   Exemplo: `document.getElementById('meuElemento').innerText = "Novo texto";`

#### BootStrap: Como aplicar Bootstrap em um projeto

**O que é?**

-   Um framework CSS que facilita a criação de layouts responsivos e modernos.

**Como aplicar?**

-   Incluir o arquivo CSS do Bootstrap no projeto.
-   Utilizar classes Bootstrap para estilizar componentes.

**Exemplo:**

```html
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet"> 
```

**Componentes Bootstrap:**

-   Botões, formulários, grids, navbars, entre outros.

#### LocalStorage: Como funciona e como pode ser útil?

**O que é?**

-   Uma forma de armazenar dados no navegador de forma persistente.

**Como funciona?**

-   Utiliza key-value pairs para armazenar dados que persistem mesmo após o fechamento do navegador.

**Como pode ser útil?**

-   Armazenar informações de sessão, preferências do usuário, dados de formulários, etc.

**Exemplo de Uso:**

```javascript
// Armazenar dados
localStorage.setItem('nome', 'João');
localStorage.setItem('idade', '25');

// Recuperar dados
let nome = localStorage.getItem('nome');
let idade = localStorage.getItem('idade');

// Remover dados
localStorage.removeItem('nome');` 
```


### Conclusão

Com este guia detalhado, você tem todas as informações necessárias para criar um projeto de registro e login utilizando HTML, CSS, JavaScript, Bootstrap e LocalStorage. Pratique os exemplos e adapte-os conforme necessário para atender às suas necessidades específicas.