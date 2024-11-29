import { restaurants } from './restaurants.js';

// Initialize
renderRestaurants();

// 頁面載入時渲染所有餐廳
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.category-card').forEach(button => {
    button.addEventListener('click', (e) => {
      const type = e.target.closest('.category-card').getAttribute('data-type');
      renderRestaurants(type); // 渲染對應分類的餐廳
    });
  });
});

// 渲染餐廳
function renderRestaurants(filter = "all") {
  const container = document.getElementById("menu-container");
  container.innerHTML = ""; // 清空目前顯示的餐廳
  const filtered = filter === "all" ? restaurants : restaurants.filter(r => r.type === filter);

  // 取得目前已儲存的最愛餐廳
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  filtered.forEach((restaurant, index) => {
    const item = document.createElement("div");
    item.className = "menu-item";
    
    // 檢查餐廳是否已經在最愛
    const isFavorite = favorites.some(fav => fav.name === restaurant.name);
    
    item.innerHTML = `
      <div class="restaurant-card">
        <!-- 圖片和跳轉功能 -->
        <a href="restaurant-detail.html?name=${encodeURIComponent(restaurant.name)}" class="restaurant-image" 
           style="background-image: url('${restaurant.image}');">
        </a>

        <!-- 餐廳資訊 -->
        <div class="restaurant-info">
          <h3>${restaurant.name}</h3>
          <p>${restaurant.type}</p>
        </div>

        <!-- 按鈕功能 -->
        <div class="restaurant-actions">
          <button class="action-button" data-name="${restaurant.name}">
            ${isFavorite ? '從最愛移除' : '加入我的最愛'}
          </button>
        </div>
      </div>
    `;
    container.appendChild(item);
  });
}

// 加入或移除最愛
function toggleFavorite(restaurantName) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];  // 從 localStorage 載入最愛餐廳

  // 查找餐廳
  const restaurant = restaurants.find(r => r.name === restaurantName);
  if (!restaurant) return;

  // 檢查餐廳是否已經在最愛中
  const restaurantIndex = favorites.findIndex(fav => fav.name === restaurantName);

  if (restaurantIndex === -1) {
    // 如果餐廳不在最愛中，加入最愛
    favorites.push(restaurant);
  } else {
    // 如果餐廳已在最愛中，移除最愛
    favorites.splice(restaurantIndex, 1);
  }

  // 儲存更新後的最愛餐廳
  localStorage.setItem('favorites', JSON.stringify(favorites));

  // 重新渲染餐廳列表
  renderRestaurants();
}

// 事件代理邏輯，處理加入/移除最愛
document.getElementById('menu-container').addEventListener('click', (event) => {
  // 確保點擊的目標是按鈕
  if (event.target.classList.contains('action-button')) {
    const restaurantName = event.target.getAttribute('data-name');
    toggleFavorite(restaurantName);
  }
});

// 搜尋功能
document.getElementById('search').addEventListener('input', (event) => {
  const query = event.target.value.toLowerCase();
  const cards = document.querySelectorAll('.menu-item');
  cards.forEach((card) => {
    const name = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = name.includes(query) ? 'flex' : 'none';
  });
});

// 點選分類篩選餐廳
document.querySelectorAll('.category-card').forEach(button => {
  button.addEventListener('click', (e) => {
    const type = e.target.getAttribute('data-type');
    renderRestaurants(type); // 渲染對應分類的餐廳 
  });
});
