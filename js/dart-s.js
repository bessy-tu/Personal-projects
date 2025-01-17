$(document).ready(function () {
    let index = 0;  // 初始化圖片索引

    // 當點擊左右按鈕時切換圖片
    $(".left").click(function () {
        moveSlide(-1);
    });

    $(".right").click(function () {
        moveSlide(1);
    });

    // 切換圖片
    function moveSlide(direction) {
        const $images = $(".carousel-img");
        const totalImages = $(".carousel-img img").length;
        index += direction;

        // 圖片索引超出範圍時重置
        if (index >= totalImages) {
            index = 0;
        } else if (index < 0) {
            index = totalImages - 1;
        }

        // 移動圖片容器，顯示對應圖片
        $images.css("transform", `translateX(-${index * 450}px)`);
    }

   
});
