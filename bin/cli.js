#!/usr/bin/env node
const program = require('commander')
const create = require('../lib/create')

program
  .version(require('../package.json').version, '-v, --version')
  .command('create <name>')
  .description('create a new project')
  .action((name) => {
    try {
      create(name)
    } catch (error) {
      console.error(error)
    }
  })

program.parse(process.argv)
