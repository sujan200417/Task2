function validateForm() {
    let isValid = true;
    
    // Clear previous error messages and styles
    document.querySelectorAll('.error').forEach(e => e.textContent = '');
    document.querySelectorAll('input, textarea').forEach(e => e.classList.remove('input-error'));
    
    // Validate Name
    let name = document.forms["myForm"]["fname"].value.trim();
    if (name === "") {
        document.getElementById("fname-error").textContent = "This field is required";
        document.forms["myForm"]["fname"].classList.add('input-error');
        isValid = false;
    }
    let mail = document.forms["myForm"]["fmail"].value.trim();
    if (mail === "") {
        document.getElementById("fmail-error").textContent = "A valid email address is required";
        document.forms["myForm"]["fmail"].classList.add('input-error');
        isValid = false;
    }
    let web = document.forms["myForm"]["fweb"].value.trim();
    if (web === "") {
        document.getElementById("fweb-error").textContent = "A valid url address is required";
        document.forms["myForm"]["fweb"].classList.add('input-error');
        isValid = false;
    }
    let mes = document.forms["myForm"]["fmes"].value.trim();
    if (mes === "") {
        document.getElementById("fmes-error").textContent = "The field is required";
        document.forms["myForm"]["fmes"].classList.add('input-error');
        isValid = false;
    }

    

    return isValid;
}