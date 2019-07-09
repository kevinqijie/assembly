var config = {
    width: 500,
    height: 500,
    row: 3, //行数
    col: 3, //列数
    zuobiao: [],
    tu :[],
    warrper: document.querySelector('.warrper') 
}
var methods = {
    createlist: () => {
        config.zuobiao.forEach((item,index)=> {
            var list = document.createElement('div');
            if(index === 8){
                list.style.backgroundColor = "#ffffff"
                list.style.width = config.width / config.row + 'px';
                list.style.height = config.height /config.col + 'px';
                list.style.boxSizing = 'border-box';
                list.style.border = '1px solid #fff';
                config.warrper.appendChild(list);
                return false; 
            }
            
            // list.classList.add('list');
            list.style.position = 'absolute';
            list.style.backgroundImage = 'url("./img/lol.png")';
            list.style.backgroundPosition = `-${item[1]}px -${item[0]}px `;
            list.style.left = `${config.tu[index][0]}px`;
            list.style.top = `${config.tu[index][1]}px`;
            list.style.cursor = 'pointer';
            list.style.transition = 'all 0.3s'
            list.style.boxSizing = 'border-box';
            list.style.border = '1px solid #fff';
            list.style.width = config.width / config.row + 'px';
            list.style.height = config.height /config.col + 'px';
            config.warrper.appendChild(list);
           console.log(item)
           
        })

    }
}
// var arr = [];
window.onload = function () {
    for (let  i = 0; i <3; i++) {
      
        for(let j = 0; j<3;j++){
          var arr = [ config.width / config.row * i,
                     config.height / config.col * j,] ;
            if(i==2&&j==2){
                config.zuobiao.push(arr);
                
                // return false;
            }else{
                config.zuobiao.push(arr);
                config.tu.push(arr);
            }         
         
        }
      
        
    }
    config.tu.sort(function () {//随机打乱这个数组
        return Math.random() - 0.5;
    })
    methods.createlist();
}