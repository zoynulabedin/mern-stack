//Create a loop that will rotate from 1000 to 300

for(let i = 1000; i >= 300; i--) {
  console.log(i);
}

//Find the even and odd numbers from 1 and 1000 through for loop

for(let a=1; a<=1000; a++) {
  a%2==0 ? console.log(a + " is even") : console.log(a + " is odd");
}

//Find the number divisible by 7 between 1 and 1000

for(let d=1; d<=1000; d++) {
    d%7==0 ? console.log(d + " is divisible by 7") : console.log(d + " is not divisible by 7");
}

//Create a loop using “for” that will increment by 3 per step and break the loop when it finds a number divisible by 11

for(let m=1; m<=100; m++){
    if(m%11==0){
        console.log(m + " is divisible by 11");
        break;
    }
}

//Create a loop that rotates 500 times using the for loop where you just pull out the numbers divisible by 3 and 4

for(let n=1; n<=500; n++){
    if(n%3==0 && n%4==0){
        console.log(n + " is divisible by 3 and 4");
    }
}

//Create a loop where the initial value is 10,000. You need to rotate the loop 50 times by using the increment and decrement operator twice.

for(let x=10000; x>=9950; x--){
    console.log(x);
}
for(let y=10000; y<=10050; y++){
    console.log(y);
}