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
  card.className = "product-container";

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
              <a href="${restaurant.orderUrl}" target="_blank" class="line-order-btn">Line 線上點餐</a>
              <button class="add-to-cart-btn">菜單連結</button>
          </div>
      </div>
    </div>
  `;
  restaurantInfo.appendChild(card);

  // 根據找到的餐廳名稱找到對應的同類餐廳
  const sameCategory = restaurants.filter(r => r.type === restaurant.type);
  console.log(sameCategory);

  
  if(sameCategory.length != 1)
  {
    
    const textInfo = document.getElementById('text-container');

    // 取得目前已儲存的最愛餐廳
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
    // 渲染同類餐廳的小卡
    const moreRestaurant = document.getElementById('same-category-container');
    moreRestaurant.innerHTML = "";
    
    // 新增 "更多有關:" 的文字
    const text = document.createElement('div');
    text.innerHTML = `<h1 class="product-title">更多有關${restaurant.type}</h1>`;
    textInfo.appendChild(text);
  
    sameCategory.forEach(shop => {
      if(shop.name === restaurantName) {
        return;
      } 
      const item = document.createElement("div");
      item.className = "relevant-item";
  
      // 檢查餐廳是否已經在最愛
      const isFavorite = favorites.some(fav => fav.name === restaurant.name);
      
      item.innerHTML = `
        <div class="restaurant-card">
          <!-- 圖片和跳轉功能 -->
          <a href="restaurant-detail.html?name=${encodeURIComponent(shop.name)}" class="restaurant-image" 
             style="background-image: url('${shop.image}');">
          </a>
  
          <!-- 餐廳資訊 -->
          <div class="restaurant-info">
            <h3>${shop.name}</h3>
            <p>${shop.type}</p>
          </div>
  
          <!-- 按鈕功能 -->
          <div class="restaurant-actions">
            <button class="action-button" data-name="${shop.name}">
              ${isFavorite ? '❤️' : '🤍'}
            </button>
          </div>
        </div>
      `;
      moreRestaurant.appendChild(item);
    });
  }
} else {
  // 如果找不到餐廳資料，顯示錯誤訊息
  const restaurantInfo = document.getElementById('restaurant-info');
  restaurantInfo.innerHTML = `
    <p>找不到該餐廳資料。</p>
  `;
}
