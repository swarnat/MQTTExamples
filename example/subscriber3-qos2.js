const library = require('./lib/library');

library.connect({
    clientId: 'subscriber999-2',
});
library.handleMessage();

library.subscribe('car/kia/z-wa999/speed', {
    qos: 2
});

