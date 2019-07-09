var c = document.querySelector('.Chart'),
    inner = '',
    img = document.getElementById('resultImg'),
    panl = document.querySelector('.panl'),
    gtindex = getindex();
function getindex(){
    return Math.floor(Math.random()*16)
}    
function crated (){
   var  imgindex = '';
      
       
for(var i = 0; i< 100;i++){
if(i%9 === 0){
    imgindex = gtindex;

}else{
    imgindex = getindex();
}

    inner +=`
    <div class="item">
              <span class="num"> ${i} </span>
            <img src="./img/values/${imgindex}.png" alt="">
            </div>
    `
} 
   
    c.innerHTML = inner;
    img.src = `./img/values/${gtindex}.png`
}
crated ();
panl.addEventListener('click',element=>{
    element.currentTarget.style.transition = "all 2s cubic-bezier(0.1, 0.68, 0.53, 0.98)";
    element.currentTarget.style.transform = "rotate(1800deg)";
    setTimeout(()=>{
        resultImg.style.opacity = 1;
    initImg.style.opacity = 0;
    },1000)
})