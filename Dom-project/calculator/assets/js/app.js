const display = document.querySelector('.display');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');

const number = document.querySelectorAll('button');

display.innerHTML = 0;
zero.onclick = () => {
    display.innerHTML += 0;
}
nine.onclick = () => {
  display.innerHTML += 9;
}
eight.onclick = () => {
  display.innerHTML += 8;
}
seven.onclick = () => {
  display.innerHTML += 7;
}
six.onclick = () => {
  display.innerHTML += 6;
}
five.onclick = () => {
  display.innerHTML += 5;
}
four.onclick = () => {
  display.innerHTML += 4;
}
three.onclick = () => {
  display.innerHTML += 3;
}
two.onclick = () => {
  display.innerHTML += 2;
}
one.onclick = () => {
  display.innerHTML += 1;
}

clear.onclick = () => {
  display.innerHTML = 0;
}

