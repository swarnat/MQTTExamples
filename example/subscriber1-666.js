const library = require('./lib/library');

library.connect();
library.handleMessage();

library.subscribe('car/bmw/c-wa666/#');