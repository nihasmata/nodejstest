/**
 * Created by Sahin on 22/09/16.
 */


var myArray=[50,100];
myArray.push(56);
myArray.push(87);

myArray.pop(); //Remove last element

myArray.shift();
console.log(myArray)

myArray.forEach(function (arrayElememnt) {
    console.log(arrayElememnt)
})