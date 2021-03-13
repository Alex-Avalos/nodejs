const express = require('express');
const http=require('http');
//const socketIo=require('socket.io');

const app = express();
const server=http.createServer(app);
const io = require('socket.io')(server);
//const io=socketIo.listeners(server);

io.on('connection',function(socket){
    console.log('a new socket connected');
});

app.get('/',(req,res,next)=>{
    res.sendFile(__dirname+'/bascula.html');
    app.use('/assets', express.static(__dirname + '/assets'));
    app.use('/images', express.static(__dirname + '/images'));
});

var serialport = require('serialport');
var Readline = serialport.parsers.Readline;
var parser = new Readline();
var path = 'COM4' ;
var myPort = new serialport(path ,{
    baudRate: 9600,
});

myPort.on('open',function(){
    console.log('Serial Port Abierto');
});

myPort.on('data', function(data){
    console.log(data.toString());
    io.emit('serialport:data',{
        value:data.toString()
    });
});

myPort.on('err', function(err){
    console.log(err.message);
});

server.listen(3000,()=>{
    console.log('server on port',3000)
});

/*myPort.pipe(parser);
parser.on('data', readSerialData);

function readSerialData(data) {
    console.log("Aqui --> "+data);
    sleep(1000);
}
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
*/