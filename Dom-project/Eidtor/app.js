const logo = document.getElementById('logo');
const btnClose = document.querySelector('.btn-close');
const logoEditor = document.querySelector('.logo-popup-container');

const logoInput = document.getElementById('logo-input');
const fontFamily = document.getElementById('fontFamily');
const fontStyle = document.getElementById('fontStyle');
const fontSize = document.getElementById('fontSize');
const fontColor = document.getElementById('fontColor');
const headerBg = document.getElementById('headerBg');
const InputHeaderbg = document.getElementById('InputHeaderbg');
const addnew_item = document.getElementById('addnew_item');
const removeItem = document.getElementById('removeItem');
const allMenu = document.querySelectorAll('.new-item-input');
const navbarNav = document.getElementById('navbarNav');

headerBg.onclick = () => {
    logoEditor.style.display = 'block';
    logo.style.color = '#fff';
}
btnClose.onclick = () => {
    logoEditor.style.display = 'none';
}



logoInput.onkeyup = () => {
    logo.innerHTML = logoInput.value;
}

fontFamily.onchange = () => {
    logo.style.fontFamily = fontFamily.value;
}

fontStyle.onchange = () => {
    logo.style.fontStyle = fontStyle.value;
}

fontSize.oninput = () => {
    logo.style.fontSize = fontSize.value +'px';
}
fontColor.oninput = () => {
    logo.style.color = fontColor.value;
}

InputHeaderbg.oninput = () => {
    headerBg.style.backgroundColor = InputHeaderbg.value; 
}


addnew_item.onclick = () => {
    const newItem = document.createElement('div');
    newItem.className = 'new-item';
    newItem.innerHTML = '<input type="text" class="new-item-input" placeholder="Add Menu">';
  const nitem =   document.querySelector('.new-item-container').appendChild(newItem);
  


}
removeItem.onclick = () => {
    document.querySelector('.new-item-container').removeChild(document.querySelector('.new-item-container').lastChild);
}

const menuValue = allMenu.value;
console.log(menuValue);
// menuValue.forEach(item => {
//     item.onkeyup = () => {
//         navbarNav.innerHTML += `<li class="nav-item"><a class="nav-link" href="#">${item.value}</a></li>`;
//     }
// });


//  Hero area
const header = document.getElementById('header');
const headerHeading = document.getElementById('headerHeading');
const headerDesc = document.getElementById('headerDesc');
const heroBTn = document.getElementById('heroBTn');