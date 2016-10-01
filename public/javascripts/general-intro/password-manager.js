/**
 * Created by Sahin on 26/09/16.
 */

var storage = require('node-persist');

storage.initSync();


function createAccount(account) {
    var accounts = storage.getItemSync('accounts');

    if (typeof accounts == 'undefined') {
        accounts = [];
    }

    accounts.push(account);
    storage.setItemSync('accounts', accounts);

    return account;

}


function getAccount(accountName) {

    var accounts = storage.getItemSync('accounts');
    var matchedAccount;

    accounts.forEach(function (account) {
        if (account.name == accountName) {
            matchedAccount = account;
        }
    })

    return matchedAccount;
}

/*createAccount({
    name : "sahin",
    username : 'atam.sahin@gmail.com',
    password : 'sahin2334'

})
*/


var sahinAccount = getAccount('sahin');

console.log('mail '+sahinAccount.username);
console.log(sahinAccount);


