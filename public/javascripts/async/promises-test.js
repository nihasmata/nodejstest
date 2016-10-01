/**
 * Created by Sahin on 30/09/16.
 */


function doWork() {

    return new Promise(function (resolve, reject) {
         resolve('merhabalar ben resolve');
        //reject("ben reject");

        console.log("inside promise");
    });
}


doWork().then(function () {
    return doWork();
}).then(function () {
    console.log("ikinci promise resolve");
}, function () {
    console.log("ikinci promise reject");
});