
// Create an email pattern 

let email = "trustcodernet@yahoo.com";
let emailpattern = /^[a-z0-9_]*@[a-z]{2,}\.[a-z]{2,5}$/;
console.log(emailpattern.test(email));


//Create a  username pattern

let user = "trust_coder1";
let userpattern =/^[a-z0-9_]*$/;
console.log(userpattern.test(user));


// Create a Bangladeshi phone number pattern

let phoneNumber ="+8801735361634";
let phoneNumberPattern = /^(\+8801|01)[0-9]{9}$/;
console.log(phoneNumberPattern.test(phoneNumber));

// Create a password pattern 
let pasword = "Xy@_1234";
let passwordPattern = /^[a-zA-Z0-9#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,16}/i;
console.log(passwordPattern.test(pasword));

// Create a zipcode pattern 
let zipcode ="6670";
let zipcodePattern = /^[0-9]{4}$/;
console.log(zipcodePattern.test(zipcode));

