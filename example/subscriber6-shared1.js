const library = require('./lib/library');

library.connect({
    protocolVersion: 5,
});

library.handleMessage();

library.subscribe('$share/z-wa999/car/kia/z-wa999/speed');

