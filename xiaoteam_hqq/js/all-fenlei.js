/**
 * Created by Admin on 2015/6/4.
 */
$(function(){
    var dropmenu = $('ul.dropdown-menu li');
    dropmenu.click(function(){
        var btn = $(this).parent().siblings()[0];
        var txt = this.childNodes[0].innerHTML;
        btn.childNodes[1].innerHTML = txt;
    });
});