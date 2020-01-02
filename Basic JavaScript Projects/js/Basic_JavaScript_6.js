document.write(Bigger = (5 > 1) ? "Left number is bigger":"Right number is bigger");

function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

function vote_Function() {
    var age, Can_Vote;
    age = document.getElementById("age").value;
    Can_Vote = (age < 18) ? "You are too young to vote!":"You can vote!";
    document.getElementById("Vote").innerHTML = Can_Vote; 
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Animal(species, breed, age, color) {
    this.Animal_species = species;
    this.Animal_breed = breed;
    this.Animal_age = age;
    this.Animal_color = color;
}
var Doctor = new Animal("Cat", "Manx", 8, "Tortoise");
var Raider = new Animal("Dog", "Pitbull", 4, "Brown");
function myAnimals() {
    document.getElementById("New_and_This").innerHTML = "I once had a " + Doctor.Animal_species + " named Doctor! and later I got a " + Raider.Animal_species + " named Raider.";
}

function People(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
var Richard = new People("Richard", "Quetives", 34, "Brown");
function getMe() {
    document.getElementById("Get_Me").innerHTML = "My name is " + Richard.firstName + " " + Richard.lastName + ". I am " + Richard.age + " years old and I have " + Richard.eyeColor + " eyes.";
}

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

function myNested() {
    document.getElementById("Nested_Function").innerHTML = Subtract();
    function Subtract() {
        var initial = 10;
        function Minus_one() {initial -= 1;}
        Minus_one();
        return initial;
    }
}