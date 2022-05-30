let clockHour = document.querySelector('.clock-hour');
let clockMin = document.querySelector('.clock-minute');
let clockSec = document.querySelector('.clock-second');
let hours = document.getElementById('hours');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let setbtn = document.getElementById('setbtn');
let sound = document.getElementById('sound');
let success = document.getElementById('success');


setInterval(function(){
    PrintHour = new Date().getHours();
    PrintMin = new Date().getMinutes();
    PrintSec = new Date().getSeconds();
    clockHour.innerHTML = PrintHour;
    clockMin.innerHTML = PrintMin;
    clockSec.innerHTML = PrintSec;

    if(PrintHour == hours.value && PrintMin == min.value && PrintSec == sec.value){
        success.style.display = 'block';
        sound.play();
    }
    
});

setbtn.addEventListener('click', function(){
    success.innerHTML = 'Alarm set success';
    success.innerHTML = `Alarm set success at ${hours.value}:${min.value}:${sec.value}`;
});

