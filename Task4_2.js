let b = document.querySelector("button");
var str = document.getElementById("text").value;
b.addEventListener("click", function(){
    var str = document.getElementById("text").value;
     let res = str.toString(). split('').sort().join('');
    document.write( " The entered string in alphabatical order is - " + res);
})