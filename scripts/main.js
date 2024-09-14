import { productData } from '../data/data.js';

function convertCent(number) {
  return (number / 100).toFixed(2);
}

renderHTML();

function renderHTML() {
  let html = '';

  productData.forEach(product => {
    html += `
    <div class="product">
      <img class="product-img" src="${product.image}">
      <div class="product-info">
        <span class="product-name">${product.name} ${product.name} ${product.name}</span>
        <div class="product-rating">
          <span class="rating">${product.ratings.ratingFloat}</span>
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

  document.querySelector('.product-container').innerHTML = html;
};