const restaurants = [
    { 
        name: "Pasta", 
        type: "Italian", 
        image: "pasta.jpg", 
        url: "#", 
        orderUrl: "https://order-pasta.com",  // 點餐網址
        phone: "+123456789",  // 連絡電話
        address: "123 Pasta St.",  // 地址
        tags: ["Spaghetti", "Carbonara"]  // 標籤
    },
    { 
        name: "Burger", 
        type: "Fast Food", 
        image: "burger.jpg", 
        url: "#", 
        orderUrl: "https://order-burger.com", 
        phone: "+987654321", 
        address: "456 Burger Ave.", 
        tags: ["Cheeseburger", "Fries"]
    },
    { 
        name: "Sushi", 
        type: "Japanese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "+1122334455", 
        address: "789 Sushi Rd.", 
        tags: ["Salmon", "Nigiri"]
    },
    // 其他餐廳資料...
];

// 輸出餐廳資料
export { restaurants };
