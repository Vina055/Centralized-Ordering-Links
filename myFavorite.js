// 頁面載入時渲染所有餐廳
document.addEventListener('DOMContentLoaded', () => { 
    showFavorites(); 
});

// 清除最愛餐廳的事件
document.getElementById('clear-favorites-button').addEventListener('click', clearFavorites);

// 顯示最愛餐廳
function showFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []; // 從 localStorage 載入最愛餐廳

    const favoritesContainer = document.getElementById('favorite-container');
    favoritesContainer.innerHTML = ""; // 清空舊內容
    console.log("函式已執行");

    // 顯示最愛餐廳
    favorites.forEach(restaurant => { 
        const isFavorite = favorites.some(fav => fav.name === restaurant.name);

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
                    <a href="#" class="heart ${isFavorite ? "active" : ""}" data-name="${restaurant.name}">
                        <i class="fas fa-heart"></i>
                    </a>
                </div>
            </div>
        `; 
        favoritesContainer.appendChild(item); 
    });

    /* 為所有按鈕綁定事件
    document.querySelectorAll('.heart').forEach(button => {
        button.addEventListener('click', (event) => {
            const restaurantName = event.target.getAttribute('data-name');
            toggleFavorite(restaurantName, event.target); // 呼叫加入/移除最愛函數
            console.log("rest=" + restaurantName);
            console.log("event=" + event.target);
        });
    });
    */
}

// 清除所有最愛餐廳
function clearFavorites() {
    favorites.length = 0; // 清空陣列
    localStorage.removeItem('favorites'); // 清空 localStorage

    console.log("clear favorite success");
    // 更新顯示
    document.getElementById('favorite-container').innerHTML = ""; 
}

// 點擊切換喜歡狀態
document.getElementById("favorite-container").addEventListener("click", (event) => {
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
        showFavorites();
    }
});


