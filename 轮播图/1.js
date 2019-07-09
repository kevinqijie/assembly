var oPrev = document.getElementById('prev');
var oNext = document.getElementById('next');
var oMain = document.getElementsByClassName('main')[0];
var oLi = document.getElementsByTagName("li");
var len = oLi.length;
var timer,timer2;
var index  = 0;
var key = true;
var oContainer = document.getElementsByClassName("container")[0];
function moveImg(dis){
	key = false;
	var time = 400;  //每次轮播需要的时间 
	var eachTime = 20; //每一小次移动的事件
	var eachDis = dis/(time/eachTime);
	var newLeft = oMain.offsetLeft + dis;

	function eachMove(){
		if(dis > 0 && oMain.offsetLeft < newLeft || dis < 0 && oMain.offsetLeft > newLeft){
			oMain.style.left = oMain.offsetLeft + eachDis + "px";
		}else{
			clearInterval(timer);
			oMain.style.left = newLeft + "px";
			if(newLeft == -6*660){
				oMain.style.left = "-660px"
			}
			if(newLeft == 0){
				oMain.style.left = -5*660+'px';
			}
			key = true;
			console.log(key);
		}

		
	}
	timer = setInterval(eachMove,eachTime);
}
function oListyle(){
  document.getElementsByClassName("active")[0].className = "";
	  oLi[index].className = "active";
	  
}
timer2 = setInterval(function(){
	moveImg(-660);
	if(index == 4){
		index = 0;
	}else{
		index++
	}
	oListyle();
},2000);
oContainer.onmouseover =function(){
	clearInterval(timer2);
}
oContainer.onmouseout = function(){
	timer2 = setInterval(function(){
		moveImg(-660);
		if(index == 4){
			index = 0;
		}else{
			index++
		}
		oListyle();
	},2000);
}
oPrev.onclick =function (){
     if(key == false)return;
		if(index == 0){
		index = 4
	}else{
		index--;
	}
	oListyle();
	moveImg(660);// 图片宽
}
oNext.onclick =function(){
	if(key == false)return; 
	moveImg(-660);
	if(index == 4){
		index = 0;
	}else{
		index++
	}
	oListyle();
}

for(var i = 0; i < len; i++){
	
	(function(j){
		if(key == false)return;
		oLi[j].onclick = function(i){
			var num = (j - index)*-660;
			index = j;
			oListyle(index);
			moveImg(num);
		}
	}(i))
}