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
        if(widthValue == heightValue) {
            let resultValue = widthValue * heightValue;
            resultBox.innerHTML = `Area of a square   ${resultValue} cm2`;
        }else{
            resultBox.innerHTML = `Please enter same value for width and height`;
        }
       
    })
}