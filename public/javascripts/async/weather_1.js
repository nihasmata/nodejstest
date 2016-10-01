/**
 * Created by Sahin on 28/09/16.
 */

var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/find?q=Istanbul&units=metric&appid=1e44ebd58e750f2ada4ca507713eb3c1';

request({
    url: url,
    json: true
}, function (error, response, body) {
    //console.log('Aaa cidden cevap geldi : Body :' + JSON.stringify(body, null, 4));

    //console.log("Temprature :" + body['list']);

    var listArray = body.list
    var listArrayStr = JSON.stringify(listArray,null,4);

    for (var i = 0; i < listArrayStr.length; i++) {
        console.log(i + "-->" + listArrayStr[i])
    }

    //console.log(listArrayStr);
});