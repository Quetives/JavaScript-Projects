window.alert("Hello, world!");

document.write('Hello, world!');

var x = "Hello, world!"

document.write(x);

var A = "This is a string";

document.write(A);

var B = "Hello"

window.alert(B);

document.write("Lisa told Bart, \"Knock it off, Bart! Or I'll tell dad!\"<br>\"Eat my shorts!\" Bart responded.");

document.write("I thought to myself... \"How does JavaScript work?\"");

document.write("\"Be who you are and say what you feel,"
+ " because those who mind don\'t matter and thos who matter don\'t mind.\""
+ "-Dr. Seuss");

document.write(" I just need to concatenate"
+ " to finish this assignment.");

var C = "Concatenated" + " String"
document.write(C)

var Family = "Quetives", Dad = "Harry", Mom = "Becky", Son = "Richard", Brother = "Eric";
document.write(Mom);

var blues = "I have the blues.";
var blues = blues.fontcolor("blue");
document.write(blues);

var Family = Family.fontcolor("yellow");
var Dad = Dad.fontcolor("pink");
var Mom = Mom.fontcolor("purple");
var Son = Son.fontcolor("orange");
var Brother = Brother.fontcolor("brown");

document.write(3 + 3);

document.write(15 + 5);

function myFirstFunction() {
    var str = "This text is green!";
    var result = str.fontcolor("green");
    document.getElementById("Green_text").innerHTML = result;
}