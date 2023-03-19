/*Assignment for Grade Generator */

function calculateGrade() {

    const score = parseInt(document.getElementById("score").value);

    if (score > 79 && score < 101) {
        grade = "A";
    } 

    else if (score >= 60 && score <= 79) {
        grade = "B";
    }

     else if (score >= 50 && score <= 59) {
        grade = "C";
    } 

    else if (score >= 40 && score <= 49) {
        grade = "D";
    } 

    else if (score >= 39 && score <= 0) {
        grade = "E";
    }

    else {
        grade = "not valid"
    }
    
    document.getElementById("result").innerHTML = `Your grade is ${grade}`;
}


/* Assignment of the speedlimit */

function checkSpeed() {

	const speedInput = document.getElementById("speed-input");

	const speed = Number(speedInput.value);

	const speedLimit = 70;

	const kmPerPoint = 5;    

	if (speed <= speedLimit) {


		document.getElementById("output").textContent = "Ok";

	} else {

		const points = Math.floor((speed - speedLimit) / kmPerPoint);

		if (points >= 12) {

			document.getElementById("output").textContent = "License suspended";

		} else {

			document.getElementById("output").textContent = `Points: ${points}`;

		}
	}
}
