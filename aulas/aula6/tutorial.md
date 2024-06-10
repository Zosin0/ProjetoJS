```js
<input type="text" id="meuInput" placeholder="Digite algo">
<script>
  document.getElementById('meuInput').addEventListener('input', function() {
    console.log('Valor alterado:', this.value);
  });
</script>
```