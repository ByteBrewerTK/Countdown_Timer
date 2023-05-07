// Countdown Project

const endDate = "06 May 2024 08:00 AM";
document.getElementById("end-date").innerText = endDate;

const input = document.querySelectorAll("input");

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();

    const diff = (end-now)/1000;

    if(diff <0) return;

    // For Days
    input[0].value = Math.floor(diff/3600/24);

    // Hours
    input[1].value = Math.floor(diff/3600)%24;

    // Minutes
    input[2].value = Math.floor(diff/60)%60;

    // Seconds
    input[3].value = Math.floor(diff%60);
   
}
setInterval(clock, 1000);

