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
  