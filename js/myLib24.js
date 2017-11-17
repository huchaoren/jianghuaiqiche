//---------------------选择器-------------

function myQ(vArg)
{
	//用来保存选中的元素
	this.elements=[];
	
	switch(typeof vArg)
	{
		case 'function':
			//window.onload=vArg;
			myAddEvent(window, 'load', vArg);
			break;
		case 'string':
			switch(vArg.charAt(0))
			{
				case '#':	//ID
					var obj=document.getElementById(vArg.substring(1));
					
					this.elements.push(obj);
					break;
				case '.':	//class
					this.elements=getByClass(document, vArg.substring(1));
					break;
				default:	//tagName
					this.elements=document.getElementsByTagName(vArg);
			}
			break;
		case 'object':
			this.elements.push(vArg);
	}
}

//简化写法，$ 符号简单，其他特殊符号，基本用不了跟js冲突 如#，@，^等
//网页调用$(v)，每次使用均自动实例化，类比于将class -》obj
function $(vArg)
{
	return new myQ(vArg);
}


//通过prototype 绑定常用 方法（事件、函数）
myQ.prototype.click=function (fn) //事件  调用 如下 $('#shw').click( function(){	myq('#idtest').show();})
{
	var i=0;
	
	for(i=0;i<this.elements.length;i++) //查询结果（this对象）是以数组返回的，可能有多个对象，循环添加
	{
		myAddEvent(this.elements[i], 'click', fn);
		
	}
	//alert(this);
	return this;
};

myQ.prototype.mouseover=function (fn) //事件  调用 如下 $('#shw').click( function(){	myq('#idtest').show();})
{
	var i=0;
	
	for(i=0;i<this.elements.length;i++) //查询结果（this对象）是以数组返回的，可能有多个对象，循环添加
	{
		myAddEvent(this.elements[i], 'mouseover', fn);
		
	}
	return this;
};

myQ.prototype.mouseout=function (fn) //事件  调用 如下 $('#shw').click( function(){	myq('#idtest').show();})
{
	var i=0;
	
	for(i=0;i<this.elements.length;i++) //查询结果（this对象）是以数组返回的，可能有多个对象，循环添加
	{
		myAddEvent(this.elements[i], 'mouseout', fn);
		
	}
	return this;
};

myQ.prototype.show=function ()
{
	var i=0;
	
	for(i=0;i<this.elements.length;i++)
	{
		this.elements[i].style.display='block';
	}
	
	return this;
};

myQ.prototype.hide=function ()
{
	var i=0;
	
	for(i=0;i<this.elements.length;i++)
	{
		this.elements[i].style.display='none';
	}
	
	return this;
};





















// ------------- 用到的函数 --------------------------

//事件绑定
function myAddEvent(obj, sEv, fn)
{
	if(obj.attachEvent)
	{
		obj.attachEvent('on'+sEv, function (){
			if(false==fn.call(obj))
			{
				event.cancelBubble=true;
				return false;
			}
		});
	}
	else
	{
		obj.addEventListener(sEv, function (ev){
			if(false==fn.call(obj))
			{
				ev.cancelBubble=true;
				ev.preventDefault();
			}
		}, false);
	}
}


//在父元素下，获取指定的类（可选）
function getByClass(oParent, sClass)
{
	var aEle=oParent.getElementsByTagName('*');
	var aResult=[];
	var i=0;
	
	for(i=0;i<aEle.length;i++)
	{
		if(aEle[i].className==sClass)
		{
			aResult.push(aEle[i]);
		}
	}
	
	return aResult;
}


//  获取指定css
function getStyle(obj, attr)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[attr];
	}
	else
	{
		return getComputedStyle(obj, false)[attr];
	}
}