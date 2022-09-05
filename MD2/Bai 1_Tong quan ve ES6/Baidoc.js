
  // function createDiv(height = '100px',
  //                    width = '100px',
  //                    border= 'solid 1px red'){
  //   let div = document.createElement('div')
  //   div.style.height = height;
  //   div.style.width = width;
  //   div.style.border = border;
  //   document.body.appendChild(div);
  //   return div;
  // }
  // createDiv(undefined,undefined,'solid5 5px blue');

  // *** Đánh giá các tham số mặc định

  // function put(toy,abc, toybox =[]){
  // toybox.push(toy,abc);
  // return toybox;
  // }
  //
  // console.log(put('toy car'))
  // console.log(put('teddy bear','xyz'))

  function date(d=today()){
    console.log(d);
  }
  function today(){
  return (new Date()).toLocaleDateString("en-US");
  }
  date();



  function subtract( x , y ) {
    return x - y;
  }

  console.log(subtract(1,8));




  //Sử dụng các chức năng


 let taxRate = () => 0.1;
 let getPrice = function (price,tax = price*taxRate()){
   return price + tax;
 }
 let fullPrice = getPrice(100);
  console.log(fullPrice)


  // Đối tượng đối số

  function  add (x,y=1,z=2){
    console.log(arguments.length);
    return x+y+z;
  }
  add(5);
  add(5,10);
  add(5,10,15);


  // Lambda Functions

  const num = [1,2,3]
  const square = num.map(function (n){
    return n*n;
  });
  console.log(square)


  // Cú pháp Lamda:
  const square_6 = num.map(n=>n*n)
  console.log(square_6)


  //Chuyển từ hàm thông thường thành hm Lambda

  //Hàm ẩn danh
  let sum = function (a){
    return a+100;
  }
  console.log(sum(10))

  // Chuyển thành Lambda
     let sum1 = (a)=>{console.log(a+100)
  };
  sum1(10);
// Hàm có tên
  function bob (a){
    return a+100;
  }

  console.log(bob(20))

  // Cú pháp Lambda
  let bob1 = a => a+100;
  console.log(bob1(30))


  // Arguments object


  function func1(a,b,c){
    console.log(arguments[0]='8');
    console.log(arguments[1]);
    console.log(arguments[2]);
  }
  func1(4,5,6)


  function say(message = 'Hi') {
      console.log(message);
  }




