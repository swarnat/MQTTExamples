const library = require('./lib/library');

const client = library.connect({
    protocolVersion: 5,
});

library.subscribe('car/kia/z-wa999/#');

client.on('message', (t, message, paket) => {
    const ts = new Date();
    const currentTime = ts.getHours() + ':' + ts.getMinutes() + ':' + ts.getSeconds();

    console.log(paket.properties);

    console.log(`[${currentTime}] ${t}: Received "${message.toString()}"`);
  });


