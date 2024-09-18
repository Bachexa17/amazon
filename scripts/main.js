import { productData } from '../data/data.js';

function convertCent(number) {
  return (number / 100).toFixed(2);
}

renderHTML();
ratingStyle();

function renderHTML() {
  let html = '';

  productData.forEach(product => {
    html += `
    <div class="product" data-product-id=${product.id}>
      <img class="product-img" src="${product.image}">
      <div class="product-info">
        <span class="product-name">${product.name}</span>
        <div class="product-rating">
          <span class="rating">${product.ratings.ratingNumber / 10}</span>  
          <div class="rating-box">
            <img class="stars-img" src="images/home/5-star.png">
            <div class="rating-box-fill"></div>
          </div>
          <span class="amount">${product.ratings.amount}</span>
        </div>
        <span class="product-price">$${convertCent(product.priceCent)}</span>
        <div class="product-buttons">
          <select class="quantity-selector">
            <option selected="" value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          <button class="add-cart-button">Add to Cart</span>
        </div>
      </div>
    </div>
    `;
  });

  document.querySelector('.products-container').innerHTML = html;
};

function ratingStyle() {
  document.querySelectorAll('.product').forEach(product => {
    const productId = product.dataset.productId;
    productData.forEach(item => {
      if (productId === item.id) {
        product.querySelector('.rating-box-fill').style.width = `${item.ratings.ratingNumber - 3}px`;
      }
    })
  })
}