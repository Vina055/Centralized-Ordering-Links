// 假設餐廳資料存在這裡
const restaurants = [
  { name: "Pasta", type: "Italian", image: "pasta.jpg", url: "#" },
  { name: "Burger", type: "Fast Food", image: "burger.jpg", url: "#" },
  { name: "Sushi", type: "Japanese", image: "sushi.jpg", url: "#" },
  { name: "Bento Box", type: "Bento", image: "bento.jpg", url: "#" },
  // Add other restaurants as needed
];

// 渲染餐廳
function renderRestaurants(filter = "all") {
  const container = document.getElementById("menu-container");
  container.innerHTML = "";

  // 過濾餐廳資料
  const filteredRestaurants = filter === "all" ? restaurants : restaurants.filter(r => r.type === filter);

  // 生成並插入餐廳項目 
  restaurants.forEach(restaurant => { 
    const item = document.createElement("li"); 
    item.innerHTML = ` 
    <img src="${restaurant.image}" alt="${restaurant.name}" /> 
    <button onclick="addToFavorites('${restaurant.name}')">Add to Favorites</button>
    <h3>${restaurant.name}</h3> `; 
    container.appendChild(item); 
  });
}

// 將餐廳加入我的最愛
function addToFavorites(restaurantName) {
  const restaurant = restaurants.find(r => r.name === restaurantName);

  // 檢查餐廳是否已在 favorites 中
  const restaurantIndex = favorites.findIndex(fav => fav.name === restaurantName);

  // If restaurant is not in favorites, add it
  if (restaurantIndex === -1) {
    favorites.push(restaurant);
  } else {
    // Otherwise, remove it
    favorites.splice(restaurantIndex, 1);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
  
  // 更新最愛區域顯示
  showFavorites();
}

document.getElementById('show-favorites').addEventListener('click', showFavorites);
document.getElementById('clear-favorites').addEventListener('click', clearFavorites);

// Show favorite list
function showFavorites()
{
  const favoritesContainer = document.getElementById('favorite-container');
  favoritesContainer.innerHTML = ""; // 清空舊內容

  // Show favorite restaurants in the list
  favorites.forEach(restaurant => { 
    const item = document.createElement("li"); 
    item.innerHTML = ` 
    <img src="${restaurant.image}" alt="${restaurant.name}" /> 
    <button onclick="addToFavorites('${restaurant.name}')">Add to Favorites</button>
    <h3>${restaurant.name}</h3> `; 
    favoritesContainer.appendChild(item); 
  });
}

// Clear all favorites
function clearFavorites() {
  favorites = []; // 清空陣列
  localStorage.removeItem('favorites'); // 清空 localStorage

  // 更新顯示
  document.getElementById('favorite-container').innerHTML = ''; 
  // showFavorites();
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
document.querySelectorAll('.category').forEach(button => {
  button.addEventListener('click', (e) => {
    const type = e.target.getAttribute('data-type');
    renderRestaurants(type); // 渲染對應分類的餐廳
  });
});

// 初始化渲染所有餐廳
renderRestaurants("all");
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// 控制側邊欄開關
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}
