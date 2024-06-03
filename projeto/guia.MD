# Guia para Rodar o Projeto de E-commerce
  
## Pré-requisitos
  
-   Node.js e npm instalados na máquina.
-   Conhecimento básico de JavaScript, Node.js, e HTML.
  
## Passo a Passo
  
### 1. Clone o Repositório
  
Clone o repositório do projeto para o seu ambiente local.
  
```bash
git clone https://github.com/seu-usuario/ecommerce-js.git
cd ecommerce-js 
```
  
### 2. Instale as Dependências
  
Instale as dependências necessárias utilizando npm.
  
```bash
npm install 
```
  
### 3. Estrutura do Projeto
  
A estrutura do projeto deve estar semelhante a esta:
  
```go
  
ecommerce-js/
├── node_modules/
├── public/
│   ├── js/
│   │   ├── cart.js
│   │   ├── login.js
│   │   ├── products.js
│   ├── css/
│       └── custom.css
├── views/
│   ├── index.ejs
│   ├── cart.ejs
│   ├── login.ejs
│   ├── success.ejs
│   ├── error.ejs
├── server.js
├── package.json
├── package-lock.json 
```
  
### 4. Execute o Servidor
  
Inicie o servidor Node.js.
  
```bash
node server.js 
```
  
### 5. Acesse a Aplicação
  
Abra o navegador e vá para `http://localhost:3000` para acessar a aplicação.
  
## Funcionalidades do Projeto
  
### Home
  
-   Lista de produtos disponíveis.
-   Barra de pesquisa para buscar produtos.
-   Botões para adicionar produtos ao carrinho.
  
### Carrinho
  
-   Lista de produtos adicionados ao carrinho.
-   Botão para finalizar a compra.
-   Opção para remover produtos do carrinho.
  
### Login/Registro
  
-   Formulário de login para usuários existentes.
-   Formulário de registro para novos usuários.
  
### Sucesso e Erro
  
-   Página de sucesso para confirmação de compra.
-   Página de erro para compra não realizada.
  