var oMin = document.getElementsByClassName('min')[0],
    oMax = document.querySelector('.max'),
    oMeng = document.querySelector('.crea');
oMin.onmouseenter = function(){
    // console.log(77);
    oMax.style.display = 'block';
    oMeng.style.display = 'block';
}
oMin.onmouseleave = function(){
    oMax.style.display = 'none';
    oMeng.style.display = 'none';
}
oMin.onmousemove = function(event){
   
  var x = event.clientX,
      y = event.clientY,
      left =oMin.offsetLeft,
      top = oMin.offsetTop;
      var lx = x - left - 100,
          ty = y - top - 100;
      var arr = []    
 if(lx<0){
    oMeng.style.left = '0';
    arr.push(0);
  }else if(lx>200){
      oMeng.style.left = '200px';
      arr.push('200');
  }else{
    oMeng.style.left = lx +'px'; 
    arr.push(lx); 
  }
  if(ty<0){
    oMeng.style.top = '0';
    arr.push(0);
  }else if(ty>200){
      oMeng.style.top = '200px';
      arr.push('200');
  }else{
    oMeng.style.top = ty +'px';  
    arr.push(ty);
  }
  oMax.style.backgroundPosition = `-${arr[0]*2}px -${arr[1]*2}px`;
  
 

// console.log(left,top)
}