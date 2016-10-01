/**
 * Created by Sahin on 29/09/16.
 */

var location = require('./location.js');

location(function (location) {
    if (!location) {
        console.log('unable to get location information!')
    }

    else{
        console.log('City :'+location.city);
        console.log('Latitutde :'+location.loc);
    }
})

