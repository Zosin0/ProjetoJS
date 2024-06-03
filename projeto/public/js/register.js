$(document).ready(function() {
    $('#registerForm').submit(function(event) {
      event.preventDefault();
      const username = $('#username').val();
      const password = $('#password').val();
  
      // Simulação de registro
      alert('Registro bem-sucedido!');
      window.location.href = 'login.html';
    });
  });
  