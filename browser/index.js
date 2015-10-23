// client side js to bundle with browserify
var req = require('hyperquest')

document.body.appendChild(document.createTextNode("js works!"))


var server = window.location.protocol+'//'+window.location.host


apiGet('hi',function(err,data){
  if(err) throw err
  document.body.appendChild(document.createElement('br'))
  document.body.appendChild(document.createTextNode("api works: "+data))
})

function apiGet(command,cb){
  req(server+"/cmd/"+encodeURIComponent(command),function(err,res){
    if(err) return cb(err)
    var bufs = []
    res.on('data',function(data){
      bufs.push(data)
    }).on('end',function(){
      cb(false,Buffer.concat(bufs)+'')
    }).on('error',function(err){
      return cb(err)    
    })
  })
}
