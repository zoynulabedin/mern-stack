// create an
const stdMangeForm = document.getElementById('stdMangeForm');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const msg = document.querySelector('.msg');
stdMangeForm.onsubmit = (e) => {
    e.preventDefault();
    const stdMangeFormData = new FormData(stdMangeForm);
    const {fname,lname,phone,email,password} = Object.fromEntries(stdMangeFormData);
    

    if(!fname || !lname || !phone || !email || !password){
        msg.innerHTML =  SetAlert('Please fillup requred fields','danger');
           
    }else{
        const dataJson = JSON.stringify(Object.fromEntries(stdMangeFormData));
        msg.innerHTML =  SetAlert('Data added successfully!','success');
        e.target.reset();
    }
 
    
}

phone.onkeyup = () => {
    if(!cellCheck(phone.value)){
        phone.classList.add('is-invalid');
    }else{
        phone.classList.remove('is-invalid');
    }
}

email.onkeyup = () => {
    if(!emailCheck(email.value)){
        email.classList.add('is-invalid');
    }else{
        email.classList.remove('is-invalid');
    }
}
pass.onkeyup = () => {
    if(!passCheck(pass.value)){
        pass.classList.add('is-invalid');
    }else{
        pass.classList.remove('is-invalid');
    }
}



// login

const items = { ...localStorage };
