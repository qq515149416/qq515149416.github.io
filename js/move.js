// JavaScript Document
function move(obj,json,fn){
	clearInterval(obj.time);
	obj.time=setInterval(function(){
		//获取自身属性样式
		var onOff=true;
		for(var attr in json){
			console.log(attr);
			if(attr=="opacity"){
				var itself=parseInt(parseFloat(getStyle(obj,attr))*100);
				if(isNaN(itself)){
					itself=100;
				}
			}else{
				var itself=parseInt(getStyle(obj,attr));
			}
			//计算速度
			if(json[attr]>itself){
				var iSpeed=Math.ceil((json[attr]-itself)/5);
			}else{
				var iSpeed=Math.floor((json[attr]-itself)/5);
			}
			if(itself!=json[attr]){
				onOff=false;
			}
			//执行运动效果
			if(attr=="opacity"){
				obj.style[attr]=(itself+iSpeed)/100;
				obj.style.filter="alpha(opacity="+(itself+iSpeed)+")";
			}else{
				obj.style[attr]=itself+iSpeed+"px";
			}
		}
		//停止条件
		if(onOff){
			console.log(json[attr]);
			clearInterval(obj.time);
			if(fn){
				fn();
			}
		}

	},30);
}
//获取样式
function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj,false)[attr];
		}
}