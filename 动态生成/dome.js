var list = document.querySelector('.list'),
    btn1 = document.querySelector('.btn1'),
    ipt = document.querySelector('.ipt');

btn1.addEventListener('click', () => {
    var num = ipt.value;
    list.innerHTML = '';
    if (!num) {
        alert('请输入一个数....')
        ipt.focus();
        return;
    }
    if (isNaN(num)) {
        alert('请输入一个数....');
        ipt.value = '';
        ipt.focus();
        return;
    }
    for (let i = 1; i <= num; i++) {
        var tr = document.createElement('tr');
        for (let j = 1; j <= i; j++) {
            var resule = j + " * " + i + " = " + (j * i),
                td = document.createElement('td'),
                node = document.createTextNode(resule);
            td.appendChild(node);
            tr.appendChild(td);

            // console.log(resule)
        }
        list.appendChild(tr);

    }
    // console.log(list)
})