window.onload = function() {
    currencyConverter();
}
function currencyConverter(){
    let amount = document.getElementById("amount");
    let currency = document.getElementById("currency");
    let resultBox = document.getElementById("resultBox");
    let button = document.getElementById("button");

    button.addEventListener("click", function(){
        switch(currency.value){
            case "usd":
                resultBox.innerHTML = amount.value * 86.18+ "BDT";
                break;
            case "euro":
                resultBox.innerHTML = amount.value * 93.98 + "BDT";
                break;
            case "pound":
                resultBox.innerHTML = amount.value * 112.67+ "BDT";
                break;
            case "cad":
                resultBox.innerHTML = amount.value * 69.00+ "BDT";
                break;
            default:
                resultBox.innerHTML = "Please select a currency";
                break;
        }
    });
}