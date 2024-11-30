const restaurants = [
    { 
        name: "小石鍋", 
        type: "Hotpot", //要和Project.html的data-type一致
        image: ('restaurant/小石鍋.jpg'), //餐廳圖片

        url: "https://maps.app.goo.gl/bDAFxE1tV438ByEF8", 
        orderUrl: "#",  // 點餐網址
        phone: "02 2908 3333",  // 連絡電話
        address: "新北市新莊區建國一路5號",  // 地址
        tags: ["火鍋"]  // 標籤
    },
    { 
        name: "12MINI快煮鍋", 
        type: "Hotpot", 
        image: ('restaurant/12mini.jpg'), 
        url: "https://maps.app.goo.gl/DWFMjoXTKc4VNKp27", 
        orderUrl: "#", 
        phone: "02 2902 2612", 
        address: "新北市新莊區建國一路2號", 
        tags: ["火鍋"]
    },
    { 
        name: "同伙小火鍋", 
        type: "Hotpot", 
        image: ('restaurant/同伙.jpg'), 
        url: "https://maps.app.goo.gl/wAA6xjcme1SkzMpg8", 
        orderUrl: "#", 
        phone: "02 2901 7126", 
        address: "新北市新莊區建國一路2-1號", 
        tags: ["火鍋"]
    },
    { 
        name: "石二鍋", 
        type: "Hotpot", 
        image: ('restaurant/石二鍋.jpg'), 
        url: "https://maps.app.goo.gl/QyQ4S6WzLZa8dKNe6", 
        orderUrl: "https://liff.line.me/1645278921-kWRPP32q/?accountId=12hotpot", 
        phone: "02 2908 4166", 
        address: "新北市新莊區建國一路61號", 
        tags: ["火鍋"]
    },
    { 
        name: "8鍋新穎時尚臭臭鍋", 
        type: "Hotpot", 
        image: ('restaurant/8鍋.jpg'), 
        url: "https://maps.app.goo.gl/GoDEUgy9x3Vb7uva7", 
        orderUrl: "#", 
        phone: "02 2903 4863", 
        address: "新北市新莊區建國一路46號", 
        tags: ["火鍋"]
    },
    { 
        name: "五路鍋聖", 
        type: "Hotpot", 
        image: ('restaurant/五路鍋聖.jpg'), 
        url: "https://maps.app.goo.gl/5i9Uzkgp2dWrZWpB9", 
        orderUrl: "#", 
        phone: "02 2903 0658", 
        address: "新北市新莊區建國一路40號", 
        tags: ["火鍋"]
    },
    { 
        name: "想初。享廚 Share Kitchen", 
        type: "Brunch", 
        image: ('restaurant/想初.jpg'), 
        url: "https://maps.app.goo.gl/dU3vtr6G3LLsQzoH7", 
        orderUrl: "https://line.me/R/ti/p/%40803uxnec", 
        phone: "02 2904 6666", 
        address: "新北市新莊區中正路514巷91號", 
        tags: ["早午餐"]
    },
    { 
        name: "蛋蛋早餐屋", 
        type: "Brunch", 
        image: ('restaurant/蛋蛋.jpg'), 
        url: "https://maps.app.goo.gl/rUPgHghpW69YJcDR6", 
        orderUrl: "#", 
        phone: "02 2901 8981", 
        address: "新北市新莊區中正路514巷83號", 
        tags: ["早午餐"]
    },
    { 
        name: "愛玉早餐店", 
        type: "Brunch", 
        image: ('restaurant/愛玉.jpg'), 
        url: "https://maps.app.goo.gl/gNV5y67abebbFSLdA", 
        orderUrl: "https://maps.app.goo.gl/cB3xDrcTb5vwoWX19", 
        phone: "02 2908 5218", 
        address: "新北市新莊區中正路514巷53弄34號", 
        tags: ["早午餐"]
    },
    { 
        name: "吉飽早餐", 
        type: "Brunch", 
        image: ('restaurant/吉飽.jpg'), 
        url: "https://maps.app.goo.gl/jqpuM7qWLK5RVzBK6", 
        orderUrl: "https://fnb-qrcode.trendlab.ai/v15/home?braId=822670856168800256&codeId=823488362169102336", 
        phone: "02 2901 7040", 
        address: "新北市新莊區中正路514巷37號", 
        tags: ["早午餐"]
    },
    { 
        name: "晨間廚房", 
        type: "Brunch", 
        image: ('restaurant/晨間廚房.jpg'), 
        url: "https://maps.app.goo.gl/JgHgWsdCGumGs8Q99", 
        orderUrl: "https://www.mk2000.com.tw/load_page/get_qa_page/4", 
        phone: "02 2907 6806", 
        address: "新北市新莊區中正路514巷23號1樓", 
        tags: ["早午餐"]
    },
    { 
        name: "有朝一日", 
        type: "Brunch", 
        image: ('restaurant/有朝一日.jpg'), 
        url: "https://maps.app.goo.gl/CQAzbTVVMd6XfvRJ7", 
        orderUrl: "#", 
        phone: "02 2901 2286", 
        address: "新北市新莊區中正路514巷53弄2號2樓", 
        tags: ["早午餐"]
    },
    { 
        name: "初胖鐵板吐司", 
        type: "Brunch", 
        image: ('restaurant/初胖.jpg'), 
        url: "https://maps.app.goo.gl/JfXCKdRGJVZ4uBhLA", 
        orderUrl: "https://liff.line.me/1645278921-kWRPP32q/?accountId=150tcaky", 
        phone: "0988 690 255", 
        address: "新北市新莊區中正路514巷63號", 
        tags: ["早午餐"]
    },
    { 
        name: "元珍食堂", 
        type: "Korean", 
        image: ('restaurant/元珍食堂.jpg'), 
        url: "https://maps.app.goo.gl/1YvGToyF1GYpTLQJ6", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2902 8579", 
        address: "新北市新莊區中正路514巷31號", 
        tags: ["韓式"]
    },
    { 
        name: "韓聚食", 
        type: "Korean", 
        image: ('restaurant/韓聚食.jpg'), 
        url: "https://maps.app.goo.gl/HpYtbsge6AhU11VJ6", 
        orderUrl: "https://order-sushi.com", 
        phone: "0979 546 684", 
        address: "新北市新莊區中正路514巷21號", 
        tags: ["韓式"]
    },
    { 
        name: "饞饞燒肉", 
        type: "Korean", 
        image: ('restaurant/潺潺.jpg'), 
        url: "https://maps.app.goo.gl/jggU5jrf3USRREbm9", 
        orderUrl: "https://line.me/R/ti/p/@584rlkmk?from=page&liff.referrer=https%3A%2F%2Fwww.google.com.tw%2F&accountId=584rlkmk", 
        phone: "02 2908 4608", 
        address: "新北市新莊區建國一路11號", 
        tags: ["韓式"]
    },
    { 
        name: "雞加酒", 
        type: "Korean", 
        image: ('restaurant/雞加酒.jpg'), 
        url: "https://maps.app.goo.gl/Bj6M1Q4Rt3nauMhp6", 
        orderUrl: "#", 
        phone: "02 2906 6915", 
        address: "新北市新莊區中正路514巷35號", 
        tags: ["韓式"]
    },
    { 
        name: "71號咖哩", 
        type: "Japanese", 
        image: ('restaurant/71號咖哩.jpg'), 
        url: "https://maps.app.goo.gl/sySDHiWEBa7bz53k7", 
        orderUrl: "#", 
        phone: "02 2902 8186", 
        address: "新北市新莊區中正路514巷71號", 
        tags: ["日式"]
    },
    { 
        name: "一口入魂雞白湯拉麵", 
        type: "Japanese", 
        image: ('restaurant/一口入魂.jpg'), 
        url: "https://maps.app.goo.gl/S729KvBDG1w7q31H8", 
        orderUrl: "https://shop.ichefpos.com/store/lS9orgcg/ordering", 
        phone: "02 2901 8267", 
        address: "新北市新莊區中正路514巷51號1樓", 
        tags: ["日式"]
    },
    { 
        name: "魚多甜", 
        type: "Japanese", 
        image: ('restaurant/魚多甜.jpg'), 
        url: "https://maps.app.goo.gl/v8kkpbzB44P5fM8k7", 
        orderUrl: "#", 
        phone: "02 2908 8505", 
        address: "新北市新莊區建國一路1號", 
        tags: ["日式"]
    },
    { 
        name: "麵屋三郎", 
        type: "Japanese", 
        image: ('restaurant/麵屋三郎.jpg'), 
        url: "https://maps.app.goo.gl/LCfsW5vrJHtAmnWf6", 
        orderUrl: "#", 
        phone: "無", 
        address: "新北市新莊區建國一路92號", 
        tags: ["日式"]
    },
    { 
        name: "古米特Gourmet Pasta", 
        type: "Western", 
        image: ('restaurant/古米特.jpg'), 
        url: "https://maps.app.goo.gl/6X2ZXExEs54aggss5", 
        orderUrl: "#", 
        phone: "02 2908 7212", 
        address: "新北市新莊區中正路514巷47號", 
        tags: ["西式"]
    },
    { 
        name: "THE PIZZA 惹披薩", 
        type: "Western", 
        image: ('restaurant/the pizza.jpg'), 
        url: "https://maps.app.goo.gl/WU6DC2mi5u2FLk8U8", 
        orderUrl: "#", 
        phone: "02 2902 4516", 
        address: "新北市新莊區中正路514巷43號", 
        tags: ["西式"]
    },
    { 
        name: "安東尼義式廚房", 
        type: "Western", 
        image: ('restaurant/安東尼.jpg'), 
        url: "https://maps.app.goo.gl/jj24o36b27LA2Mu5A", 
        orderUrl: "https://maps.app.goo.gl/CQAzbTVVMd6XfvRJ7", 
        phone: "02 2901 2660", 
        address: "新北市新莊區中正路514巷39號", 
        tags: ["西式"]
    },
    { 
        name: "Mr.Omelet歐姆先生", 
        type: "Western", 
        image: ('restaurant/歐姆.jpg'), 
        url: "https://maps.app.goo.gl/7kB37MAKwx3uegZd6", 
        orderUrl: "#", 
        phone: "02 2901 8582", 
        address: "新北市新莊區中正路514巷41號", 
        tags: ["西式"]
    },
    { 
        name: "靴子義大利餐館", 
        type: "Western", 
        image: ('restaurant/靴子.jpg'), 
        url: "https://maps.app.goo.gl/tv32a8WeJeLatc2v8", 
        orderUrl: "https://line.me/R/ti/p/@sro5367c", 
        phone: "02 2906 8820", 
        address: "新北市新莊區中正路593號", 
        tags: ["西式"]
    },
    { 
        name: "夯麵坊", 
        type: "Western", 
        image: ('restaurant/夯面坊.jpg'), 
        url: "https://maps.app.goo.gl/yh5FXJ9RSJAkK1x28", 
        orderUrl: "#", 
        phone: "02 2903 3636", 
        address: "新北市新莊區建國一路10號", 
        tags: ["西式"]
    },
    { 
        name: "力好炸雞", 
        type: "Fast Food", 
        image: ('restaurant/力好.jpg'), 
        url: "https://maps.app.goo.gl/rnGDNW5baAjtUqJR9", 
        orderUrl: "https://line.me/R/ti/p/@474kahma?ts=10272303&oat_content=url", 
        phone: "0970 797 574", 
        address: "新北市新莊區中正路514巷99號", 
        tags: ["速食"]
    },
    { 
        name: "OPEN YANG沙拉飯", 
        type: "Bento", 
        image: ('restaurant/open yang.jpg'), 
        url: "https://maps.app.goo.gl/5R6gaYK5PVsgsMGM7", 
        orderUrl: "https://shop.ichefpos.com/store/FWtXw1dm/ordering", 
        phone: "02 2974 2728", 
        address: "新北市新莊區中正路514巷99-5號", 
        tags: ["便當"]
    },
    { 
        name: "方禾食呂", 
        type: "Bento", 
        image: ('restaurant/方禾食呂.jpg'), 
        url: "https://maps.app.goo.gl/DmGUM9qu1nfv6rTg9", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2908 1397", 
        address: "新北市新莊區中正路514巷53弄39號", 
        tags: ["便當"]
    },
    { 
        name: "食全池上便當", 
        type: "Bento", 
        image: ('restaurant/食全.jpg'), 
        url: "https://maps.app.goo.gl/F6nAnK4zCLJhfuWh6", 
        orderUrl: "#", 
        phone: "02 2902 6585", 
        address: "新北市新莊區建國一路42號", 
        tags: ["便當"]
    },
    { 
        name: "Miss Energy 能量小姐", 
        type: "Bento", 
        image: ('restaurant/能量小姐.jpg'), 
        url: "https://maps.app.goo.gl/qnAjLSahNtgyjpod9", 
        orderUrl: "https://www.eathere.com.tw/MaceWebPhone/order.php?U3RvqscrgncmVJRD0wMjI5MDI2NzUyJlR5cGU9MiZUYWJsZU5hbWU9", 
        phone: "02 2902 6752", 
        address: "新北市新莊區建國一路24號", 
        tags: ["便當"]
    },
    { 
        name: "老賴土雞肉飯", 
        type: "Bento", 
        image: ('restaurant/老賴.jpg'), 
        url: "https://maps.app.goo.gl/yzxAK4MXgPAuNtyh8", 
        orderUrl: "#", 
        phone: "02 2901 6010", 
        address: "新北市新莊區建國一路26號", 
        tags: ["便當"]
    },
    { 
        name: "MY POKE買買波奇 夏威夷生魚飯", 
        type: "Bento", 
        image: ('restaurant/mypoke.jpg'), 
        url: "https://maps.app.goo.gl/Kib91Bb5c1f51LKeA", 
        orderUrl: "https://shop.ichefpos.com/store/mWMTSTrC/ordering", 
        phone: "0912 539 861", 
        address: "新北市新莊區中正路516巷之16號1樓", 
        tags: ["便當"]
    },
    { 
        name: "芊苡號", 
        type: "Bento",
        image: ('restaurant/阡乙好.jpg'), 
        url: "https://maps.app.goo.gl/xXAgXa8G1MRji8nv9", 
        orderUrl: "https://liff.line.me/1645278921-kWRPP32q/?accountId=493pkdkv", 
        phone: "0912 539 861", 
        address: "新北市新莊區中正路516巷之16號1樓", 
        tags: ["便當"]
    },
    { 
        name: "Mr.布魯", 
        type: "Bento", 
        image: ('restaurant/mr.布魯.jpg'), 
        url: "https://maps.app.goo.gl/Rd6pmsivYSqUaQKSA", 
        orderUrl: "https://liff.line.me/1645278921-kWRPP32q/?accountId=pbc3695c", 
        phone: "0922 951 158", 
        address: "新北市新莊區中正路514巷67號", 
        tags: ["便當"]
    },
    { 
        name: "泰國象泰式料理", 
        type: "Thai", 
        image: ('restaurant/泰國象.jpg'), 
        url: "https://maps.app.goo.gl/wf1HC8mQ1bqjfgRB6", 
        orderUrl: "#", 
        phone: "02 2902 5898", 
        address: "新北市新莊區中正路514巷79號", 
        tags: ["泰式"]
    },
    { 
        name: "三舅媽油飯", 
        type: "Chinese", 
        image: ('restaurant/三舅媽.jpg'), 
        url: "https://maps.app.goo.gl/jaqkBHeutZdMFeMj7", 
        orderUrl: "#", 
        phone: "02 2902 1626", 
        address: "新北市新莊區中正路514巷53弄32號", 
        tags: ["中式"]
    },
    { 
        name: "冰糖茶店", 
        type: "Chinese", 
        image: ('restaurant/冰糖.jpg'), 
        url: "https://maps.app.goo.gl/wywpaGUc55pqoaZP8", 
        orderUrl: "#", 
        phone: "02 2906 7250", 
        address: "新北市新莊區中正路514巷69號", 
        tags: ["中式"]
    },
    { 
        name: "陶花園輔大豬排", 
        type: "Chinese", 
        image: ('restaurant/輔大豬排.jpg'), 
        url: "https://maps.app.goo.gl/SW8kRVBGirSxcvjBA", 
        orderUrl: "#", 
        phone: "02 2904 7868", 
        address: "新北市新莊區中正路514巷7號", 
        tags: ["中式"]
    },
    { 
        name: "名廚鐵板燒", 
        type: "Chinese", 
        image: ('restaurant/名廚.jpg'), 
        url: "https://maps.app.goo.gl/GHoZFtEYuCjko72JA", 
        orderUrl: "#", 
        phone: "02 2904 3513", 
        address: "新北市新莊區建國一路3號", 
        tags: ["中式"]
    },
    { 
        name: "滷都香加熱滷味", 
        type: "Chinese", 
        image: ('restaurant/滷都香.jpg'), 
        url: "https://maps.app.goo.gl/grAmdRKR5oQjWsAJ9", 
        orderUrl: "#", 
        phone: "無", 
        address: "新北市新莊區建國一路1號之1", 
        tags: ["中式"]
    },
    { 
        name: "家羿鵝肉、玉里麵專賣店", 
        type: "Chinese", 
        image: ('restaurant/嘉義.jpg'), 
        url: "https://maps.app.goo.gl/cvigsRsLgAHB64f88", 
        orderUrl: "#", 
        phone: "02 2901 3333", 
        address: "新北市新莊區建國一路6號", 
        tags: ["中式"]
    },
    { 
        name: "阿山哥麵飯", 
        type: "Chinese", 
        image: ('restaurant/阿山哥.jpg'), 
        url: "https://maps.app.goo.gl/4SVcF91CtqVuHkzz6", 
        orderUrl: "#", 
        phone: "02 2903 9139", 
        address: "新北市新莊區建國一路23號", 
        tags: ["中式"]
    },
    { 
        name: "典廚牛肉麵", 
        type: "Chinese", 
        image: ('restaurant/典廚.jpg'), 
        url: "https://maps.app.goo.gl/6X4mHT2Sp1ZujkRn9", 
        orderUrl: "#", 
        phone: "02 2902 2305", 
        address: "新北市新莊區建國一路21號", 
        tags: ["中式"]
    },
    { 
        name: "老葉牛肉麵創始店", 
        type: "Chinese", 
        image: ('restaurant/老葉.jpg'), 
        url: "https://maps.app.goo.gl/7pgXCKLLYjJNFPTr5", 
        orderUrl: "#", 
        phone: "02 2908 7278", 
        address: "新北市新莊區建國一路14號", 
        tags: ["中式"]
    },
    { 
        name: "勁牛肉麵館", 
        type: "Chinese", 
        image: ('restaurant/勁牛.jpg'), 
        url: "https://maps.app.goo.gl/c2XnpHhRVKrr9vWV9", 
        orderUrl: "#", 
        phone: "02 2904 2271", 
        address: "新北市新莊區建國一路36號", 
        tags: ["中式"]
    },
    { 
        name: "老吳牛肉", 
        type: "Chinese", 
        image: ('restaurant/老吳.jpg'), 
        url: "https://maps.app.goo.gl/m5d4SKaWCiLQZiei6", 
        orderUrl: "#", 
        phone: "02 2902 6657", 
        address: "新北市新莊區建國一路27號", 
        tags: ["中式"]
    },
    { 
        name: "牛脾氣牛排館", 
        type: "Chinese", 
        image: ('restaurant/牛脾氣.jpg'), 
        url: "https://maps.app.goo.gl/yWYLg4747ysBw4iG6", 
        orderUrl: "#", 
        phone: "02 2901 6828", 
        address: "新北市新莊區建國一路22號", 
        tags: ["中式"]
    },
    { 
        name: "泰巢麵食館", 
        type: "Chinese", 
        image: ('restaurant/泰巢.jpg'), 
        url: "https://maps.app.goo.gl/DzKPNskao1TbmSQV9", 
        orderUrl: "#", 
        phone: "02 2908 2341", 
        address: "新北市新莊區建國一路29號", 
        tags: ["中式"]
    },
    { 
        name: "川湘閣重慶酸菜魚", 
        type: "Chinese", 
        image: ('restaurant/川湘閣.jpg'), 
        url: "https://maps.app.goo.gl/aUdG2tTRN4FeACJA8", 
        orderUrl: "#", 
        phone: "0932 762 600", 
        address: "新北市新莊區建國一路32號", 
        tags: ["中式"]
    },
    { 
        name: "官小二酸菜魚", 
        type: "Chinese", 
        image: ('restaurant/官小二.jpg'), 
        url: "https://maps.app.goo.gl/gAzfHhUFX19kmCUs6", 
        orderUrl: "#", 
        phone: "02 2901 6131", 
        address: "新北市新莊區中正路516-41號", 
        tags: ["中式"]
    },
    { 
        name: "英倫小廚", 
        type: "Chinese", 
        image: ('restaurant/英倫小廚.jpg'), 
        url: "https://maps.app.goo.gl/vBqkS9qAbdd1rtNY9", 
        orderUrl: "https://line.me/R/ti/p/%40xzq2349l", 
        phone: "0909 224 055", 
        address: "新北市新莊區建國一路39號", 
        tags: ["中式"]
    },
    { 
        name: "港口廣東粥", 
        type: "Chinese", 
        image: ('restaurant/港口.jpg'), 
        url: "https://maps.app.goo.gl/DBSZ9ocM2GwKEQAs8", 
        orderUrl: "https://line.me/R/ti/p/%40xzq2349l", 
        phone: "0958 667 580", 
        address: "新北市新莊區建國一路78號", 
        tags: ["中式"]
    },
    { 
        name: "粥大福", 
        type: "Chinese", 
        image: ('restaurant/粥大福.jpg'), 
        url: "https://maps.app.goo.gl/ftvV3Es8Vi5sQ2vH8", 
        orderUrl: "https://imenu.com.tw/JhouDaFu/JDF_FuDa/menu", 
        phone: "02 2908 4567", 
        address: "新北市新莊區中正路516之37號", 
        tags: ["中式"]
    },
    { 
        name: "好味手工麵疙瘩", 
        type: "Chinese", 
        image: ('restaurant/好味.jpg'), 
        url: "https://maps.app.goo.gl/cphLFixGeMqqGCfn9", 
        orderUrl: "#", 
        phone: "02 2901 3583", 
        address: "新北市新莊區建國一路82號", 
        tags: ["中式"]
    },
    { 
        name: "重慶酸辣粉", 
        type: "Chinese", 
        image: ('restaurant/重慶.jpg'), 
        url: "https://maps.app.goo.gl/a5UUpNFCzD1fNqJHA", 
        orderUrl: "#", 
        phone: "02 2908 6567", 
        address: "新北市新莊區建國一路35號", 
        tags: ["中式"]
    },
    { 
        name: "三碗麵 傻瓜麵", 
        type: "Chinese", 
        image: ('restaurant/傻瓜麵.jpg'), 
        url: "https://maps.app.goo.gl/a5UUpNFCzD1fNqJHA", 
        orderUrl: "#", 
        phone: "02 2903 7088", 
        address: "新北市新莊區建國一路80號", 
        tags: ["中式"]
    },
    { 
        name: "江子翠鵝肉油雞專賣店", 
        type: "Chinese", 
        image: ('restaurant/江子翠.jpg'), 
        url: "https://maps.app.goo.gl/ed9N1usuB7PqzoQr6", 
        orderUrl: "#", 
        phone: "02 2901 2586", 
        address: "新北市新莊區建國一路No. 84號", 
        tags: ["中式"]
    },
    { 
        name: "玖零年代 燒臘便當專賣店", 
        type: "Chinese", 
        image: ('restaurant/九零.jpg'), 
        url: "https://maps.app.goo.gl/5qxa1KhoRaiexS9B6", 
        orderUrl: "#", 
        phone: "02 2901 3141", 
        address: "新北市新莊區中正路514巷81號", 
        tags: ["中式"]
    },
    { 
        name: "麻入口", 
        type: "Chinese", 
        image: ('restaurant/麻入口.jpg'), 
        url: "https://maps.app.goo.gl/hztCbfinGGaUpATv5", 
        orderUrl: "#", 
        phone: "02 2901 3233", 
        address: "新北市新莊區中正路516之37號2樓", 
        tags: ["中式"]
    },
    // 其他餐廳資料...
];

// 輸出餐廳資料
export { restaurants };
