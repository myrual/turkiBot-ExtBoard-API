var i2c = require('i2c');
var address = 0x04;

var wire = new i2c(address, {device: '/dev/i2c-1', debug:true});
wire.writeByte(0x55, function(err) {});
