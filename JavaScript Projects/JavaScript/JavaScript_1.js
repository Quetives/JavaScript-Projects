function Color_Function() {
    var Color_Output;
    var colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(colors) {
        case "Orange":
            Color_Output = "Orange" + Color_String;
            break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
            break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
            break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
            break;
        case "Green":
            Color_Output = "Green" + Color_String;
            break;
        case "Red":
            Color_Output = "Red" + Color_String;
            break;
            default:
                Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}
function canvas_Function() {
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
}

function canvas_Function2() {
    var c = document.getElementById("canvas_2");
    var ctx = c.getContext("2d");

    var grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "Blue");
    grd.addColorStop(1, "Orange")

    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 150, 100);
}