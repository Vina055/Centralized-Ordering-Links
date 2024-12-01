import { restaurants } from './restaurants.js';

// Initialize
renderRestaurants();

// 頁面載入時渲染所有餐廳
document.addEventListener('DOMContentLoaded', () => {
  // 在頁面載入時渲染所有餐廳
  renderRestaurants();

  // 綁定分類卡片的點擊事件
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

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  filtered.forEach((restaurant) => {
    const isFavorite = favorites.some(fav => fav.name === restaurant.name);

    const item = document.createElement("div");
    item.className = "menu-item";
    item.innerHTML = `
      <div class="restaurant-card">
        <a href="restaurant-detail.html?name=${encodeURIComponent(restaurant.name)}" class="restaurant-image" 
           style="background-image: url('${restaurant.image}');">
        </a>
        <div class="restaurant-info">
          <h3>${restaurant.name}</h3>
          <p>${restaurant.type}</p>
        </div>
        <a href="#" class="heart ${isFavorite ? "active" : ""}" data-name="${restaurant.name}">
          <i class="fas fa-heart"></i>
        </a>

      </div>
    `;
    container.appendChild(item);
  });
}


// 點擊切換喜歡狀態
document.getElementById("menu-container").addEventListener("click", (event) => {
  const target = event.target;

  // 確保只處理心形按鈕的點擊
  if (target.classList.contains("fa-heart") || target.classList.contains("heart")) {
    event.preventDefault(); // 阻止 `<a>` 的預設跳轉行為

    const heart = target.closest(".heart"); // 確定是點擊 `.heart` 或內部的 `.fa-heart`
    const restaurantName = heart.getAttribute("data-name");

    // 切換 localStorage 中的喜歡狀態
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const restaurantIndex = favorites.findIndex(fav => fav.name === restaurantName);

    if (restaurantIndex === -1) {
      const restaurant = restaurants.find(r => r.name === restaurantName);
      favorites.push(restaurant);
    } else {
      favorites.splice(restaurantIndex, 1);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

    // 更新按鈕樣式
    heart.classList.toggle("active");
  }
});


// 初始化頁面
document.addEventListener("DOMContentLoaded", () => {
  renderRestaurants(); // 頁面載入時渲染所有餐廳
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
