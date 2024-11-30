import { restaurants } from './restaurants.js';  // 引入餐廳資料

// 取得 URL 中的餐廳名稱參數
const urlParams = new URLSearchParams(window.location.search);
const restaurantName = urlParams.get('name');

// 根據餐廳名稱找到對應的餐廳資料
const restaurant = restaurants.find(r => r.name === restaurantName);

if (restaurant) {
  // 渲染餐廳的詳細資料
  const restaurantInfo = document.getElementById('detail-container');
  const card = document.createElement("div");
  card.className = "detail-card";

  card.innerHTML = `
    <div class="product-container">
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
              <a href="${restaurant.orderUrl}" target="_blank" class="line-order-btn">Line 線上點餐</a>
              <button class="add-to-cart-btn">菜單連結</button>
          </div>
      </div>
    </div>
  `;
  restaurantInfo.appendChild(card);
  // restaurantInfo.innerHTML = `
  //   <h2>${restaurant.name}</h2>
  //   <img src="${restaurant.image}" alt="${restaurant.name}" />
  //   <p><strong>分類:</strong> ${restaurant.type}</p>
  //   <p><strong>地址:</strong> ${restaurant.address}</p>
  //   <p><strong>連絡電話:</strong> ${restaurant.phone}</p>
  //   <p><strong>google map連結:</strong> <a href="${restaurant.url}" target="_blank">點這裡</a></p>
  //   <p><strong>點餐網址:</strong> ${
  //     restaurant.orderUrl === '#'
  //       ? '無訂餐連結'
  //       : `<a href="${restaurant.orderUrl}" target="_blank">點餐</a>`
  //   }</p>
  //   <p><strong>標籤:</strong> ${restaurant.tags.join(", ")}</p>
  // `;
} else {
  // 如果找不到餐廳資料，顯示錯誤訊息
  const restaurantInfo = document.getElementById('restaurant-info');
  restaurantInfo.innerHTML = `
    <p>找不到該餐廳資料。</p>
  `;
}
