const start = document.getElementById('start');
const stop = document.getElementById('stop');
const resetTimer = document.getElementById('resetTimer');
const timer = document.getElementById('timer');
const parentbox = document.getElementById('parentbox');
let box = document.getElementById('box');

let count = 0;
let stopCount = '';
start.onclick = () => {
    stopCount = setInterval(() => {
 
        timer.innerHTML = count;
        let clone = box.cloneNode(true);
        parentbox.appendChild(clone);
        clone.style.backgroundColor = colorGenerator();
           count++;

    }, 1000);
   

}

stop.onclick = () => {
    clearInterval(stopCount);
    
}

resetTimer.onclick = () => {
    count = 0;
    timer.innerHTML = count;
}


function colorGenerator() {
   let r = Math.round(Math.random() * 255);
   let g = Math.round(Math.random() * 255);
   let b = Math.round(Math.random() * 255);
   return `rgb(${r}, ${g}, ${b})`;
}