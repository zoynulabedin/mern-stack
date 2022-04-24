

let square = (width, height) => {
    if(width === height) {
        let sq =  (width * height);
        return `Your area is ${sq} cm2`;
    }else{
        return `Please insert same value width and height`;
    }
}

let width = prompt('Please enter width');
let height = prompt('Please enter height');

let root = document.getElementById('root');
root.innerHTML = square(width,height);