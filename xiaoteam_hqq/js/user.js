/**
 * Created by Admin on 2015/6/12.
 */
$(function(){
    var str = location.hash;
    if(str == ''){
        str = '#basic-info';
    }
    $('a[href='+ str+ ']').addClass('active');


    var basic = getDivHeightById('#basic-info') + 10;
    var manage = getDivHeightById('#management') + 10;
    var informate = getDivHeightById('#information') + 10;
    var array = [basic, basic + manage, basic + manage + informate];
    console.log(array);
    window.onscroll = function(){
        var scrollTop = $(window).scrollTop();
        console.log(scrollTop);
        if(scrollTop >= 0 && scrollTop <=array[0]){
            str = '#basic-info';
        }else if(scrollTop <=array[1]){
            str = '#management';
        }else if(scrollTop <=array[2]){
            str = '#information';
        }
        $('a').removeClass('active');
        $('a[href='+ str+ ']').addClass('active');
    };


});


function getDivHeightById(id){
    return $(id).outerHeight();
}