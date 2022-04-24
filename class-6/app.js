// total admission fees for

let total_fees = 0;
students.forEach((fees)=>{
    total_fees += fees[6];
    console.log(`admission fees for ${fees[0]} is ${fees[6]}
    `
    );
})
console.log(`-------------------------------------------------------------------`)
console.log(`total admission fees for all students is ${total_fees}`);


//Find All Female Students

students.sort().forEach((female)=>{
    if(female[4]=== 'female'){
        console.log(`
            roll: ${female[2]}
            name: ${female[0]}
            age: ${female[2]}
            class: ${female[3]}
        `)
    }
})

//find student between 10 - 25 age
console.log('find student between 10 - 25 age')

students.forEach((ageRange)=>{

    if(ageRange[2] >= 10 && ageRange[2] <=25){
        console.log(`
        
            roll: ${ageRange[1]}
            name: ${ageRange[0]}
            age: ${ageRange[2]}
            class: ${ageRange[3]}
        `)
       
    }
})

//Find class wise student result

console.log('Find class wise student result')

students.sort().forEach((result)=>{
    if(result[3]===5){
        console.log(`
            roll: ${result[1]}
            name: ${result[0]}
            age: ${result[2]}
            class: ${result[3]}
            result: ${result[7]}
        `)
    }
});


//- Location wise student result
console.log('Location wise student result');
students.sort().forEach((location)=>{
    if(location[5]=== 'pabna'){
        console.log(`
            roll: ${location[1]}
            name: ${location[0]}
            age: ${location[2]}
            class: ${location[3]}
            result: ${location[7]}
            location: ${location[5]}
        `)
    }
});