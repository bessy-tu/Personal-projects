$(document).ready(function() {
    // 點擊卡片觸發效果
    $('.card1, .card2, .card3').on('click', function () {
        var cardId = $(this).data('card');  // 獲取卡片的data-card屬性

        // 根據卡片的不同顯示不同的內容
        var content = '';
        var contentImg = '';
        switch (cardId) {
            case 1:
                content = '比如「激光燒灼驅動技術」，使用強激光照射小行星的表面，使其表面燒灼，就會產生等離子體， 而產生的這些氣體或等離子體會以極高的速度從小行星表面噴射出去。這個過程會對小行星產生一個反作用力，改變小行星的軌道。<br/>但是以目前的科技水平來衡量的話，這個方法其實是比較科幻的方法，還停留在理論上可行的程度。';
                contentImg = 'images/earth&asteroid.jpg';
                break;
            case 2:
                content = '核武器為人類威力最大最危險的武器，當然這個方法也相對的暴力且極端，直接破壞小行星，或者是使其產生大程度的偏轉。<br/>然而此方法有個大問題，就是過程中產生的大型碎片依舊是對地球有危害的。';
                contentImg = 'images/burningmeteor.png';
                break;
            case 3:
                content = '這是目前成熟度最高的方法。<br/>NASA的DART計畫也已經通過實驗證實了這個方法的可行性。。<br/>就是從地球發射一個航天器，以即快的速度去撞擊小行星，改變它的軌道，使其與地球錯開。由於此方法的成熟度最高，也被證實可行，所以目前都是圍繞著此方法來進行研究。';
                contentImg = 'images/asteroid-earth2.jpg';
                break;
        }

        // 顯示彈出視窗並填充內容
        $('#detail-text').html(content);  // 更新彈出視窗中的內容
        $('#detail-img').attr('src',contentImg);  //更新圖片
        $('.detail').fadeIn();  // 顯示彈出視窗
    });

    // 點擊關閉按鈕時隱藏彈出視窗
    $('.close-btn').on('click', function () {
        $('.detail').fadeOut();  // 隱藏彈出視窗
    });

    // 點擊彈出視窗外部區域時隱藏彈出視窗
    $('.detail').on('click', function (e) {
        if ($(e.target).is('.detail')) {
            $(this).fadeOut();  // 點擊彈出視窗的背景區域，則隱藏視窗
        }
    });
});