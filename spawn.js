#!/usr/bin/env node

const where = process.argv[2] || process.argv[1]
if (!where) {
  console.error('Supply a path to monitor')
  process.exit(1)
}
const fkill = require('fkill')
const { spawn } = require('child_process')
const fse = require('fse')
const path = require('path')
const os = require('os')

const detectFsWatch = spawn('fswatch', [])

detectFsWatch.on('error', () => {
  console.error('You do not have fswatch installed.')
})

detectFsWatch.stderr.on('data', (data) => {
  if (data.includes('Invalid number of arguments.')) {
    hasFsWatch()
  }
})

function hasFsWatch () {
  // see if a PID tmp file exists
  const PIDPath = path.join(os.tmpdir(), 'disable_console_ads_pid.txt')
  const PIDFound = fse.existsSync(PIDPath)
  if (PIDFound === true) {
    // if there is one, grab the PID number from the process.env and then kill it
    const contents = fse.readFileSync(PIDPath).toString('utf8')
    const PID = parseInt(contents)
    fkill(PID, { force: true }).then(() => {
      // found it, kill the process referenced
      console.log('Killing old console ads disabler at PID ' + PID)
      fse.unlinkSync(PIDPath)
      spawnIt()
    }, () => {
      // process not found
      fse.unlinkSync(PIDPath)
      spawnIt()
    })
  } else {
    spawnIt()
  }

  function spawnIt () {
    const childProcess = spawn('node', ['watcher.js', where], { detached: true })
    console.log('Running console ads disabler at PID ' + childProcess.pid)
    console.log('→ Run `yes-cli-ads` to kill that process')
    fse.writeFileSync(PIDPath, childProcess.pid)

    /*
    // uncomment this to see subprocess' logs
    childProcess.stdout.on('data', function(data) {
      console.log('stdout: ' + data);
    })
    */

    // comment this out to see the subprocess' logs
    process.exit()
  }
}
