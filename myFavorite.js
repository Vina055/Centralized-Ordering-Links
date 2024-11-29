const favorites = JSON.parse(localStorage.getItem('favorites')) || []; // 從 localStorage 載入最愛餐廳

// 頁面載入時渲染所有餐廳
document.addEventListener('DOMContentLoaded', () => {
    showFavorites();
});

// 綁定清空我的最愛按鈕
document.getElementById('clear-favorites-button').addEventListener('click', clearFavorites);

// 顯示收藏清單
function showFavorites() {
    const favoritesContainer = document.getElementById('favorite-container');
    favoritesContainer.innerHTML = ""; // 清空舊內容

    // 如果沒有最愛，顯示提示
    if (favorites.length === 0) {
        favoritesContainer.innerHTML = '<p>目前沒有收藏的餐廳。</p>';
        return;
    }

    // 渲染每個收藏項目
    favorites.forEach(restaurant => {
        const item = document.createElement("div");
        item.className = "favorite-item";
        item.innerHTML = `
            <div class="restaurant-card">
                <!-- 圖片和跳轉功能 -->
                <a href="restaurant-detail.html?name=${encodeURIComponent(restaurant.name)}" class="restaurant-image" 
                style="background-image: url('${restaurant.image}');"></a>

                <!-- 餐廳資訊 -->
                <div class="restaurant-info">
                    <h3>${restaurant.name}</h3>
                    <p>${restaurant.type}</p>
                </div>

                <!-- 按鈕功能 -->
                <div class="restaurant-actions">
                    <button class="action-button" onclick="removeFavorite('${restaurant.name}')">移除最愛</button>
                </div>
            </div>
        `;
        favoritesContainer.appendChild(item);
    });
}

// 移除收藏
function removeFavorite(name) {
    const index = favorites.findIndex(favorite => favorite.name === name);
    if (index !== -1) {
        favorites.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        showFavorites();
    }
}

// 清空我的最愛
function clearFavorites() {
    favorites.length = 0; // 清空陣列
    localStorage.removeItem('favorites'); // 清空 localStorage
    showFavorites(); // 更新顯示
}
