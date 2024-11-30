import { restaurants } from './restaurants.js'; // 引入餐廳資料

// 取得 URL 中的餐廳名稱參數
const urlParams = new URLSearchParams(window.location.search);
const restaurantName = urlParams.get('name');

// 找到對應的餐廳資料
const restaurant = restaurants.find(r => r.name === restaurantName);

if (restaurant) {
  // 渲染餐廳的詳細資料
  const restaurantInfo = document.getElementById('detail-container');
  const card = document.createElement("div");
  card.className = "product-container";

  // 取得目前的最愛清單
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const isFavorite = favorites.some(fav => fav.name === restaurant.name);

  card.innerHTML = `
    <div class="product-info">
      <div class="product-image">
          <img src="${restaurant.image}" alt="商品圖片">
      </div>
      <div class="product-details">
          <h1 class="product-title">${restaurant.name}</h1>
          <div class="store-info">
              <p class="food-category">食物類別：${restaurant.type}</p>
              <p class="store-phone">聯絡電話：${restaurant.phone}</p>
              <p class="store-address">地址：${restaurant.address}</p>
          </div>
          <div class="action-buttons">
              <a href="${restaurant.url}" target="_blank" class="google-map-btn">查看 Google 地圖</a>
              <a href="${restaurant.orderUrl}" 
                 class="line-order-btn ${restaurant.orderUrl === "#" ? 'disabled' : ''}" 
                 ${restaurant.orderUrl === "#" ? 'disabled' : ''}>
                 Line 線上點餐
              </a>
              <button class="add-to-cart-btn">菜單連結</button>
              <button id="favorite-button" class="favorite-heart ${isFavorite ? 'active' : ''}">
                ❤︎
              </button>
          </div>
      </div>
    </div>
  `;
  restaurantInfo.appendChild(card);

  // 綁定加入/取消最愛按鈕的事件
  const favoriteButton = document.getElementById('favorite-button');
  favoriteButton.addEventListener('click', () => {
    toggleFavorite(restaurant.name, favoriteButton);
  });

  // 顯示同類餐廳
  const sameCategory = restaurants.filter(r => r.type === restaurant.type && r.name !== restaurantName);
  if (sameCategory.length > 0) {
    const textInfo = document.getElementById('text-container');
    const moreRestaurant = document.getElementById('same-category-container');

    const text = document.createElement('div');
    text.innerHTML = `<h1 class="product-title">更多有關 ${restaurant.type} 的餐廳</h1>`;
    textInfo.appendChild(text);

    sameCategory.forEach(shop => {
      const item = document.createElement("div");
      item.className = "relevant-item";

      const isShopFavorite = favorites.some(fav => fav.name === shop.name);
      item.innerHTML = `
        <div class="restaurant-card">
          <a href="restaurant-detail.html?name=${encodeURIComponent(shop.name)}" class="restaurant-image" 
             style="background-image: url('${shop.image}');">
          </a>
          <div class="restaurant-info">
            <h3>${shop.name}</h3>
            <p>${shop.type}</p>
          </div>
          <div class="restaurant-actions">
            <button class="favorite-heart ${isShopFavorite ? 'active' : ''}" data-name="${shop.name}">
              ❤︎
            </button>
          </div>
        </div>
      `;
      moreRestaurant.appendChild(item);
    });

    // 綁定所有小卡按鈕的事件
    moreRestaurant.addEventListener('click', (event) => {
      if (event.target.classList.contains('favorite-heart')) {
        const shopName = event.target.getAttribute('data-name');
        toggleFavorite(shopName, event.target);
      }
    });
  }
} else {
  document.getElementById('detail-container').innerHTML = `<p>找不到該餐廳資料。</p>`;
}

// 加入/移除最愛功能
function toggleFavorite(name, button) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const restaurant = restaurants.find(r => r.name === name);

  if (!restaurant) return;

  const index = favorites.findIndex(fav => fav.name === name);

  if (index === -1) {
    favorites.push(restaurant); // 加入最愛
    button.classList.add('active'); // 改變樣式
  } else {
    favorites.splice(index, 1); // 移除最愛
    button.classList.remove('active'); // 改變樣式
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
}
