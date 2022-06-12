const formSumbit = document.getElementById('message');

const output = document.getElementById('msg');
const h3one = document.querySelector('.title-one');
const h3Twp = document.querySelector('.title-Two');

formSumbit.onsubmit = (e) => {
    e.preventDefault();
    const input = formSumbit.querySelector('input[name="msg"]');
    output.innerHTML = input.value;
    output.style.color = ColorGenerator();
    document.querySelector('.card').style.backgroundColor = ColorGenerator();
    document.querySelector('h3').style.color = ColorGenerator();
    document.querySelector('h4').style.color = ColorGenerator();
    document.body.style.backgroundColor = ColorGenerator();
    document.querySelector('button').style.backgroundColor = ColorGenerator();
    input.style.backgroundColor = ColorGenerator();
    h3one.style.Position = 'relative';
    h3one.style.left = '400px';
    h3one.style.transitionDuration = '2s';
    h3Twp.style.Position = 'relative';
    h3Twp.style.right = '-900px';
    h3Twp.style.transitionDuration = '2s';
    h3one.style.transform = 'rotate(360deg)';
    h3Twp.style.transform = 'rotate(360deg)';
    h3one.style.color = ColorGenerator();
    h3Twp.style.color = ColorGenerator();
    h3one.innerHTML = input.value;
}

const ColorGenerator = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}