var arr = [],
    str = '';
var inputTxet = document.getElementsByClassName('txt')[0],
    Heavy = document.getElementsByClassName('heavy')[0],
    pShow = document.getElementsByClassName('stateText')[0];
for (var i = 48; i <= 122; i++) {
    if (i >= 48 && i <= 57) {
        arr.push(String.fromCharCode(i))
    } else if (i >= 65 && i <= 90) {
        arr.push(String.fromCharCode(i))
    } else if (i >= 97 && i <= 122) {
        arr.push(String.fromCharCode(i))
    }
}
console.log(arr)
function Draw() {
    str = ''
    for (var c = 0; c < 6; c++) {
        str += arr[Math.floor(Math.random() * 62)]
    }
    var Canvas = document.getElementsByTagName('canvas')[0];
    var cxt = Canvas.getContext('2d');
    cxt.clearRect(0, 0, 180, 40)
    cxt.beginPath();
    cxt.fillStyle = '#fff'
    cxt.font = "bold 35px '字体','字体','微软雅黑','宋体'";
    cxt.fillText(str, 15, 33);
    cxt.closePath();
    cxt.beginPath();
    cxt.strokeStyle = '#fff';
    cxt.lineWidth = 5;
    cxt.moveTo(5+Math.floor(Math.random() * 30),Math.floor(Math.random() * 40));
    cxt.lineTo(150+Math.floor(Math.random() * 30),Math.floor(Math.random() * 40));
    cxt.stroke();
    cxt.closePath();
}
Draw()
Heavy.addEventListener('click', function () {
    Draw();

})
document.getElementsByClassName('submit')[0].addEventListener('click', function () {
    var txtValue = inputTxet.value;

    if (txtValue == '') {
        pShow.innerHTML = '请输入验证码';
        pShow.style.color = 'red';
        pShow.style.display = 'block';
    } else if (txtValue == str) {
        pShow.innerHTML = '验证码效验成功';
        pShow.style.color = 'green';
        pShow.style.display = 'block';
    } else {
        pShow.innerHTML = '验证码效验失败';
        pShow.style.color = 'red';
        pShow.style.display = 'block';
    }

})
// inputTxet.addEventListener('m')
inputTxet.onfocus=function(){
    pShow.style.display = 'none';
}