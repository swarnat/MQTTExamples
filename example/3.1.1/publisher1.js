const library = require('../lib/library');

library.connect();

function data() {

    library.publish('car/kia/z-wa333', 'Hallo Z-WA 333');

    library.publish('car/bmw/c-wa666', 'Hallo C-WA 666');

    library.publish('car/kia/z-wa999', 'Hallo Z-WA 999');
    
}

setInterval(data, 2000);
data();