$(document).ready(function () {

    // 所有.smoove共用
    $('.smoove').smoove({
        // offset整數預設為像素，不需給單位，且不能加引號''，但百分比%要加''
        offset: 300
    });
    $('.smoove-z').smoove({
        moveZ: '-500px',
        rotateX: '90deg',
        moveY: '100px',
    });


    // 飛行器滑入效果
    $(window).on('scroll', function () {
        var scrollPosition = $(this).scrollTop();  //目前滾動高度
        var img = $('.dataimg');  //獲取圖片元素

        if (scrollPosition > -10) {
            img.css({
                'transform': 'translate(-550%, -200%) rotate(-0deg)',
                'opacity': '1',
            });
        } else {
            img.css({
                'transform': 'translate(-50%, -50%) rotate(-15deg)',
                'opacity': '0',
            });
        }
    });


});
