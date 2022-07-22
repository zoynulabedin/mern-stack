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
        countdown(end_order, timeDsiplay);
       
    }, 1000);

}