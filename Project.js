// 假設餐廳資料存在這裡
const restaurants = [
  { name: "Pasta", type: "Italian", image: "pasta.jpg", url: "#" },
  { name: "Burger", type: "Fast Food", image: "burger.jpg", url: "#" },
  { name: "Sushi", type: "Japanese", image: "sushi.jpg", url: "#" },
  { name: "Bento Box", type: "Bento", image: "bento.jpg", url: "#" },
  // Add other restaurants as needed
];

const favorites = [];

// 渲染餐廳
function renderRestaurants(filter = "all") {
  const container = document.getElementById("menu-container");
  container.innerHTML = ""; // 清空目前顯示的餐廳
  const filtered = filter === "all" ? restaurants : restaurants.filter(r => r.type === filter);

  filtered.forEach((restaurant, index) => {
    const item = document.createElement("div");
    item.className = "menu-item";
    item.innerHTML = `
      <img src="${restaurant.image}" alt="${restaurant.name}">
      <h3>${restaurant.name}</h3>
      <button onclick="addToFavorites(${index})">Add to Favorites</button>
      <button onclick="shareRestaurant('${restaurant.url}')">Share</button>
    `;
    container.appendChild(item);
  });
}

// 將餐廳加入我的最愛
function addToFavorites(index) {
  const favoriteList = document.getElementById("favorites");
  if (!favorites.includes(restaurants[index])) {
    favorites.push(restaurants[index]);
    const li = document.createElement("li");
    li.textContent = restaurants[index].name;
    favoriteList.appendChild(li);
  }
}

// 分享餐廳連結
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
document.querySelectorAll('.category').forEach(button => {
  button.addEventListener('click', (e) => {
    const type = e.target.getAttribute('data-type');
    renderRestaurants(type); // 渲染對應分類的餐廳
  });
});

// 初始化渲染所有餐廳
renderRestaurants("all");

// 控制側邊欄開關
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}
