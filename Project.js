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

// Initialize
renderRestaurants();

// 渲染餐廳
function renderRestaurants(filter = "all") {
  const container = document.getElementById("menu-container");
  container.innerHTML = ""; // 清空目前顯示的餐廳
  const filtered = filter === "all" ? restaurants : restaurants.filter(r => r.type === filter);

  filtered.forEach((restaurant, index) => {
    const item = document.createElement("div");
    item.className = "menu-item";
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
          <button class="action-button">加入我的最愛</button>
        </div>
      </div>
    `;
    container.appendChild(item);
  });

}


function addToFavorites(restaurantName) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];  // 從 localStorage 載入最愛餐廳

  // get the row list in restaurant
  const restaurant = restaurants.find(r => r.name === restaurantName);
  
  // check if the restaurant is in the favorite
  const restaurantIndex = favorites.findIndex(fav => fav.name === restaurantName);

  // If restaurant is not in favorites, add it
  if (restaurantIndex === -1) {
    favorites.push(restaurant);
  }
  else {
    favorites.splice(restaurant, 1);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
  // console.log('now favorite is ' + )
}

function shareRestaurant(url) {
  navigator.clipboard.writeText(url).then(() => {
      alert("Restaurant URL copied to clipboard!");
  });
}


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

// 事件代理邏輯
document.getElementById('menu-container').addEventListener('click', (event) => {
  // 確保點擊的目標是按鈕
  if (event.target.classList.contains('action-button')) {
      // 找到按鈕所屬的 .restaurant-card
      const restaurantCard = event.target.closest('.restaurant-card');

      // 從該卡片內部獲取 <h3> 的文字
      const restaurantName = restaurantCard.querySelector('h3').textContent;

      // 呼叫處理函式，並傳入餐廳名稱
      console.log(`You clicked to add: ${restaurantName}`);
      addToFavorites(restaurantName);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const favoriteLink = document.getElementById("favorite-link");

  favoriteLink.addEventListener("click", function (event) {
      event.preventDefault(); // 防止立即跳轉
      favoriteLink.classList.toggle("active"); // 切換放大效果
      setTimeout(() => {
          window.location.href = favoriteLink.href; // 動畫結束後跳轉
      }, 300); // 延遲300毫秒完成動畫
  });
});
