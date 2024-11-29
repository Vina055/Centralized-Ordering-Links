const favorites = JSON.parse(localStorage.getItem('favorites')) || [];  // 從 localStorage 載入最愛餐廳

// 頁面載入時渲染所有餐廳
document.addEventListener('DOMContentLoaded', () => { 
    showFavorites(); 
});

// document.getElementById('show-favorites-button').addEventListener('click', showFavorites);
document.getElementById('clear-favorites-button').addEventListener('click', clearFavorites);

// Show favorite list
function showFavorites()
{
    const favoritesContainer = document.getElementById('favorite-container');
    favoritesContainer.innerHTML = ""; // 清空舊內容
    console.log("函式已執行");

    // Show favorite restaurants in the list
    favorites.forEach(restaurant => { 
        const item = document.createElement("div");
        item.className = "favorite-item"; 
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
        favoritesContainer.appendChild(item); 
    });
}

// Clear all favorites
function clearFavorites() {
    favorites.length = 0; // 清空陣列
    localStorage.removeItem('favorites'); // 清空 localStorage

    console.log("clear favorite success");
    // 更新顯示
    document.getElementById('favorite-container').innerHTML = ""; 
}


