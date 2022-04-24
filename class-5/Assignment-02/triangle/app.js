
let triangle = (base, height) => {
    return `The area of the triangle is ${base * height / 2}`;
}

let base = prompt("Enter the base of the triangle");
let height = prompt("Enter the height of the triangle");

let root = document.getElementById("root");

root.innerHTML = triangle(base, height);