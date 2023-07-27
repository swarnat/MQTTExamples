const library = require('../lib/library');

const client = library.connect();

function data() {
    
    library.publishAndFinish('car/kia/z-wa999/speed', Math.floor(Math.random() * 100).toString(), {
        qos: 2
    });
    
}

data();


