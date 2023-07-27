const library = require('../lib/library');

library.connect({
    
    will: {
        topic: 'car/kia/z-wa333',
        payload: 'Offline'
    }

});

function data() {

    library.publish('car/kia/z-wa333', 'Online');

}

setInterval(data, 5000);
data();