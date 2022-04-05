window.onload = function() {
    main();
}

function main() {
    let width = document.getElementById("Weight");
    let height = document.getElementById("height");
    let button = document.getElementById("button");
    let resultBox = document.getElementById("result-box");

    button.addEventListener("click", function() {
        let weightval = parseFloat(width.value);
        let heightval = parseFloat(height.value);
        let bmi = Math.ceil(weightval / (heightval * heightval));
        
        if (bmi < 18.5) {
            resultBox.innerHTML = "Your BMI is " + bmi + ". You are underweight.";
        }
        else if (bmi >= 18.5 && bmi < 25) {
            resultBox.innerHTML = "Your BMI is " + bmi + ". You are normal weight.";
        }
        else if (bmi >= 25 && bmi < 30) {
            resultBox.innerHTML = "Your BMI is " + bmi + ". You are overweight.";
        }
        else {
            resultBox.innerHTML = "Your BMI is " + bmi + ". You are obese.";
        }

       
    })
}