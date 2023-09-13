#!/usr/bin/env node
const {run} = require('@cli-engine/engine')
const config = {
  channel: 'stable',
  version: '6.15.28-6b9662e'
}
run(process.argv, config)
