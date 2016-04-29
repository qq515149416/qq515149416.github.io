// JavaScript Document
window.onload=function(){
	var oDiv=document.querySelector("#main");
	var oBtn=document.querySelector("#btn");
	var oBtn2=document.querySelector("#btn2");
	oBtn.onclick=function(){	
		oDiv.style.display="none";
		oBtn2.style.display="block";
	}
	oBtn2.onclick=function(){	
		oDiv.style.display="block";
		oBtn2.style.display="none";
	}
}