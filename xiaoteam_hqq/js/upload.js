/**
 * Created by Admin on 2015/5/30.
 */
function clickShow(clickEvent,showEvent,hideEvent){

     clickEvent.click(function(){
         hideEvent.hide(300);
         showEvent.show(300);
     });

}
$(function(){
    var contest = $('#contest');
    var activity = $('#activity');
    var contestUpload = $('#upload-contest');
    var activityUpload = $('#upload-activity');
    var apply = $('#apply');
    var apply1 = $('#apply1');
    var radio = $('.contest-radio input:radio');
    var radio1 = $('.activity-radio input:radio');
    clickShow(contest,contestUpload,activityUpload);
    clickShow(activity,activityUpload,contestUpload);
    radio.change(function(){
        var istrue = $('.contest-radio input:radio:checked');
        console.log(istrue);
        if(istrue.val() === "yes"){
            apply.show();
        }else{
            apply.hide();
        }
    });
    radio1.change(function(){
        var istrue = $('.activity-radio input:radio:checked');
        console.log(istrue);
        if(istrue.val() === "yes"){
            apply1.show();
        }else{
            apply1.hide();
        }
    });

});