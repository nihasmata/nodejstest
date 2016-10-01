/**
 * Created by Sahin on 27/09/16.
 */

function createError() {
    throw  new Error('kötü bişeyler oluyor :)');
}


try {
    createError();

}

catch (e) {
    console.log('Omg catched')
}

finally {
    console.log('finally worked')

}
