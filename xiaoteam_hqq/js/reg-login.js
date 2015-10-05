/**
 * Created by Admin on 2015/5/28.
 */
function passwordCompare(pwd1,pwd2){
    var errorMsg = '';
    if(pwd1 !== pwd2){
        errorMsg = '密码不一致';
    }else{
        errorMsg = '';
    }
    return errorMsg;
}
$(function(){
    var pwd1 = $('#pwd1');
    var pwd2 = $('#pwd2');
    var error = $('#error');
    pwd1.blur(function(){
        error.html(passwordCompare(pwd1.val(),pwd2.val()));
    });
    pwd2.blur(function(){
        error.html(passwordCompare(pwd1.val(),pwd2.val()));
    });
});