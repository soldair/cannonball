// i make servers
var http = require('http')
var ecstatic = require('ecstatic')

module.exports = function(config){
  config = config||{}

  var handleStatic = ecstatic({ root: __dirname + '/static' })
  var server = http.createServer(function(req,res){
    if(req.url.indexOf('/cmd') === 0){
      console.log('handle command! ',req.url)
      res.end('{"hi":"=)"}')
    } else handleStatic(req,res)
  }).listen(config.port||0,function(err){
    if(err) throw err

    var addr = this.address();
    console.log('server started on port ',addr.port)
    console.log('open your browser to http://127.0.0.1:'+addr.port+'/')
  })

  return server;
}

