var rasp2c = require('rasp2c');
rasp2c.dump('0x04', '0x11-0x14', function(err, result){
    if(err){
    console.log(err);
    }else{
    console.log(result);
    }
});

rasp2c.set('0x04', '0x11', '0x12', function(err, result){
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
});
