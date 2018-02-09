//Naming is odd because intent originally was for numbers, not strings, but ended up doing both


let userNum1 = []
let numInput1 = document.getElementById("numInput1");

let userNum2 = []
let numInput2 = document.getElementById("numInput2");


function pushNumbers1() {
    userNum1.push(numInput1.value);
    numInput1.value = "";
    numberOutput1.innerHTML = userNum1;
    console.log(userNum1);
}

function pushNumbers2() {
    userNum2.push(numInput2.value);
    numInput2.value = "";
    numberOutput2.innerHTML = userNum2;
    console.log(userNum2);
}

function unionizeNumbers() {
    let union = ([...userNum1, ...userNum2]);
    console.log(union);
    unionResult.innerHTML = union;
}


let intersection = function () {
    return Array.from(arguments).reduce(function (previous, current) {
        return previous.filter(function (element) {
            return current.indexOf(element) > -1;
        });
    });
};

function intersectNumbers() {
    let intersectedNumbers = intersection(userNum1, userNum2);
    console.log(intersectedNumbers);
    intersectionResult.innerHTML = intersectedNumbers;
}


Array.prototype.diff = function (a) {
    return this.filter(function (i) {
        return a.indexOf(i) === -1;
    });
};

function differenceNumbers() {
    let differencedNumbers1 = userNum1.diff(userNum2);
    let differencedNumbers2 = userNum2.diff(userNum1);
    let differencedNumbers = differencedNumbers1.concat(differencedNumbers2);
    console.log(differencedNumbers);
    differenceResult.innerHTML = differencedNumbers;
}