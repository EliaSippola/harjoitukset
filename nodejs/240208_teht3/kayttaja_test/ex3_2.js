const kayttaja = require('./modules/kayttaja.js');

console.log(`${kayttaja.getName()} opiskelee ohjelmistokehittäksi kaupungissa ${kayttaja.getLocation()} ja on syntynyt ${kayttaja.birthDate}.`);