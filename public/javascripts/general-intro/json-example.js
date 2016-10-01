/**
 * Created by Sahin on 27/09/16.
 */

var person = {
    name: 'Sahin',
    surname: 'Atam'
};

var personJson = JSON.stringify(person); //Objeyi json string'ine dönüştür
console.log(personJson);

var personObject = JSON.parse(personJson); // Json stringini objeye dönüştür
console.log(personObject.name);


var animal = '{"name": "Van Kedisi"}';

var animalObject= JSON.parse(animal);

animalObject.age=45;

var animalString= JSON.stringify(animalObject);

console.log(animalString)
