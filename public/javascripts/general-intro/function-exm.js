/**
 * Created by Sahin on 22/09/16.
 */

var person = {}; //Burada obje tanımlıyoruz

person.name="Sahin";
person.surname="Atam";
person.age=45;


function  showPerson(personObj) {
    console.log(personObj.name+" : "+ personObj.surname+" : "+personObj.age )
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

showPerson(person);

function showName (name) {
    console.log('Hello, i am '+name);
}

showName('Sahin')

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var person2 = {

    name : 'Sahin',
    surname : 'Atam',
    age : 25
};


function  showPerson2(personObj) {
    console.log(personObj.name+" : "+ personObj.surname+" : "+personObj.age )
}

showPerson2(person2);




