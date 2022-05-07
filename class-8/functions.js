// find by GPA
function findbyGPA(gpa){
    students.forEach((GPA)=>{
      if(GPA.GPA===gpa){
          console.log(`
            id: ${GPA.id}
            name: ${GPA.name}
            class: ${GPA.class}
            gpa: ${GPA.GPA}
          `)
      }  
    });
}

// find by cgpa 

function findbyCGPA(cgpa) {
    students.forEach((CGPA)=>{
        if(CGPA.CGPA === cgpa){
            console.log(`
            id: ${CGPA.id}
            name: ${CGPA.name}
            class: ${CGPA.class}
            CGPA: ${CGPA.CGPA}
            `)
        }
      
    });
}

// find by grade 

function findbyGrade(grade) {
    students.forEach((Grade)=>{
        if(Grade.grade==grade){
            console.log(`
            id: ${Grade.id}
            name: ${Grade.name}
            class: ${Grade.class}
            Grade: ${Grade.grade}
            `)
        }
    })
}

// best score and final result
function finalResult() {
    students.forEach((result)=>{
        if(result.CGPA > 3.80 ){
            console.log(`
            id: ${result.id}
            name: ${result.name}
            class: ${result.class}
            Grade: ${result.grade}
            GPA: ${result.GPA}
            CGPA: ${result.CGPA}
            `)
        }
    })
}