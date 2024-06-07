"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Day 15 coding challenge.
//Question 1:Unchanged Magicians:Preserve the original magician names while creating a new "great"  list.
let magicians = ["Alice", "David", "Chris"];
function make_great(magician) {
    let greatMagicians = [];
    magicians.forEach((magician) => {
        greatMagicians.push(`${magician} the Great magician`);
    });
    return greatMagicians;
}
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
let greatMagicians = make_great(magicians.slice()); //Create a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
//Question 2:Sandwiches:Summarize sandwich order with varying ingredients.
function make_sandwich(...item) {
    console.log(`Making a sandwich with: ${item.join(',')}.`);
}
make_sandwich("Ham", "Cheese");
make_sandwich("Turkey", "lettuce", "tomato");
make_sandwich("Avocado", "sprouts", "mustard", "mayo");
function createCar(manufacturer, model, ...extras) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (let extra of extras) {
        car[extra[0]] = extra[1];
    }
    return car;
}
let myCar = createCar("Toyota", "Camry", ["colour", "blue"], ["year", 2024]);
console.log(myCar);
