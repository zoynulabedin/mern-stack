
const setAlert = (message,type='danger') =>{
    return `
        <div id="noticeID" class="alert alert-${type}" role="alert">
        <span id="close" aria-hidden="true">&times;</span>
        <p>${message}</p>
    </div>
   
 `

}

const numberCheck = (num) =>{
    let agepattern = /^[0-9]{1,2}$/;
    return agepattern.test(num);
}


