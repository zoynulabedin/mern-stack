let total_fees = 0;
studentsInfo.forEach((fees)=>{
    total_fees +=fees.admission_fee;
    console.log(`admission fees for ${fees.name} is ${fees.admission_fee}`);
});

console.log(`-------------------------------------------------------------------`);


//Find All Female Students
console.log('Find All Female Students');

studentsInfo.forEach((gender)=>{
    if(gender.gender==='female'){
        console.log(`
        roll: ${gender.roll}
        name: ${gender.name}
        age: ${gender.age}
        class: ${gender.class}
        gender: ${gender.gender}
    `);
    }
});


//find student between 10 - 25 age
console.log('find student between 10 - 25 age')

studentsInfo.forEach((age)=>{
        if(age.age>=10 && age.age<=25){
            console.log(`
        roll: ${age.roll}
        name: ${age.name}
        age: ${age.age}
        class: ${age.class}
        gender: ${age.gender}
    `);
        }
});



//Find class wise student result

console.log('Find class wise student result')

studentsInfo.forEach((result)=>{
    if(result.result==='A+'){
        console.log(`
        roll: ${result.roll}
        name: ${result.name}
        age: ${result.age}
        class: ${result.class}
        gender: ${result.gender}
        result: ${result.result}
    `);
    }
});



//- Location wise student result
console.log('Find location wise student result');

studentsInfo.forEach((location)=>{
    if(location.location==='pabna'){
        console.log(`
        roll: ${location.roll}
        name: ${location.name}
        age: ${location.age}
        class: ${location.class}
        gender: ${location.gender}
        result: ${location.result}
        location: ${location.location}
    `);
    }
});