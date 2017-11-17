// JavaScript Document
window.onload=function(){
/*	var aLi = document.getElementById('dh').getElementsByTagName('li');
	var Long = aLi.length;
	//var long = Ul.length;
	for(var i=0;i<Long;i++){
		aLi[i].index = i;
		aLi[i].onmouseover = function(){
			for(var j=0;j<Long;j++){
				aLi[j].className='';
					
			}
			aLi[this.index].className='nav';
			
		}
	}*/
	var oBanner = document.getElementById('banner');
	var oUl = document.getElementById('lb');
	var oImg = document.getElementById('banner').getElementsByTagName('img');
	var oLi = document.getElementById('banner').getElementsByTagName('li');
	var num = 0;
	var arrImg = Array("img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg");
	function test(){setInterval(alert(111),500);}
	test();
	var timer = setInterval(function(){
		alert(111);
		if(num<4){
			num++;
			oImg[0].src = arrImg[num];
			for(var f=0;f<arrImg.length;f++){
				if(f==num){
					oLi[f].style.backgroundColor = "#9cc";
					continue;
				}
					oLi[f].style.backgroundColor = "";
			}
		}else{
			num=0;
			oImg[0].src = arrImg[num];
			for(f=0;f<arrImg.length;f++){
				if(f==num){
					oLi[f].style.backgroundColor = "#9cc";
					continue;
				}
				oLi[f].style.backgroundColor = "";
			}
		}
		
	},3000);
	function play(){
		
	}
	oBanner.onmouseover = function(){
		clearInterval(time);
	}
	oBanner.onmouseout = function(){
		
		time = setInterval (play,1000);
	
}
		
}