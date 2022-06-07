const myForm = document.getElementById('myForm');
const close = document.getElementById('close');
const noticeID = document.getElementById('noticeID');
const details = document.querySelector('.details');

myForm.onsubmit = function(e) {
    e.preventDefault();
    let amout = myForm.querySelector('input[name="amount"]').value;
    let currency = myForm.querySelector('select[name="currency"]').value;
    let msg = document.querySelector('.msg');
    if(amount == '' || currency == '') {
        msg.innerHTML = setAlert('All Fields are required!');
      
    }else{
        
        let rate = 0;
        switch(currency) {
            case 'USD':
                rate = 92.5;
                break;
            case 'EUR':
                rate = 98.38;
                break;
            case 'GBP':
                rate =115.11;
                break;
                case 'INR':
                rate = 1.19;
        }
        details.innerHTML = setAlert(`${amout} ${currency} = ${(amout * rate).toFixed(2)} BDT`, 'success');

    }
}

