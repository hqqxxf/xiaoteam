function getStyle(obj,attr)
{
	if(obj.currentStyle)
		return obj.currentStyle[attr];
	else if(getComputedStyle(obj,false))
		return getComputedStyle(obj,false)[attr];
}
function startMove(obj,json,fn)
{
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flag=true;
		for(var attr in json)
		{
			var cur_attr = 0;
			if(attr == 'opacity')
			{
				cur_attr = Math.round(parseFloat(getStyle(obj,attr))*100);	
			}
			else
			{
				cur_attr = parseInt(getStyle(obj,attr));		
			}
			var speed = (json[attr] - cur_attr) / 6;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(cur_attr != json[attr])
			{
				flag = false;
			}
			if(attr == 'opacity')
			{
				obj.style.filter = 'alpha(opacity:'+(cur_attr+speed)+')';
				obj.style[attr] = (cur_attr+speed)/100;
			}
			else
			{
				obj.style[attr]=cur_attr+speed+'px';
			}
		}
		if(flag)
		{
			clearInterval(obj.timer);
			if(fn){fn();}
		}
	},30);   
}
