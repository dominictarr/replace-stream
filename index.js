#! /usr/bin/env node

var es = require('event-stream')
var parse = require('parse-regexp')

var replace = module.exports = function (pattern, string) {
  return es.replace(pattern, string)
}

if(!module.parent) {
  var rx = parse(process.argv[2]) || process.argv[2]
  process.stdin.pipe(replace(rx, process.argv[3])).pipe(process.stdout)
}


