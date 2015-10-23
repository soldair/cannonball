#!/usr/bin/env node

var server = require('../index')

var yargs = require('yargs')
  .usage('$0 [command] [options]')
  .command('start', 'start the server.')
  .option('socket', {
    alias:'s',
    required:true,
    describe: 'the unix domain socket of the command server'
  })
  .option('port', {
    alias: 'p',
    describe: 'port to bind to',
    default: 5000
  })
  .help('h')
  .alias('h', 'help')
  .version(require('../package.json').version)

var argv = yargs.argv;

//console.log(argv)

var command = argv._[0]

if(command !== 'start') {
  console.error('the only supported command is "start" right now.')
  process.exit(1)
}

var server = require('../index.js')({
  host:"0.0.0.0",
  port:argv.port,
  socket:argv.socket
})


