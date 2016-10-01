/**
 * Created by Sahin on 26/09/16.
 */

var argv = require('yargs')
    .command('hello', 'Greet to user', function (yargs) {
        yargs.option({
            name: {
                demand: true,
                alias: 'n',
                description: 'Your first name'
            },

            surname :{
                demand : true,
                alias : 'l',
                description: 'Your second name'
            }
        }).help('help');
    })
    .help('help')
    .argv;

var command = argv._[0];


if (typeof  command != 'undefined' && typeof argv.name != 'undefined' && typeof argv.surname != 'undefined') {
    console.log(command + ' ' + argv.name + ' ' + argv.surname);
}

else if (typeof  command != 'undefined' && typeof argv.name != 'undefined') {

    console.log(command + ' ' + argv.name);
}
else if (typeof  command != 'undefined') {

    console.log(command + ' world !');
}






