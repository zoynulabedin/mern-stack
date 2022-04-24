let people = (name='', age) => {
    if(age>0 && age <=13){
        return `Hi ${name} your age is ${age}. you are a children`;
    }else if(age>13 && age <=19){
        return `Hi ${name} your age is ${age}, you are a teenagers`;
    }else if(age>19 && age <=29){
        return `Hi ${name} your age is ${age}, you are a young person`;
    }else if(age>29 && age <=100){
        return `Hi ${name} your age is ${age}, you are a old person`;
    }else{
        return `Hi ${name} your age is ${age}, you are not a man`;
    }
 }


 let name = prompt('Enter your name');
 let age = prompt('Enter your age');

let root = document.getElementById('root');
root.innerHTML = people(name,age);