window.onload = function() {
    main();
}

let main = () => {
    let button = document.getElementById("button");
    

    button.addEventListener("click", function() {
        resultGenerator();

    });
}

let resultGenerator = () => {
    let totalMarks = document.getElementById("totalMarks");
    let gpa = document.getElementById("gpa");
    let grade = document.getElementById("grade");
    let bn = document.getElementById("bn");
    let en = document.getElementById("en");
    let math = document.getElementById("math");

    let bnval = bn.value;
    let enval = en.value;
    let mathval = math.value;

    let total = parseInt(bnval) + parseInt(enval) + parseInt(mathval);
    let gpaVal = total / 3;
    let gradeVal = "";

    if (gpaVal >= 90) {
        gradeVal = "A";
    }
    else if (gpaVal >= 80) {
        gradeVal = "B";
    }
    else if (gpaVal >= 70) {
        gradeVal = "C";
    }
    else if (gpaVal >= 60) {
        gradeVal = "D";
    }
    else {
        gradeVal = "F";
    }

    totalMarks.innerHTML = `Total Marks: ${total}`;
    gpa.innerHTML = `Average: ${gpaVal}`;
    grade.innerHTML = `Grade: ${gradeVal}`;
}