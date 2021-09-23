
// Lay id backgound1

const icon = document.querySelector('.icon1left');
const slide1logo = document.querySelector('#slide1-logo')
const slide1right = document.querySelector('#slide1-right')
const slide1left = document.querySelector('#slide1-left');

const slide2logo = document.querySelector('#slide2-logo')
const slide2right = document.querySelector('#slide2-right')
const slide2left = document.querySelector('#slide2-left');

let imageleft = [
    "./img/travel-slide-1left.jpg",
    "./img/travel-slide-2.jpg",
    "./img/travel-slide-3.jpg"
 
]
let numleft = 0;
let imagelogo = [
    "./img/travel-slide-logo-1.png",
    "./img/travel-slide-logo-2.png",
    "./img/travel-slide-logo-1.png"
]
let numlogo = 0;
let imageright = [
    "./img/travel-slide-1right.jpg",
    "./img/travel-slide-2 -right(1).jpg",
    "./img/travel-slide-3-right.jpg"
  ];
  var num = 0;
  icon.click = () => {
    function next () {
      num++;
      if(num >= imageleft.length){
        num = 0;
      }
      slider.src = imageleft[num];
    }
   next()
  
  function prev() {
    num--;
    if(num < 0){
        num = imageleft.lenth -1;

    }
    slider.src = imageleft[num]
  }
  prev()
  }
 
    
  




 /* tăng số */
//  function animateNumber(finalNumber, delay, startNumber = 0, callback) {
//     let currentNumber = startNumber
//     const interval = window.setInterval(updateNumber, delay)
//     function updateNumber() {
//       if (currentNumber >= finalNumber) {
//         clearInterval(interval)
//       } else {
//         currentNumber++
//       }
//       callback(currentNumber)
//     }
//   }

//   document.addEventListener('DOMcontentLoaded',function () {
//    animateNumber(76,1,0,function(number){
//     const formattedNumber = number.toLocaleString()
//     document.getElementById('percentone').innerText = formattedNumber
//    })
 
// }
//   )
 



// những Array method  tạo mới
//  Array.prototype.filter2 = function(callback){
//      let ouput = [];
//      for(let index in this){
//          if(this.hasOwnProperty(index)){
//        let result =  callback(this[index],index,this)
//        if(result){
//         ouput.push(this[index])
//     }
//          }
        
//      }
//      return ouput;
//  }

//  let fillterCourses= cour.filter2(function(cour,index,array){
//     //  return  cour.coin < 700
//     console.log(cour,index,array);
//  })
//  console.groupCollapsed(fillterCourses);



// Array.prototype.some2 = function(callback){
//     var output = false;
//     for(let index in this){
//         if(this.hasOwnProperty(index)){
//           if( callback(this[index],index,this)){
//             output = true;
//             break;
//           };
//         }
//     }
//     return output;
// }
 
//  let cour = [
//      {
//      name:  'javascript',
//      coin: 200,
//      isFinish: true,
//      },
//      {
//          name :'PHP',
//          coin: 500,
//          isFinish: false,
//      }
//  ];

//  let someCourses = cour.some(function(cour,index,array){
//      return cour.isFinish;
//  })
//  console.log(someCourses);




