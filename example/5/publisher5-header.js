const library = require('../lib/library');

library.connect({
    protocolVersion: 5,
});

function data() {

    library.publish('car/kia/z-wa999/speed', Math.floor(Math.random() * 300).toString(), {
        retain: 1,

        // share information with subscriber
        properties: {
            messageExpiryInterval: 5,

            responseTopic: "car/kia/z-wa999/response",
            correlationData:  Math.floor(Math.random() * 100000).toString()
        }
        
    });
}

setInterval(data, 2000);
data();