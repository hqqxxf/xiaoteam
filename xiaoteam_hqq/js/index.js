/**
 * Created by Admin on 2015/5/19.
 */
var clientHeight = $(window).height();
//console.log(clientHeight);

$(document).ready(function(){
    var bg_img = $('.bg-img');//get the big image
    var index_icon = $('.index-main ol');
    var index_icon_li = $('.index-main ol li');//get all icons

    //initial
    index_icon_li.eq(0).css('background','#39F');
    bg_img.css({
        'height':clientHeight
    });
    index_icon.css('top',clientHeight/3);


    //click event
    for(var i=0; i<index_icon_li.length; i++){
        index_icon_li[i].onclick = function(){
            var index = $(this).index() + 1;//get the index of li
            for(var k=0; k<index_icon_li.length; k++){
                $(index_icon_li[k]).css('background','black');
            }
            $(this).css('background','#39F');

            //turn bg_img to the index one
            bg_img.animate({
                'z-index' : '0',
                'opacity' : 0
            },100);
            var bg_current = '.bg-img-main' + index;
            $(bg_current).animate({
                'z-index' : '9',
                'opacity' : 1
            },500);

        }
    }

});