function greetUser() {
    var name = prompt("What is your name?");
    var standardized = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
    alert("Hello, " + standardized + ".");
}

function toggleInformation() {
    var information = document.getElementById("information");
    if (information.style.display === "none") {
        information.style.display = "block";
    } else {
        information.style.display = "none";
    }
}

function task3() {
    var taskk = document.getElementById("task");
    if (taskk.style.display === "none") {
        taskk.style.display = "block";
    } else {
        taskk.style.display = "none";
    }
}

function openTask4() {
    var currentAge = prompt("Enter your current age:");
    calculateRemainingTime(parseInt(currentAge));
}

function calculateRemainingTime(currentAge) {
    var lifeExpectancy = 90;
    var remainingYears = lifeExpectancy - currentAge;

    var remainingDays = remainingYears * 365;
    var remainingWeeks = remainingYears * 52;
    var remainingMonths = remainingYears * 12;

    var resultMessage = "You have " + remainingDays + " days, " + remainingWeeks + " weeks, and " + remainingMonths + " months left.";
    alert(resultMessage);

}

function openTask5() {
    var weight = prompt("Enter your weight in kilograms:");
    calculateBMI(parseFloat(weight));
}

function calculateBMI(weight) {
    var height = prompt("Enter your height in meters:");
    var bmi = weight / (height * height);

    var message = "";

    if (bmi < 18.5) {
        message = "Your BMI is " + bmi.toFixed(2) + ", which means that you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        message = "Your BMI is " + bmi.toFixed(2) + ", which means that you have a normal weight.";
    } else {
        message = "Your BMI is " + bmi.toFixed(2) + ", which means that you may be overweight.";
    }

    alert(message);
}

function openTask6() {
    var year = prompt("Enter a year:");
    checkLeapYear(parseInt(year));
}

function checkLeapYear(year) {
    var leapYear = false;

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                leapYear = true;
            }
        } else {
            leapYear = true;
        }
    }

    var message = leapYear ? "Leap year." : "Not a leap year.";
    alert(message);
}

function openTask7() {
    var names = prompt("Enter a list of names separated by commas:");
    var namesArray = names.split(",").map(name => name.trim());
    var selectedName = selectRandomName(namesArray);
    var message = selectedName + " is going to buy lunch today.";
    alert(message);
}

function selectRandomName(names) {
    var randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}
//Aidana, Bekbolat, Mariya, Aleksandr, Diana

function openTask8() {
    var n = prompt("Enter the number of items in the sequence:");
    var fibonacciArray = fibonacciGenerator(n);
    var message = "Fibonacci sequence: " + fibonacciArray.join(", ");
    alert(message);
}

function fibonacciGenerator(n) {
    var sequence = [0, 1];

    for (var i = 2; i < n; i++) {
        var nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
    }

    return sequence;
}