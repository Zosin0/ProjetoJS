$(document).ready(function() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = $('#cart');

  $.ajax({
    url: '/api/products',
    method: 'GET',
    success: function(data) {
      cart.forEach(productId => {
        const product = data.find(p => p.id === productId);
        if (product) {
          const cartItem = `
            <li class="list-group-item">
              ${product.name} - $${product.price}
              <button class="btn btn-danger btn-sm float-right remove-item" data-id="${productId}">Remover</button>
            </li>
          `;
          cartContainer.append(cartItem);
        }
      });

      $('.remove-item').click(function() {
        const productId = $(this).data('id');
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart = cart.filter(id => id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        $(this).parent().remove();
      });
    }
  });

  $('#checkout').click(function() {
    if (cart.length > 0) {
      alert('Compra realizada com sucesso!');
      localStorage.removeItem('cart');
      window.location.href = '/success';
    } else {
      alert('Carrinho vazio.');
      window.location.href = '/error';
    }
  });
});
