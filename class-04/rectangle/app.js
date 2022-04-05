window.onload = function() {
    main();
}

function main() {
    let width = document.getElementById("width");
    let height = document.getElementById("height");
    let button = document.getElementById("button");
    let resultBox = document.getElementById("result-box");

    button.addEventListener("click", function() {
        let widthValue = width.value;
        let heightValue = height.value;

            let resultValue = widthValue * heightValue;
            resultBox.innerHTML = `Area of a Rectangle   ${resultValue} cm2`;
    
       
    })
}