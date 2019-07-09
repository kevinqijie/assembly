var  colorArr = ["#096", "green", "pink", "blue", "#369", "purple", "yellow", "#ccc", "#000"],
     key = false,
     btn = document.querySelector('.btn'),
     warp = document.querySelector('.warrper'),
     boxs = warp.querySelectorAll('div'),
     taimer = '';
btn.onclick = function(){
   key = !key;
   if(key){
    btn.innerHTML = '点击停止闪烁'
   
     taimer = setInterval(()=>{
        var obj = {};
        for(var i = 0; i<3;i++){
            
            var num = Math.floor(Math.random()*9);
            if(typeof obj[num] !=='undefined'){
                i--;
                continue;
            }
            obj[num] = num;
            // console.log(typeof obj[num])  
            boxs[num].style.backgroundColor = colorArr[num];
           }
        window.setTimeout(()=>{
          for(var l = 0; l<9;l++){
            boxs[l].style.backgroundColor = '#f42'; 
          }
        },500)   
     },1000)
   }else{
    btn.innerHTML = '点击开始闪烁';
    clearInterval(taimer)
   }
}     