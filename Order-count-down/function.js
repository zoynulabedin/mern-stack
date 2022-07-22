const setAert = (message,type='danger') =>{
    return `<div class="alert alert-${type}" role="alert">
    ${message}
  </div>`;
}

const countdown =(endtime , display='') => {
    let startTime = Date.now();
    let diff_time = Math.abs(startTime - endtime);
    let days = Math.floor(diff_time / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff_time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff_time % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff_time % (1000 * 60)) / 1000);
    timeDsiplay.innerHTML = `${days} days :${hours} hours :${minutes} minutes :${seconds} seconds`;
    if( diff_time <= 100000){
        timeDsiplay.style.color = 'red';
    }else{
        timeDsiplay.style.color = 'green';
        
    }

    if(diff_time < 0){
     
        timeDsiplay.innerHTML = 'Time is up';
    }

}