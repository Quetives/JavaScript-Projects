function bluetext() {
    var txt = "This Text is blue!";
    var result = txt.fontcolor("blue");
    document.getElementById("Blue_Text").innerHTML = result;
}

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}

function Function_1() {
    var saying = "This is a way to";
    saying += " concatenate two phrases together!";
    document.getElementById("string").innerHTML = saying;
}
