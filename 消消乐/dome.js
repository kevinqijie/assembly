var warrper = document.querySelector('.warrper'),
    lists = [];
window.onload = ()=>{
    init();
}
function init(){
    getlist();

    
}    
function getlist(){
   var temp = getemp();
   temp.forEach((item)=>{
       var list = document.createElement('div');
         list.style.backgroundImage = `url("./img/${item}.png")`;
         list.classList.add('list');
         lists.push(list);
   })
   cratelist();
}
function getemp(){
    var temp = [];
    for(let i = 0 ; i<40;i++){
        var num = Math.floor(Math.random()*20);
        temp.push(num);
        temp.push(num);
    }
    temp.sort(function () {
        return Math.random() - 0.5;
    });
    
    return temp;
}

var com =[];
function cratelist(){
    lists.forEach((item,index)=>{
        warrper.appendChild(item);
        item.onclick = function(){
            item.style. opacity = '0.7'
         var src = [];
         var url = item.style.backgroundImage;
        src.push(index);
        src.push(url);
        com.push(src);
        for(let i = 0;i<com.length;i++){
             l = i - 1;
             console.log(com[i][1],l)
           
        }
        }
    })
}