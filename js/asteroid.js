$(document).ready(function () {
    let index = 0; 
    const $images = $(".carousel-img");  
    const $imageContainer = $(".carousel-img img"); 
    const totalImages = $imageContainer.length; 

    // 點擊左右按鈕時切換圖片
    $(".left").click(function () {
        moveSlide(-1);  
    });

    $(".right").click(function () {
        moveSlide(1);  
    });

    // 切換圖片
    function moveSlide(direction) {
        const windowWidth = $(window).width();  // 獲取當前視窗寬度
        index += direction;  // 根據方向增減圖片索引

        // 圖片超出範圍時重置
        if (index >= totalImages) {
            index = 0;  // 如果超過，回到第一張
        } else if (index < 0) {
            index = totalImages - 1;  // 如果小於 0，回到最後一張
        }

        // 根據視窗寬度設置圖片容器的移動距離
        let imageWidth = 650;  // 預設圖片寬度
        if (windowWidth <= 1536) {
            imageWidth = 500;  
        }

        // 移動圖片容器，顯示對應圖片
        $images.css({
            "transition": "transform 0.5s ease",  // 加入過渡效果
            "transform": `translateX(-${index * imageWidth}px)`  // 根據索引和寬度計算移動距離
        });
    }

    // 設置圖片容器寬度，使其能根據圖片數量調整
    const imageWidth = $(window).width() <= 1536 ? 500 : 650;  // 預設或根據視窗寬度設置寬度
    $images.css('width', imageWidth * totalImages);  // 更新容器寬度

    // 監聽視窗大小變化，重新計算圖片寬度
    $(window).resize(function () {
        const windowWidth = $(window).width();
        let newImageWidth = windowWidth <= 1536 ? 500 : 650;  // 根據視窗大小設置圖片寬度
        $images.css('width', newImageWidth * totalImages);  // 更新容器寬度
        $images.css("transform", `translateX(-${index * newImageWidth}px)`);  // 根據新的寬度更新位置
    });
});

