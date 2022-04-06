window.onload = function() {
    agecalculator();
}

function agecalculator() {
    const button = document.getElementById("button");
    const date = document.getElementById("date");
    const resultBox = document.getElementById("resultBox");

    button.addEventListener("click", function() {
        const dateval = date.value;
        const today = new Date();
        const birthday = new Date(dateval);
        const age = today.getFullYear() - birthday.getFullYear();
        const month = today.getMonth() - birthday.getMonth();
        const day = today.getDate() - birthday.getDate();

        // if (month < 0 || (month === 0 && day < 0)) {
        //     return false;
        // }
        resultBox.innerHTML = `Your age is ${age} years, ${month} months, and ${day} days.`;
    })
}