function SetAlert(message, type='danger') {
   return `<div class="alert alert-${type}" role="alert">
   ${message}
 </div>`
}

function emailCheck(email){
    let pattern = /^[a-z0-9\._]{1,}@[a-z0-9]{2,}\.[a-z]{1,}$/;
    return pattern.test(email);
}

function cellCheck(cell){
    let pattern = /^(01|8801|\+8801)[0-9]{9}$/;
    return pattern.test(cell);
}

function passCheck(pass){
    let pattern = /^[a-zA-Z0-9\.@#_]{8,16}$/;
    return pattern.test(pass);
}