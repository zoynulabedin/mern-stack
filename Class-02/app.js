// Check the age of your marriage and provide age-appropriate Messages

let Name = prompt("Enter your name");
let Age = prompt("Enter your age");

if(Age>21){
  
    console.log(`${Name} Congratulations! you are eligible to marry`);
}else{
    console.log(`${Name} Sorry! you are not eligible to marry`);
}

// Prepare the resulting system where results can be found in Grade and GPA

let StudentName = prompt("Enter your name");
let Studentmark = prompt("Enter your marks");

if(Studentmark >=0 && Studentmark <= 32 ){
    console.log(`${StudentName} Your Grade is F and GPA is 0 And Marks are ${Studentmark}`);
}else if( Studentmark >= 32 && Studentmark < 40 ){
    console.log(`${StudentName} Your Grade is D and GPA is 1 And Marks are ${Studentmark}`);
}else if(Studentmark >= 40 && Studentmark < 50){
    console.log(`${StudentName} Your Grade is C and GPA is 2 And Marks are ${Studentmark}`);
}else if(Studentmark >= 50 && Studentmark < 60){
    console.log(`${StudentName} Your Grade is B and GPA is 3 And Marks are ${Studentmark}`);
}else if(Studentmark >= 60 && Studentmark < 70){
    console.log(`${StudentName} Your Grade is A- and GPA is 3.5 And Marks are ${Studentmark}`);
}else if(Studentmark >=70 && Studentmark <80){
    console.log(`${StudentName} Your Grade is A and GPA is 4 And Marks are ${Studentmark}`);
}else if(Studentmark >=80 && Studentmark<=100){
    console.log(`${StudentName} Your Grade is A+ and GPA is 5 And Marks are ${Studentmark}`);
}else{
    console.log(`${StudentName} Sorry! Invalid Marks`);
}


// Prepare a user access program based on age where everyone between the ages of 20 and 35 will have access

let Name = prompt("Enter your name");
let Age = prompt("Enter your age");

if(Age>=20 && Age<=35){
    console.log(`${Name} Welcome to the system`);
}else{
    console.log(`${Name} Sorry! you are not eligible to enter the system`);
}