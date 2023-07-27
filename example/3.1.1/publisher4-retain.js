const library = require('../lib/library');

library.connect();

function data() {
    library.publish('car/kia/z-wa999/speed', Math.floor(Math.random() * 100).toString(), {
        retain: 1
    });
    
    library.publish('car/bmw/c-wa666/speed', Math.floor(Math.random() * 100).toString(), {
        retain: 1
    });
    
    library.publish('car/kia/z-wa333/speed', Math.floor(Math.random() * 100).toString(), {
        retain: 1
    });
}

setInterval(data, 10000);
data();