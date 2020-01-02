function addition_function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var Subtraction = 5 - 2
    document.getElementById("Subtract").innerHTML = "5 - 2 = " + Subtraction;
}

function minus() {
    var Minus = 17 - 4
    document.getElementById("Minus").innerHTML = "17 - 4 = " + Minus;
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Multiply").innerHTML = "6 x 8 = " + simple_Math;
}

function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Divide").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Multiple").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulous_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("modulous").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("negation").innerHTML = -x;
}

var X = 5;
X++;
document.write(X);

var y = 5.25;
y--;
document.write(y);

window.alert(Math.random() * 100);

document.write(Math.PI);