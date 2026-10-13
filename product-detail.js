(() => {
  const page = document.querySelector('[data-product-page]');
  if (!page) return;
  const product = PRODUCTS.find(p => p.id === page.dataset.productPage);
  let size = product.sizes[0].size;
  page.querySelectorAll('[data-detail-size]').forEach(button => {
    button.addEventListener('click', () => {
      size = button.dataset.detailSize;
      page.querySelectorAll('[data-detail-size]').forEach(b => b.setAttribute('aria-pressed',String(b===button)));
    });
  });
  document.getElementById('detail-add-cart').addEventListener('click', () => {
    const input = document.getElementById('detail-quantity');
    const quantity = Math.min(999,Math.max(1,Math.floor(Number(input.value)||1)));
    input.value = quantity;
    Cart.add(product.id,size,quantity);
  });
})();
