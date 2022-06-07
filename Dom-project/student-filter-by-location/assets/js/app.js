
const data = fetch('http://127.0.0.1:5500/Dom-project/student-filter-by-location/db.json');
const students = data.then(response => response.json());
students.then(students => {
    const allarray = students.students.concat(students.teachers);
    const location = document.getElementById('location');
    const person = document.getElementById('person').value;
    const button = document.getElementById('button');
    const CurrentLocation ='';
    location.onchange = function() {
        CurrentLocation =location.value;
       
    }
console.log(CurrentLocation);
   button.addEventListener("click", function() {

    allarray.forEach(function(item) {
        if (item.address === cc ) {
        console.log(item.name);
        }
    })
       
    });


    // button.addEventListener('click', () => {
        
    // });




}).catch(error => console.log(error));