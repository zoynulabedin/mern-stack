const studentsInfo = document.getElementById('studentsInfo');
const msg = document.querySelector('.msg');
const allItems = document.getElementById('allItems');
studentsInfo.onsubmit =(e) => {
    
    e.preventDefault();
    const vemail = document.getElementById('email');
    const vphone = document.getElementById('phone');
    const form = e.target;
    const form_data = new FormData(form);
    const data = Object.fromEntries(form_data.entries());
    const {photo, name,age,email,phone,location} = data;

    if(!name || !age || !email || !phone || !location){
        msg.innerHTML = setAlert('Please fill all fields','danger');
    }
    else if(!emailCheck(email)){
        vemail.classList.add('is-invalid');
       
    }else if(!phoneCheck(phone)){
        vphone.classList.add('is-invalid');
    }
    else{
        sendDatatoLocalStorage('students',data);
        msg.innerHTML = setAlert('Student info added successfully','success');
        studentsInfo.reset();
        window.location.reload();
    }


}

getDatafromLocalStorage('students').forEach((student,index)=> {
    const {photo,name,age,email,phone,location} = student;
    
    let list = '';
    list +=`
    <div class="col-lg-3" data-index="${index+1}">
          <div class="card text-center">
            <img
              src="${photo}"
              alt=""
            />
            <div class="student-info p-36">
              <h3>${name}</h3>
              <ul>
                <li>
                  <strong>Age:</strong>
                  <span>${age} years old</span>
                </li>
                <li>
                  <strong>Email:</strong>
                  <span>
                    <a href="mailto:${email}" target="_blank"
                      >${email}</a
                    >
                  </span>
                </li>
                <li>
                  <strong>Phone:</strong>
                  <span>${phone}</span>
                </li>
                <li>
                  <strong>Location:</strong>
                  <span>${location}</span>
                </li>
              </ul>
              <div class="buttons-group my-3">
                <button data-bs-toggle="modal" data-bs-target="#update" class="btn btn-primary">Edit</button>
                <button class="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
    `
    allItems.innerHTML += list;
});


allItems.addEventListener('click',(e)=>{
    if(e.target.classList.contains('btn-danger')){
        const dels = document.querySelector('.dels');
        const index = e.target.parentElement.parentElement.parentElement.dataset.index;
        deleteDatafromLocalStorage('students',index);
        e.target.parentElement.parentElement.parentElement.remove();
        dels.innerHTML = setAlert('Student info deleted successfully','success');
    }

    if(e.target.classList.contains('btn-primary')){
        const update_std = document.getElementById('update_std');
        const index = e.target.parentElement.parentElement.parentElement.parentElement.dataset.index;
        const student = getDatafromLocalStorage('students')[index-1];
        const {photo,name,age,email,phone,location} = student[index-1];
        update_std.querySelector('#photo').value = photo;
        update_std.querySelector('#name').value = name;
        update_std.querySelector('#age').value = age;
        update_std.querySelector('#email').value = email;
        update_std.querySelector('#phone').value = phone;
        update_std.querySelector('[name="indexNumber"]').value = index;
        update_std.querySelector('#location').value = location;
    }
});

update_std.onsubmit =(e) => {
    e.preventDefault();
    const updateForm = new FormData(update_std);
    const updata = Object.fromEntries(updateForm.entries());
    const {photo, name,age,email,index,phone,location} = updata;
   const gtdata = getDatafromLocalStorage('students');
   gtdata[index-1] = updata;
   updateDatafromLocalStorage('students',gtdata);
    msg.innerHTML = setAlert('Update Successfully', 'Data updated successfully');
    update_std.reset();
    window.location.reload();
}


