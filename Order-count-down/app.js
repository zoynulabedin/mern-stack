const form_countDown = document.getElementById('form_countDown');
const msg = document.querySelector('.msg');
const timeDsiplay = document.querySelector('.time-display');
form_countDown.onsubmit = (e) =>{
    e.preventDefault();
    let form_data = new FormData(e.target);
    let formVal = Object.fromEntries(form_data.entries());
    let {date, time} = formVal;

    if(!time || !date){
       msg.innerHTML = setAert( 'Please fill all fields','danger');
    }

    let end_order =  new Date(date + ' ' + time).getTime();
    let interval = setInterval(() => {
        let startTime = Date.now();
        let diff_time = end_order - startTime;
        let days = Math.floor(diff_time / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff_time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff_time % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff_time % (1000 * 60)) / 1000);
        timeDsiplay.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    }, 1000);
}