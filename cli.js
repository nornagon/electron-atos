#!/usr/bin/env node

const {argv} = require('yargs')
const atos = require('./index')

atos(argv, (error, symbols) => {
  if (error != null) {
    console.error(error.stack || error.message)
    process.exit(1)
  } else {
    console.log(symbols.join('\n'))
  }
})
