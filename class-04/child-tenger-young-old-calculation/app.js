window.onload = function() {
    main();
}

function main() {
    let name = document.getElementById("name");
    let age = document.getElementById("age");
    let button = document.getElementById("button");
    let result = document.getElementById("result");

    button.addEventListener("click", function() {
        let nameValue = name.value;
        let ageValue = 2022 - age.value;
        
        if(ageValue <=10){
           
                result.innerHTML = `Hi ${nameValue}, you are ${ageValue} years old , You are child`;
            
            
    
        }else if(ageValue > 10 && ageValue <=18){   
            
                result.innerHTML = `Hi ${nameValue}, you are ${ageValue} years old , You are teenagers`;
            
           
    
        }else if(ageValue > 18 && ageValue <=30){
            
                result.innerHTML = `Hi ${nameValue}, you are ${ageValue} years old , You are young people`;
           
            
    
        }else if(ageValue > 30 && ageValue <=100){
            
            result.innerHTML = `Hi ${nameValue}, you are ${ageValue} years old , You are old people`;
            
    
        }else{
           
            result.innerHTML = `Hey Jeen, you are ${ageValue} years old`;
           
        }
         });
}