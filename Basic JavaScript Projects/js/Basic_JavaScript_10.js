function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function array_Function() {
    var greeting = [];
    greeting[0] = "Hello";
    greeting[1] = "Hi";
    greeting[2] = "Nice to see you!";
    greeting[3] = "How have you been?";
    document.getElementById("Array").innerHTML = "When I see you I might say  \"" + greeting[2] + "\""; 
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

function constant_function2() {
    const headphones = {type:"over ear", brand:"Sony", color:"Black"};
    headphones.color = "silver";
    headphones.wire = "wireless";
    document.getElementById("Constant2").innerHTML = "My headphones are " + headphones.wire + "!";
}

var X = 908;
document.write(X);
{
    let X = 32;
    document.write("<br>" + X);
}
document.write("<br>" + X);

function myFunction() {
    return Math.PI;
}
function mydisplay() {

document.getElementById("Pie").innerHTML = myFunction();
}

function myCar() {
    
let Car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
}
document.getElementById("Car_Object").innerHTML = Car.description();
}

function myMug() {
let mug = {
    size: "Large ",
    color: "Orange ",
    content: "Coffee ",
    temp: "Hot ",
    description : function() {
        return "My mug is " + this.color + " and " + this.size + ", while being filled with " + this.temp + " " + this.content + "!";
    }
};
document.getElementById("coffee_Mug").innerHTML = mug.description();
}

function myBreak() {
var text = "";

for (i = 0; i < 10; i++) {
    if (i === 7) { break; }
    text += "The number is " + i + "<br>";
  }
document.getElementById("my_Break").innerHTML = text;
}

function myContinue() {
    var text = "";

for (i = 0; i < 10; i++) {
    if (i === 3) {continue; }
    text += "The number is " + i + "<br>";
}
document.getElementById("my_Continue").innerHTML = text;
}