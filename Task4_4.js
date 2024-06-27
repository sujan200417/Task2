function showdate(){
    var current = new Date();
    var monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var date = current.getDate() + "/" + monthNames[current.getMonth()] + "/" +current.getFullYear();
    let s = document.getElementById("show");
    s.textContent = date;

}
function showDateTime() {
    var current = new Date();
    
    // Convert to IST
    var offset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
    var istTime = new Date(current.getTime() + offset);
    
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    var dayName = dayNames[istTime.getUTCDay()];
    var date = istTime.getUTCDate();
    var month = monthNames[istTime.getUTCMonth()];
    var year = istTime.getUTCFullYear();
    
    var hours = istTime.getUTCHours().toString().padStart(2, '0');
    var minutes = istTime.getUTCMinutes().toString().padStart(2, '0');
    var seconds = istTime.getUTCSeconds().toString().padStart(2, '0');
    
    var formattedDateTime = `${dayName}, ${date} ${month} ${year}, ${hours}:${minutes}:${seconds} IST`;
    
    let s1 = document.getElementById("show1");
    s1.textContent = formattedDateTime;
}