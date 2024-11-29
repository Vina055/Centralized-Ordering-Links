const favorites = JSON.parse(localStorage.getItem('favorites')) || [];  // 從 localStorage 載入最愛餐廳

// 頁面載入時渲染所有餐廳
document.addEventListener('DOMContentLoaded', () => { 
    showFavorites(); 
});

// 清除最愛餐廳的事件
document.getElementById('clear-favorites-button').addEventListener('click', clearFavorites);

// 顯示最愛餐廳
function showFavorites() {
    const favoritesContainer = document.getElementById('favorite-container');
    favoritesContainer.innerHTML = ""; // 清空舊內容
    console.log("函式已執行");

    // 顯示最愛餐廳
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
                <button class="action-button remove-favorite">🤍</button>
            </div>
        </div>
        `; 
        favoritesContainer.appendChild(item); 
    });

    // 為所有移除最愛的按鈕綁定事件
    document.querySelectorAll('.remove-favorite').forEach(button => {
        button.addEventListener('click', (event) => {
            const restaurantName = event.target.closest('.restaurant-card').querySelector('h3').textContent;
            removeFromFavorites(restaurantName); // 呼叫移除最愛的函數
        });
    });
}

// 清除所有最愛餐廳
function clearFavorites() {
    favorites.length = 0; // 清空陣列
    localStorage.removeItem('favorites'); // 清空 localStorage

    console.log("clear favorite success");
    // 更新顯示
    document.getElementById('favorite-container').innerHTML = ""; 
}

// 移除最愛餐廳
function removeFromFavorites(restaurantName) {
    const index = favorites.findIndex(r => r.name === restaurantName);
    if (index !== -1) {
        favorites.splice(index, 1); // 移除餐廳
        localStorage.setItem('favorites', JSON.stringify(favorites)); // 更新 localStorage
        showFavorites(); // 重新顯示最愛餐廳
    }
}
