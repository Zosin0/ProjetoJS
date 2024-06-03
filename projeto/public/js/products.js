$(document).ready(function() {
  function renderProducts(products) {
    const productsContainer = $('#products');
    productsContainer.empty();
    products.forEach(product => {
      const productCard = `
        <div class="col-md-4">
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">$${product.price}</p>
              <button class="btn btn-primary add-to-cart" data-id="${product.id}">Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
      `;
      productsContainer.append(productCard);
    });

    $('.add-to-cart').click(function() {
      const productId = $(this).data('id');
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(productId);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Produto adicionado ao carrinho!');
    });
  }

  $('#search').on('input', function() {
    const query = $(this).val();
    $.ajax({
      url: '/api/products',
      method: 'GET',
      data: { q: query },
      success: function(data) {
        renderProducts(data);
      }
    });
  });

  $.ajax({
    url: '/api/products',
    method: 'GET',
    success: function(data) {
      renderProducts(data);
    }
  });
});
