const restaurants = [
  { name: "Pasta", type: "Italian", image: "pasta.jpg", url: "#" },
  { name: "Burger", type: "Fast Food", image: "burger.jpg", url: "#" },
  { name: "Sushi", type: "Japanese", image: "sushi.jpg", url: "#" },
];

const favorites = [];

function renderRestaurants(filter = "all") {
  const container = document.getElementById("menu-container");
  container.innerHTML = "";
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

function addToFavorites(index) {
  const favoriteList = document.getElementById("favorites");
  if (!favorites.includes(restaurants[index])) {
      favorites.push(restaurants[index]);
      const li = document.createElement("li");
      li.textContent = restaurants[index].name;
      favoriteList.appendChild(li);
  }
}

function shareRestaurant(url) {
  navigator.clipboard.writeText(url).then(() => {
      alert("Restaurant URL copied to clipboard!");
  });
}

document.getElementById("filter").addEventListener("change", (e) => {
  renderRestaurants(e.target.value);
});

document.getElementById("toggle-theme").addEventListener("click", toggleTheme);

// Initialize
renderRestaurants();
// 搜尋功能
document.getElementById('search').addEventListener('input', (event) => {
  const query = event.target.value.toLowerCase();
  const cards = document.querySelectorAll('.restaurant-card');

  cards.forEach((card) => {
      const name = card.querySelector('h3').textContent.toLowerCase();
      card.style.display = name.includes(query) ? 'flex' : 'none';
  });
});
// 控制側邊欄開關
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

