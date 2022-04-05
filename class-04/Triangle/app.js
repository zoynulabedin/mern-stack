window.onload = function() {
    main();
}

function main() {
    let base = document.getElementById("base");
    let height = document.getElementById("height");
    let button = document.getElementById("button");
    let resultBox = document.getElementById("result-box");

    button.addEventListener("click", function() {
        let baseValue = base.value;
        let heightValue = height.value;

            let resultValue = 0.5 * baseValue * heightValue;
            resultBox.innerHTML = `Area of triangle  ${resultValue} cm2`;
    
       
    })
}