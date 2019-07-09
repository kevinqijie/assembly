function $(e) {
    return document.querySelector(e);
}
var input = $('input'),
    ul = $('.list'),
    taimer = '',
    container = $('.container');
var json = [
                "1	飞天茅台批发价	新闻 视频 图片	5333395",
                "2   张艺兴 个人巡演	新闻 视频 图片	4332654",
                "3	丹尼格林签约湖人	新闻 视频 图片	3509411",
                "4	北京失业补助3千	新闻 视频 图片	3277342",
                "5	张云雷济南演出	新闻 视频 图片	2802540",
                "6	男子2天杀害2女性	新闻 视频 图片	2608877",
                '7	罗琳否认哈利拍剧	新闻 视频 图片	2470857',
                '8	iG战胜SKT	新闻 视频 图片	2239181',
                '9	莱昂纳德加盟快船	新闻 视频 图片	2177577',
                '10	美国加州地震	新闻 视频 图片	1984218',
                '11	良渚古城申遗成功	新闻 视频 图片	1923563',
                '12	钢铁侠的瓶盖挑战	新闻 视频 图片	1909096',
                '13	佟丽娅辞演新剧	新闻 视频 图片	1882984',
                '14	医生瘫坐老婆病房	新闻 视频 图片	1830320',
                '15	古天乐演反派	新闻 视频 图片	1659902',
                '16	清华两博士被退学	新闻 视频 图片	1583234',
                '17	张朝阳再谈5G危害	新闻 视频 图片	1569129',
                '18	TOP崔胜贤正式退伍	新闻 视频 图片	1544263',
                '19	陈嘉上向言承旭道歉	新闻 视频 图片	1515527',
                '20	崔胜铉跟粉丝鞠躬	新闻 视频 图片	1297938'
                ]
input.oninput = function () {
    clearTimeout(taimer);
    taimer = setTimeout(() => {
        serchlist();
    }, 500)
}
input.onfocus = function () {
    serchlist();
}
var i = -1;
input.onkeydown = function(e){
  
if(e.keyCode == 40){
    i++;
    var lis = document.querySelectorAll('li');
    if(i>lis.length-1){
        return false;
    }
   
   for(let c = 0 ;c< lis.length;c++){
   if(c==i){
    lis[c].className = 'active';
   }else{
    lis[c].className = '';
   }
   }
    
   
}  
if(e.keyCode == 38){
    i--;
    var lis = document.querySelectorAll('li');
    if(i<0){
        return false;
    }
    
   for(let c = 0 ;c< lis.length;c++){
   if(c==i){
    
    lis[c].className = 'active';
   }else{
    lis[c].className = '';
   }
   }
    
   
}  

}
container.onblur = function () {
    hidelist();
}
function hidelist() {
    ul.style.display = 'none';
}
function serchlist() {
    var key = input.value;
    if (!key) {
        hidelist();
        return;
    }
    ul.style.display = 'block';
    var item =json.filter(it=>it.includes(key));
    if(!item){
        hidelist();
        return;
    }
    createlis(item,key)
}
// var i = 0;
function createlis(it,key) {
    ul.innerHTML = '';
    it.forEach((element,index) => {
     var li = document.createElement('li');
     li.innerHTML = element.replace(new RegExp(key,'g'),()=>`<span class='key'>${key}</span>`);
    //  li.onclick = function(){
    //      alert(index)
    //  }
    li.onmouseenter = function(){
        li.classList.add('active');
        i = index;
    }
    li.onmouseleave = function(){
        li.classList.remove('active');
    }
     ul.appendChild(li);  
   });
}
