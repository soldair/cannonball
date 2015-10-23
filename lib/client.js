// manage sending commands to the camera control daemon.
// domain socket!

var net = require('net')
var parser = require('./parser')

// return an instanmce of the api client
module.exports = function(config){
  config = config||{}


  var o = {
    command:function(command,cb){
      // send command to active connection.

    } 
  }


  return o


  function makeConnection(){
    var con = net.connect(config.socket,function(){
      // connected
      parseStream.emit('connected')
    })

    // parser is a duplex stream.
    var parseStream = parser()
    // output from connection gets parsed.
    // commands sent from the parser will get sent to the connection.
    con.pipe(parseStream).pipe(con)

    // Streams use the "error" event as a way to propagate exceptions.
    // If an error listener is not bound it will throw and crash the process.
    //
    // This is a pattern to send the error event to the stream that i expose 
    // from this function so we have a chance to handle the error how we see fit.
    con.on('error',function(err){
      parseStream.emit('error',err)
    })

    return parseStream;
  }
}


