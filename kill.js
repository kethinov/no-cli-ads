#!/usr/bin/env node

const fkill = require('fkill')
const fse = require('fse')
const path = require('path')
const os = require('os')

// see if a PID tmp file exists
const PIDPath = path.join(os.tmpdir(), 'disable_console_ads_pid.txt')
const PIDFound = fse.existsSync(PIDPath)
if (PIDFound === true) {
  // if there is one, grab the PID number from the process.env and then kill it
  const contents = fse.readFileSync(PIDPath).toString('utf8')
  const PID = parseInt(contents)
  fkill(PID, { force: true }).then(() => {
    // found it, kill the process referenced
    console.log('Killing process ' + PID)
    fse.unlinkSync(PIDPath)
    process.exit()
  }, () => {
    // process not found
    console.log('Console ads disabler is not running')
    fse.unlinkSync(PIDPath)
    process.exit()
  })
} else {
  console.log('Console ads disabler is not running')
  process.exit()
}
