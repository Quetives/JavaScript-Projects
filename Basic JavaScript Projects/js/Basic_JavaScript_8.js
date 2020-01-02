function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var Whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = Whole_sentence;
}

function concat_Test() {
    var test_1 = "I am ";
    var test_2 = "going to ";
    var test_3 = "concatenate this ";
    var test_4 = "set of ";
    var test_5 = "strings together!";
    var assignment = test_1.concat(test_2, test_3, test_4, test_5);
    document.getElementById("Concatenate_2").innerHTML = assignment;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function slice_Method_2() {
    var Sentence = "I am going to Slice this variable!";
    var Section = Sentence.slice(14,19);
    document.getElementById("Slice_2").innerHTML = Section;
}

function upper_Method() {
    var Sentence = "uppercase!";
    var upper = Sentence.toUpperCase();
    document.getElementById("upper_Case").innerHTML = upper;
}

function search_Method() {
    var Sentence = "Do you even want to go to Lunch!?";
    var search = Sentence.search("Lunch");
    document.getElementById("search").innerHTML = search
}

function string_Method() {
    var x =182;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function precision_Method_2() {
    var X = 1235484312.3215646431856513;
    document.getElementById("Precision_2").innerHTML = X.toPrecision(10);
}

function to_Fixed() {
    var num = 9.762349
    var n = num.toFixed(2);
    document.getElementById("toFixed").innerHTML = n;
}

function value_Of() {
    var str = "Hello World!";
    var res = str.valueOf();
    document.getElementById("value").innerHTML = res;
}