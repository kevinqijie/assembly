function $(event) {
    return document.querySelector(event);
}
function $all(event) {
    return document.querySelectorAll(event);
}
var arr = [['show1', ''],
['show2', ''],
['show3', 'active'],
['show4', ''],
['show5', '']]
$('.left').onclick = function () {
    var last = arr.pop();
    arr.unshift(last);
    for (var i = 0; i < arr.length; i++) {
        $all('img')[i].className = arr[i][0];
        $all('li')[i].className = arr[i][1];
    }
}
$('.right').onclick = function () {
    var farst = arr.shift();
    arr.push(farst);
    for (var i = 0; i < arr.length; i++) {
        $all('img')[i].className = arr[i][0];
        $all('li')[i].className = arr[i][1];
    }
}
var taimer = setInterval(() => {
    var last = arr.pop();
    arr.unshift(last);
    for (var i = 0; i < arr.length; i++) {
        $all('img')[i].className = arr[i][0];
        $all('li')[i].className = arr[i][1];
    }
}, 2000)
var war = $('.warrper');
war.onmouseenter=function(){
    clearInterval(taimer);
}
war.onmouseleave = function(){
    taimer = setInterval(() => {
        var last = arr.pop();
        arr.unshift(last);
        for (var i = 0; i < arr.length; i++) {
            $all('img')[i].className = arr[i][0];
            $all('li')[i].className = arr[i][1];
        }
    }, 2000)
}
var oLi = $all('li');
 var li = Array.from(oLi);
li.forEach((data,index) => {
    data.onclick = function(){
        for(var i=0 ; i< 5;i++){
            var last = arr.pop();
            arr.unshift(last);
            if(arr[index][1] == 'active'){
                for (var i = 0; i < arr.length; i++) {
                    $all('img')[i].className = arr[i][0];
                    $all('li')[i].className = arr[i][1];
                }
                break;
            }
        }
    }
});