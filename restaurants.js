const restaurants = [
    { 
        name: "小石鍋", 
        type: "Hotpot", //要和Project.html的data-type一致
        image: "pasta.jpg", 
        url: "#", 
        orderUrl: "https://order-pasta.com",  // 點餐網址
        phone: "02 2908 3333",  // 連絡電話
        address: "新北市新莊區建國一路5號",  // 地址
        tags: ["火鍋"]  // 標籤
    },
    { 
        name: "12MINI快煮鍋", 
        type: "Hotpot", 
        image: "burger.jpg", 
        url: "#", 
        orderUrl: "https://order-burger.com", 
        phone: "02 2902 2612", 
        address: "新北市新莊區建國一路2號", 
        tags: ["火鍋"]
    },
    { 
        name: "同伙小火鍋", 
        type: "Hotpot", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2901 7126", 
        address: "新北市新莊區建國一路2-1號", 
        tags: ["火鍋"]
    },
    { 
        name: "石二鍋", 
        type: "Hotpot", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2908 4166", 
        address: "新北市新莊區建國一路61號", 
        tags: ["火鍋"]
    },
    { 
        name: "8鍋新穎時尚臭臭鍋", 
        type: "Hotpot", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2903 4863", 
        address: "新北市新莊區建國一路46號", 
        tags: ["火鍋"]
    },
    { 
        name: "五路鍋聖", 
        type: "Hotpot", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2903 0658", 
        address: "新北市新莊區建國一路40號", 
        tags: ["火鍋"]
    },
    { 
        name: "想初。享廚 Share Kitchen", 
        type: "Brunch", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2904 6666", 
        address: "新北市新莊區中正路514巷91號", 
        tags: ["早午餐"]
    },
    { 
        name: "蛋蛋早餐屋", 
        type: "Brunch", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2901 8981", 
        address: "新北市新莊區中正路514巷83號", 
        tags: ["早午餐"]
    },
    { 
        name: "愛玉早餐店", 
        type: "Brunch", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2908 5218", 
        address: "新北市新莊區中正路514巷53弄34號", 
        tags: ["早午餐"]
    },
    { 
        name: "吉飽早餐", 
        type: "Brunch", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2901 7040", 
        address: "新北市新莊區中正路514巷37號", 
        tags: ["早午餐"]
    },
    { 
        name: "晨間廚房", 
        type: "Brunch", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2907 6806", 
        address: "新北市新莊區中正路514巷23號1樓", 
        tags: ["早午餐"]
    },
    { 
        name: "有朝一日", 
        type: "Brunch", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2901 2286", 
        address: "新北市新莊區中正路514巷53弄2號2樓", 
        tags: ["早午餐"]
    },
    { 
        name: "元珍食堂", 
        type: "Korean", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2902 8579", 
        address: "新北市新莊區中正路514巷31號", 
        tags: ["韓式"]
    },
    { 
        name: "韓聚食", 
        type: "Korean", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "0979 546 684", 
        address: "新北市新莊區中正路514巷21號", 
        tags: ["韓式"]
    },
    { 
        name: "饞饞燒肉", 
        type: "Korean", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2908 4608", 
        address: "新北市新莊區建國一路11號", 
        tags: ["韓式"]
    },
    // 其他餐廳資料...
];

// 輸出餐廳資料
export { restaurants };