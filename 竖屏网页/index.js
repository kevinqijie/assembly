function $(event) {
    return document.querySelector(event);
}
function $all(event) {
    return document.querySelectorAll(event);
}
var Top = Array.from($all('.top'));
var Bot = Array.from($all('.bottom'));
var items = Array.from($all('.item'))
var key = true;
function each(){
    for(var i in items){
        var it = items[i];
        itemif(it,i);
       }
}
each();
function anitarme(e){
    var p = $all('p')[e];
    var left = p.offsetLeft;
    p.style.transition = 'none';
    p.style.left = '-30px';
    setTimeout(()=>{
    p.style.opacity = '1';
    p.style.transition = 'all 0.3s';
    p.style.left = left + 'px';
    },200)
    }
function itemif(data,index){
    var rect = data.getBoundingClientRect();
    if (rect.bottom <= 0) {
        return false;
    }
    if (rect.top >= document.documentElement.clientHeight) {
        return false;
    }
    anitarme(index);
   }
Bot.forEach(item => {
    item.onclick = function () {
        if (key) {
            var top = $('.box').offsetTop;
            var h = document.body.clientHeight;
            if (top <= -3 * h) {
                return false;
            }
            $('.box').style.top = top - h -10+'px';
            key = false;
            setTimeout(() => {
                key = true;
                each();
            }, 3000);
        }
    }
    })
Top.forEach(item => {
    item.onclick = function () {
        if (key) {
            var top = $('.box').offsetTop;
            var h = document.body.clientHeight;
            if (top >= 0) {
                return false;
            }
            $('.box').style.top = top + h +10+'px';
            key = false;
            each();
            setTimeout(() => {
                key = true;
                each();
            }, 3000);
        }
    }
})



