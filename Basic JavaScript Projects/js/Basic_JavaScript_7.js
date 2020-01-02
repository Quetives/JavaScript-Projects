function Add_Numbers_1() {
    var x = 10;
    console.log(20 + x + "<br>");
}
function Add_Numbers_2() {
    console.log(x + 100);
}
Add_Numbers_1();
Add_Numbers_2();

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function get_hours() {
    if (new Date().getHours() < 18) {
        document.getElementById("If").innerHTML = "What a beautiful day!";
    }
    else {
        document.getElementById("If").innerHTML = "How are you this evening?";
    }       
}

function Age_Function() {
    var Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_Old_Are_You?").innerHTML = Vote;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}