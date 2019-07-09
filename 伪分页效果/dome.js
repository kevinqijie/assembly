$('ul li:gt(3)').hide();
var len = $('ul li').length;
var PageCountNum = Math.ceil(len/4);
var pagesNum = 1;
$('.pages-num').text(pagesNum)
$('.PageCount').text(PageCountNum)
// function PageTurning(limit,direction){
//     if(pagesNum == direction){
       
//         return false;

//     }else{
//         var num =limit;
//         $('.pages-num').text(num)
//        $.each($('ul li'),function(index,item){
//            var sartindex = 4*(num-1);
//             var endindex = 4*num;
//           if(index>=sartindex&&index<endindex){
//               $(this).show()
//           }else{
//               $(this).hide()
//           }
//        })
//     }
// }
// $('.next').click(function(){
//     PageTurning(++pagesNum,PageCountNum);
// })
// $('.Upward').click(function(){
//     PageTurning(--pagesNum,1)
// })
$('.next').click(function(){
    if(pagesNum==PageCountNum){
       
        return false;

    }else{
        var num =++pagesNum;
        $('.pages-num').text(num)
       $.each($('ul li'),function(index,item){
          console.log(index)
          console.log(item)
        var sartindex = 4*(num-1);
            var endindex = 4*num;
          if(index>=sartindex&&index<endindex){
              $(this).show()
          }else{
              $(this).hide()
          }
       })
    }
})
$('.Upward').click(function(){
    if(pagesNum==1){
     return false
    }else{
        var num = --pagesNum;
        $('.pages-num').text(num)
        $.each($('ul li'),function(index,item){
            var sartindex = 4*(num-1);
             var endindex = 4*num;
           if(index>=sartindex&&index<endindex){
               $(this).show()
           }else{
               $(this).hide()
           }
        })
    }
})