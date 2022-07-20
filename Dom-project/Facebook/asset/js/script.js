const fbMenu = document.getElementById('fb-menu');
const liItem = fbMenu.getElementsByTagName('li');

for(let i = 0; i < liItem.length; i++) {
    liItem[i].addEventListener('click', function() {
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace('active', '');
        this.className += 'active';
    }
    );
}