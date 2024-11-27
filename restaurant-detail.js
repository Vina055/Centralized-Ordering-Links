import { restaurants } from './restaurants.js';  // 引入餐廳資料

// 取得 URL 中的餐廳名稱參數
const urlParams = new URLSearchParams(window.location.search);
const restaurantName = urlParams.get('name');

// 根據餐廳名稱找到對應的餐廳資料
const restaurant = restaurants.find(r => r.name === restaurantName);

if (restaurant) {
  // 渲染餐廳的詳細資料
  const restaurantInfo = document.getElementById('restaurant-info');
  restaurantInfo.innerHTML = `
    <h2>${restaurant.name}</h2>
    <img src="${restaurant.image}" alt="${restaurant.name}" />
    <p><strong>分類:</strong> ${restaurant.type}</p>
    <p><strong>地址:</strong> ${restaurant.address}</p>
    <p><strong>連絡電話:</strong> ${restaurant.phone}</p>
    <p><strong>點餐網址:</strong> <a href="${restaurant.orderUrl}" target="_blank">點餐</a></p>
    <p><strong>標籤:</strong> ${restaurant.tags.join(", ")}</p>
  `;
} else {
  // 如果找不到餐廳資料，顯示錯誤訊息
  const restaurantInfo = document.getElementById('restaurant-info');
  restaurantInfo.innerHTML = `
    <p>找不到該餐廳資料。</p>
  `;
}
