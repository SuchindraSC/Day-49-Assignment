function  showTime() {
    const date = new Date();
    return date.getHours() + " Hrs:"+ date.getMinutes()+" Mins:"+date.getSeconds()+" Secs";
}

function showSessionExpire() {
    console.log("Activity-B: Your Session Expired at: "+showTime());
}

console.log("Activity-A: Triggering Activity-B at "+showTime());
setTimeout(showSessionExpire, 5000);
console.log("Activity-A: Triggered Acctivity-B at "+showTime()+" will execute after 5 seconds")