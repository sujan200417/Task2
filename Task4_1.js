var num1 = document.getElementById("num").value;
let result = num1.toString().split('').reverse().join('');
console.log(result);
let s = document.querySelector("button");
s.addEventListener("click",function () {
    var num1 = document.getElementById("num").value;
    let result = num1.toString().split('').reverse().join('');
     console.log(result);
     
     document.write( "The reverse of the entered num is " + result);
})