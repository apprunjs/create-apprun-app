#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const prompts = require('prompts')

async function main() {

  let cwd = process.argv[2] || '.';
  if (cwd === '.') {
    const opts = await prompts([{
      type: 'text',
      name: 'cwd',
      message: 'Please enter the directory of the app (leave blank to use current directory)'
    }]);
  }

  const destination = path.resolve(cwd);

  if (fs.existsSync(destination)) {
    if (fs.readdirSync(destination).length > 0) {
      const response = await prompts({
        type: 'confirm',
        name: 'value',
        message: 'Directory not empty. Continue?',
        initial: false
      });
      if (!response.value) process.exit(1);
    }
  }


  const template = (await prompts([{
    type: 'select',
    name: 'template',
    message: 'Select a template',
    choices: ['HTML/JS', 'HTML/JS - Web Component', 'JS/TS - Blank App', 'JS/TS - Signle Page App'],
    initial: 3,
  }], { onCancel: () => process.exit(1) })).template;

  let options = {};

  if (template > 1) {
    options = (await prompts(
      [
        {
          type: 'select',
          name: 'compiler',
          message: 'Select a compiler',
          choices: ['esbuild', 'webpack'],
          initial: 0,
        },
        // {
        //   type: 'toggle',
        //   name: 'jest',
        //   message: 'Add Jest?',
        //   initial: true,
        //   active: 'Yes',
        //   inactive: 'No'
        // }
      ], { onCancel: () => process.exit(1) }
    ));
  }

  options.git = (await prompts([{
    type: 'toggle',
    name: 'git',
    message: 'Add git repo?',
    initial: true,
    active: 'Yes',
    inactive: 'No'
  }], { onCancel: () => process.exit(1) })).git;

  require('./create-app')({ destination, template, options });
}

main().catch(e => console.error(e));