var btn = document.getElementsByClassName('btn'),
    box = document.getElementsByClassName('btnbox')[0],
    ipt = document.getElementsByClassName('input'),
    btndel = document.getElementsByClassName('del')[0],
    btnReset = document.getElementsByClassName('Reset')[0];
var ipts = Array.from(ipt);
ipts.forEach(element => {
    console.log(element)
    element.onfocus = function () {
        var vals = '';
        box.style.display = 'flex';
        var btns = Array.from(btn);
        btns.forEach((item, data) => {
            item.onclick = function () {
                var val = element.value;
                vals = val + this.value;
                element.value = vals;
            }
        });
        btndel.onclick = function () {
            var val = element.value;
            vals = val.substring(0, val.length - 1);
            element.value = vals;
        };
        btnReset.onclick = function () {
            vals = '';
            element.value = vals;
        }

    }
});