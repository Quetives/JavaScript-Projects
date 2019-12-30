document.write(typeof "Word");

document.write(typeof 3);

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;   
}

function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN('This is a string');
}


function my_Function3() {
    document.getElementById("Test3").innerHTML = isNaN('007');
}

document.write(2E310);

document.write(-3E310);

function my_Function4() {
    document.getElementById("Test4").innerHTML = (2E310);
}

function my_Function5() {
    document.getElementById("Test5").innerHTML = (-3E310);
}

document.write(10 > 2);

document.write(10 < 2);

console.log(2 + 2);

document.write("10" + 5);

console.log(2 > 10);

document.write(10 == 10);

document.write(3 == 11);

x = 10;
y = 10;
document.write(x === y);

x = 82;
y = "82";
document.write(x === y);

A = "Magnus";
B = "Magnus";
document.write(A === B);

document.write(5 > 2 && 10 > 4);

document.write(5 > 10 && 10 > 4);

document.write(5 > 10 || 10 > 4);

document.write(5 > 10 || 10 > 20);

function not_Function() {
    document.getElementById("Not").innerHTML = ! (5 > 10);
}

function not_Function2() {
    document.getElementById("Not2").innerHTML = ! (20 > 10);
}