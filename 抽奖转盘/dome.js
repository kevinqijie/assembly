var btn = document.getElementsByClassName('btn')[0],
  img = document.getElementsByClassName('jiangp')[0];

function gitr() {


  if (Math.random() < 0.8) {
    img.style.transform = 'rotate(1054deg)'
  } else {
    var r = Math.floor(1000 + Math.random() * 1300)
    img.style.transform = 'rotate(' + r + 'deg)'
  }


}
btn.addEventListener('click',()=>{
  img.style.transform = 'rotate(0deg)';
  setTimeout(function(){
    gitr()
  })
})

