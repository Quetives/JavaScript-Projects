function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["lname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    if (y == "") {
        alert("Name must be filled out");
        return false;
    }
    
}