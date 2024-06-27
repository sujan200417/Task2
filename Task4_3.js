let m = document.getElementById("m");
let d= document.getElementById("d");

m.addEventListener("click", function() {
    const one = parseFloat(document.getElementById("one").value);
    const two = parseFloat(document.getElementById("two").value);
    let out1 = document.getElementById("mul");
    const mul = one * two;
    out1.textContent = " The result of multiplication is " + mul;
    
});
d.addEventListener("click", function() {
    const one = parseFloat(document.getElementById("one").value);
    const two = parseFloat(document.getElementById("two").value);
    let out2 = document.getElementById("div");
    const div = one / two;
    out2.textContent = " The result of division  is " + div ;
});