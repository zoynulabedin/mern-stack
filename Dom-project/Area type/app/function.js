
function setAlert(message,type='danger'){
    return `
        <div id="noticeID" class="alert alert-${type}" role="alert">
        <span id="close" aria-hidden="true">&times;</span>
        <p>${message}</p>
    </div>
   
 `

}

