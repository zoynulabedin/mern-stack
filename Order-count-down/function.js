const setAert = (message,type='danger') =>{
    return `<div class="alert alert-${type}" role="alert">
    ${message}
  </div>`;
}