/**
 * Created by Sahin on 27/09/16.
 */

var crypto = require('crypto-js');

var scretKey = "123abc";

var messageObject = {
    name: 'Sahin',
    age: 45
};

var messageString = JSON.stringify(messageObject);
var encryptedMessageStr = crypto.AES.encrypt(messageString, scretKey);

var decryptedMessageByte = crypto.AES.decrypt(encryptedMessageStr, scretKey);
var decryptedMessageString = decryptedMessageByte.toString(crypto.enc.utf8);

var messageObjectAgain = JSON.parse(decryptedMessageString);

console.log('Name :' + messageObjectAgain.name);


var message = 'Merhabalar bugün günlerden salı güzel bir sonbahar günü';


var encryptedMessage = crypto.AES.encrypt(message, scretKey);

console.log('Message :' + encryptedMessage);

var decrypedByte = crypto.AES.decrypt(encryptedMessage, scretKey);
var decrypedMessage = decrypedByte.toString(crypto.enc.Utf8);

console.log(decrypedMessage);