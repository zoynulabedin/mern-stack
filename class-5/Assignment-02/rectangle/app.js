let rectangle = (width, height) => {
    let resultVal = width * height;

    return `The are rectangle value ${resultVal} cm2`;
}


let width = prompt('width');
let height = prompt('height');

let root = document.getElementById('root');

root.innerHTML = rectangle(width, height);