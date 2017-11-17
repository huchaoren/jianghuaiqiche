// JavaScript Document

	var oBanner = document.getElementById('banner');
	var aUl = document.getElementById('lb');
	var oImg = document.getElementById('banner').getElementsByTagName('img');
	var aLi = document.getElementById('banner').getElementsByTagName('li');
	var num = 0;
	var arrImg = Array("img/7.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg");
	var time = setInterval(play,2000);
	function play(){
		if(num<4){
			num++;
			oImg[0].src = arrImg[num];
			for(var f=0;f<arrImg.length;f++){
				if(f==num){
					aLi[f].style.backgroundColor = "#9cc";
					continue;
				}
					aLi[f].style.backgroundColor = "";
			}
		}else{
			num=0;
			oImg[0].src = arrImg[num];
			for(f=0;f<arrImg.length;f++){
				if(f==num){
					aLi[f].style.backgroundColor = "#9cc";
					continue;
				}
				aLi[f].style.backgroundColor = "";
			}
		}
	}
	/*oBanner.onmouseover = function(){
		clearInterval(time);
	}
	oBanner.onmouseout = function(){
		
		time = setInterval (play,1000);
	}*/
	var aImg = document.getElementById('anniu').getElementsByTagName('img');
	var oInput = document.getElementsByTagName('input');
	var arrImg1 = Array("img/8.jpg","img/9.jpg","img/10.jpg","img/11.jpg","img/12.jpg","img/13.jpg");
	arrLong = arrImg1.length;
	var num=0;
	oInput[1].onclick=function(){
		if(num < arrLong){
			num++;
			aImg[0].src = arrImg1[num];
			aImg[1].src = arrImg1[num];
			aImg[2].src = arrImg1[num];
		}else{
			num=5;
			alert("别点了最后一页了");
		}
	}
	oInput[2].onclick=function(){
		if(num > 0){
			num--;
			aImg[0].src = arrImg1[num];
			aImg[1].src = arrImg1[num];
			aImg[2].src = arrImg1[num];
			
		}else{
			num=0;
			alert("别点第一页了");
		}
	}
	//var oDiv = document.getElementById('dd');
	//var oUl = document.getElementById('l');
/*	var oLll= document.getElementsByTagName('lll');
	var oB = document.getElementById('ppppp');
	var oP= document.getElementsByTagName('d');
	oLll.onmouseover = function(){
			myMove(oB,'left',100,10);
		}*/
	
	var oLi = document.getElementById('cc').getElementsByTagName('li');
	var Long = aLi.length;

	for(var i=0;i<Long;i++){
		oLi[i].index = i;
		oLi[i].onmouseover = function(){
			for(var j=0;j<Long;j++){
				oLi[j].className="";
			}
			oLi[this.index].className="b";
		}
	}
	
	var oGgg = document.getElementById('ggg');
	var oGl = document.getElementsByClassName('gl');
	/*var og1 = document.getElementById("y1");*/
	/* var oB = document.getElementsByTagName('b');*/
	 
	  var oP = document.getElementById('oP');
	  var oP2 = document.getElementById('oP2');
		
		oGl[0].onmouseover = function(){
			myMove(oP,'left',40,10);
		}
		oGl[0].onmouseout = function(){
			myMove(oP,'left',-120,10);
		}
		oGl[1].onmouseover = function(){
			myMove(oP2,'left',40,10);
		}
		oGl[1].onmouseout = function(){
			myMove(oP2,'left',-120,10);
		}
	
	function myMove(obj,attr,target,speed){
	var speed = (parseInt(getStyle(obj,attr))<target) ? speed:-speed;
	clearInterval(obj.timer);
	obj.timer = setInterval (function(){
		var nowPis = parseInt(getStyle(obj,attr))+ speed;
		if(Math.abs(target-nowPis) < Math.abs(speed)){
			obj.style[attr] = target + "px";
			clearInterval(obj.timer);
		}else{
			obj.style[attr] = nowPis + "px";
		}
	},50);
}
	function getStyle(obj,attr){
		return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle( obj )[attr];	
	}
