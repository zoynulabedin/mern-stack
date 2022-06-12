const text = [
    {
        about: `dolor sit amet, consectetur adipisicing elit.Dignissimos quisquam odit ut eaque ullam, sunt voluptatum  necessitatibus, optio vel fuga asperiores explicabo aliquid
    `,
    name: 'zoynul'
    },
    {
        about: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dignissimos quisquam odit ut eaque ullam, sunt voluptatum  necessitatibus, optio vel fuga asperiores explicabo aliquid`,
        name: 'Feroz'
    },
    {
        about: `sit amet, consectetur adipisicing elit.Dignissimos quisquam odit ut eaque ullam, sunt voluptatum  necessitatibus, optio vel fuga asperiores explicabo aliquid`,
        name: 'sabbir'
    }
]

const generateBtn = document.getElementById('generateBtn');
const qoute = document.querySelector('.qoute-text');
const author = document.querySelector('.author-text');


generateBtn.addEventListener('click', function () {
    const random = Math.floor(Math.random() * 3);
    qoute.textContent = text[random].about;
    author.textContent = text[random].name;
    generateBtn.style.background = ColorGenerator();
    qoute.style.color = ColorGenerator();
    author.style.color = ColorGenerator();
    document.body.style.background = ColorGenerator();
});

function ColorGenerator(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}