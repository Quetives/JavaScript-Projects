function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

function my_Dictionary2() {
    var animal = {
        Species:"Cat",
        Color:"Tortoise",
        Breed:"Manx",
        Age:10,
        Sound:"Meow!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary2").innerHTML = animal.Breed;
}