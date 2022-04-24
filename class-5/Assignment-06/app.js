window.onload = function() {
    currencyConverter();
}
let currencyConverter = () =>{
    let amount = document.getElementById("amount");
    let currency = document.getElementById("currency");
    let resultBox = document.getElementById("resultBox");
    let button = document.getElementById("button");

    button.addEventListener("click", function(){
        switch(currency.value){
            case "usd":
                resultBox.innerHTML = amount.value / 86.18+ "USD";
                break;
            case "euro":
                resultBox.innerHTML = amount.value / 93.98 + "euro";
                break;
            case "pound":
                resultBox.innerHTML = amount.value / 112.67+ "Pound";
                break;
            case "cad":
                resultBox.innerHTML = amount.value / 69.00+ "cad";
                break;
            default:
                resultBox.innerHTML = "Please select a currency";
                break;
        }
    });
}