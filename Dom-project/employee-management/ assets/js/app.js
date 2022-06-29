const form_action = document.getElementById('form_action');
const msg = document.querySelector('.msg');
const allshow = document.getElementById('allshow');
const form_update = document.getElementById('form_update');
form_action.onsubmit = (e) => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data.entries());
    const {name,mobile,photo} = data;
    if(!name || !mobile || !photo){
        msg.innerHTML = setAlert('danger', 'Please fill all fields');
    }else{
        setdata('person', data);
        msg.innerHTML = setAlert('success', 'Data saved successfully');
        form_action.reset();
        window.location.reload();
    }
}


getdata('person').forEach((item,index)=> {
    let tr = document.createElement('tr');
    tr.setAttribute('data-index', index);
    tr.innerHTML = ` <th scope="row">${index+1}</th>
    <td><img width="80" src="${item.photo}" alt="" /></td>
    <td>${item.name}</td>
    <td>${item.mobile}</td>
    <td>
      <button stype="button" class="btn btn-info text-white" 
        ><i class="fas fa-pen"></i
      ></button>
      <button stype="button"  class="btn btn-danger" 
        ><i class="fas fa-trash"></i
      ></button>
    </td>`;
    document.querySelector('tbody').appendChild(tr);
});


// delete the item from local storage

allshow.onclick = (e) => {
    e.preventDefault();
   if(e.target.classList.contains('btn-danger')){
    let index = e.target.parentElement.parentElement.getAttribute('data-index');
    deletedata('person', index);
    e.target.parentElement.parentElement.remove();
    alert('are you want to delete this item?');
    msg.innerHTML = setAlert('success', 'Data deleted successfully');
   }
   if(e.target.classList.contains('btn-info')){
    const form_update = document.getElementById('form_update');
    let index = e.target.parentElement.parentElement.getAttribute('data-index');
    let data = getdata('person')[index];
    form_update.querySelector('[name="name"]').value = data.name;
    form_update.querySelector('[name="mobile"]').value = data.mobile;
    form_update.querySelector('[name="photo"]').value = data.photo;
    form_update.querySelector('[name="index"]').value = index;
    form_update.style.display = 'block';
    form_action.style.display = 'none';
   }
 
}



form_update.onsubmit = (e) => {
    e.preventDefault();
    const form_data = new FormData(form_update);
    const data = Object.fromEntries(form_data.entries());
    const {name,mobile,photo,index} = data;
    const getdta = getdata('person');
    getdta[index] = data;
    updatedata('person',getdta);
    msg.innerHTML = setAlert('success', 'Data updated successfully');
    form_update.reset();
    form_update.style.display = 'none';
    form_action.style.display = 'block';
    window.location.reload();
}