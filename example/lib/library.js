const mqtt = require('mqtt');

let client;

module.exports = {
    connect: (options = {})  => {
        
        // receive dev server
        options.servers = [{ host: 'localhost', port: 1883 }];
        
        if(options.clientId) {
            // receive qos 1+2
            options.clean = false;
        }

        client = mqtt.connect(options);

        client.on('connect', (ack) => {
            if(ack.sessionPresent === true) {
                console.log('MQTT Server restored');
            } else {
                console.log('MQTT Server connected');
            }
            
        });


        return client;
    },

    subscribe: (topic, options = {}) => {

        client.subscribe(topic, options, () => {
            console.log(`Topic "${topic}" subscribed`);
        });

    },

    publish: (topic, message, options = {}) => {

        client.publish(topic, message, options, () => {
            console.log(`Published message "${message}" to topic "${topic}"`);
        });

    },
    
    publishAndFinish: (topic, message, options = {}) => {

        client.publish(topic, message, options, () => {
            console.log(`Published message "${message}" to topic "${topic}"`);
            client.end();
        });

    },

    handleMessage() {

        client.on('message', (t, message, paket) => {
            const ts = new Date();
            const currentTime = ts.getHours() + ':' + ts.getMinutes() + ':' + ts.getSeconds();

            console.log(`[${currentTime}] ${t}: Received "${message.toString()}"`);
          });

    },


}