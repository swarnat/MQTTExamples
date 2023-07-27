const library = require('../lib/library');

library.connect({
    protocolVersion: 5,
});

function data() {

    library.publish('car/kia/z-wa999/speed', 'Hallo Z-WA 999');
    
}

setInterval(data, 500);
data();