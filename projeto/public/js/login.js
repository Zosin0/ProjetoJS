$(document).ready(function() {
  $('#loginForm').submit(function(event) {
    event.preventDefault();
    const username = $('#username').val();
    const password = $('#password').val();

    $.ajax({
      url: '/api/login',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ username, password }),
      success: function(response) {
        if (response.success) {
          sessionStorage.setItem('loggedIn', true);
          alert('Login bem-sucedido!');
          window.location.href = '/';
        } else {
          alert('Credenciais inválidas');
        }
      }
    });
  });

  $('#registerForm').submit(function(event) {
    event.preventDefault();
    const username = $('#regUsername').val();
    const password = $('#regPassword').val();

    alert('Registro bem-sucedido!');
    window.location.href = '/';
  });
});
