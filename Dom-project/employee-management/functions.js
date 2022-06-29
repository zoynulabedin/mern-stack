const setAlert = (type='danger', message) =>{
    return `<div class="alert alert-${type} role="alert">${message}</div>`;
}
// create a function that will be send data to local storage

const setdata = (key, value) =>{
    let data = [];
    if(localStorage.getItem(key)){
        data = JSON.parse(localStorage.getItem(key));
    }
    data.push(value);
    localStorage.setItem(key, JSON.stringify(data));
}

// create a function that will be get data from local storage

const getdata = (key) =>{
    let data = [];
    if(localStorage.getItem(key)){
        data = JSON.parse(localStorage.getItem(key));
    }
    return data;
}


// create a function that will be delete data from local storage

const deletedata = (key, value) =>{
    let data = [];
    if(localStorage.getItem(key)){
        data = JSON.parse(localStorage.getItem(key));
    }
    data.splice(value, 1);
    localStorage.setItem(key, JSON.stringify(data));
}


// create a function that will be update data from local storage

const updatedata = (key, array) =>{
   localStorage.setItem(key, JSON.stringify(array));
}