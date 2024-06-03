const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Produtos simulados
const products = [
  { id: 1, name: 'Produto 1', price: 10 },
  { id: 2, name: 'Produto 2', price: 20 },
  { id: 3, name: 'Produto 3', price: 30 },
];

// Endpoints da API
app.get('/api/products', (req, res) => {
  const query = req.query.q;
  if (query) {
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
    res.json(filteredProducts);
  } else {
    res.json(products);
  }
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'user' && password === 'password') {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Rotas para renderização de páginas
app.get('/', (req, res) => {
  res.render('index', { products });
});

app.get('/cart', (req, res) => {
  res.render('cart');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/success', (req, res) => {
  res.render('success');
});

app.get('/error', (req, res) => {
  res.render('error');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
