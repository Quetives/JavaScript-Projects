function displaytype(food) {
    var charactertype = food.getAttribute("data-character-type");
    alert(charactertype + " is a " + food.innerHTML + "!");
}