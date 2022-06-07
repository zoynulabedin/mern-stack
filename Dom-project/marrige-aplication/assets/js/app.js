const marrige_form = document.getElementById('marrige_form');
const msg = document.querySelector('.msg');

marrige_form.onsubmit = (e) =>{
    e.preventDefault();
    let name = marrige_form.querySelector('input[name="name"]').value;
    let age = marrige_form.querySelector('input[name="age"]').value;
    let  gender = marrige_form.querySelectorAll('input[name="gender"]');
    let gen = '';
    gender.forEach((item)=>{
       if(item.checked){
           gen = item.value;
       }
    })

    if(name == '' ||age == '' || gen == ''){
        msg.innerHTML = setAlert('all fields must be required !','danger')
    }else if(numberCheck(age) == false){
        msg.innerHTML = setAlert(`sorry invalid age`,'danger');
    }else{
        
        let marrige_age = gen == 'Male' ? 21 : 18;
        console.log(marrige_age);
        if(gen == 'Male'){
            if(age >= marrige_age){
                msg.innerHTML = setAlert(`congress ${name} . You are ready for marrige`,'success');
            }else{
                msg.innerHTML = setAlert(`sorry ${name} . You have to wait ${marrige_age-age} years Old`,'danger');
            }
        }else{
            if(age >= marrige_age){
                msg.innerHTML = setAlert(`congress ${name} . You are ready for marrige`,'success');
            }else{
                msg.innerHTML = setAlert(`sorry ${name} . You have to wait ${marrige_age-age} years old`,'danger');
            }
        }
    }

   
}