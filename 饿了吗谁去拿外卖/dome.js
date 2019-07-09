var sbtn = document.getElementsByClassName('showbtn')[0],
    warp = document.getElementsByClassName('weperr')[0],
    colse = document.getElementsByClassName('colse')[0],
    stabtn = document.getElementsByClassName('stabtn')[0],
    list =document.getElementsByClassName('list')[0],
    arr = [],
    num = '',
    mindex= '',
    mini= '',
    apen = '';
 sbtn.addEventListener('click',function(){
    warp.style.display = "block";
    colse.addEventListener("click",function(){
        warp.style.display = 'none';
        arr = [];
        list.innerHTML = '';
     }) 
 })
 
 stabtn.addEventListener('mouseenter',function(){
    stabtn.style.backgroundPosition = " 0 -40px";
    stabtn.addEventListener('mouseleave',function(){
        stabtn.style.backgroundPosition = " 0 0";
        
     })
 })
 stabtn.addEventListener('mousedown',function(){
    stabtn.style.backgroundPosition = " 0 -80px";
    stabtn.addEventListener('mouseup',function(){
        stabtn.style.backgroundPosition = " 0 -40px"
     })
 })
 stabtn.addEventListener('click',function(){
   li.getlist();
 })
 Array.prototype.mini = function(){
    var mini = this[0];
    for(var i = 0;i<this.length;i++){
        if(mini>this[i]){
           mini = this[i];
        }
    }  
    return mini; 
}
var li ={
    getlist:()=>{
        num = Math.floor(Math.random()*100);
       if(num == mini){
           li.getlist();
           return false;
       }
        arr.push(num);
      li.addlist();
        
    },
    addlist:()=>{
            apen = '';
            mini = arr.mini();
            mindex = arr.indexOf(mini);
            
          
        arr.forEach((item,index,list)=>{
          apen += `
          <li>${item}</li>
          `;
          if(index > 6){
          if(mindex == 0 && mini < num){
             arr.splice(1,1);
          }else{
              arr.shift();
          }
          }
        });
        list.innerHTML = apen;
        list.getElementsByTagName('li')[mindex].className = 'ative'
    }
}
 