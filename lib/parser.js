// parser!

var t2 = require('through2')
// helper to compose 2 strems into a duplex stream.
var duplexer2 = require('duplexer2')

module.exports = funciton(){

  var state = ''

  var read = t2(handleRead)
  var write = t2.obj(handleWrite)
  var out = duplexer2({},write,read)

  return out;

  function handleRead(data,enc,cb){
    console.log('got data from connection!')
    // data is a node Buffer class. 
    console.log(data)
    // i cast it to a string to log it's data as utf8
    console.log(data+'')
  }

  function handleWrite(data,enc,cb){
    console.log('handle the write! ')

    // im expecting writes could be javascript objects with a key called command
    // {command:"commandvalue"}
    // translate a command object into a properly formated command for the wire protocol.
    console.log(data)

    // /dev/null the data right now.
    cb()
  }


}



