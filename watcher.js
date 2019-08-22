#!/usr/bin/env node

const where = process.argv[2]
const { spawn } = require('child_process')
const fswatch = spawn('fswatch', ['-0', '-e', '.*', '-i', 'messages.json', '-r', '-x', '--event-flag-separator=" || "', where])
const fs = require('fs')

console.log('Running fswatch...')

fswatch.stdout.on('data', (data) => {
  data = data.toString()
  if (data.indexOf('messages.json Created') > -1 && data.indexOf('/funding') > -1) {
    const thing = data.split(' Created')[0]
    fs.chmodSync(thing, '000')
  }
})
