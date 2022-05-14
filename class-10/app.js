
let mail = "zoynul@yahoo.net";
let pattern =/^[a-z0-9]*@[a-z]{2,}\.(com|net)$/;
let pattern =/^[a-z0-9]*@[a-z]{2,}\.[a-z]{2,6}$/;

console.log(pattern.test(mail));