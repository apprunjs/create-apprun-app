#!/usr/bin/env node

const prompts = require('prompts')

async function main() {

  let cwd = process.argv[2] || '.';
  if (cwd === '.') {
    const opts = await prompts([{
      type: 'text',
      name: 'cwd',
      message: 'Please enter the directory of the app (leave blank to use current directory)'
    }]);

    if (opts.cwd) cwd = opts.cwd;
  }

  let options = {};

  const template = (await prompts([{
    type: 'select',
    name: 'template',
    message: 'Select a template',
    choices: ['HTML/JS', 'Blank App', 'Signle Page App'],
    initial: 2,
  }])).template;


  if (template !== 0) {
    const options = (await prompts(
      [
        {
          type: 'select',
          name: 'compiler',
          message: 'Select a compiler',
          choices: ['esbuild', 'webpack'],
          initial: 0,
        },
        {
          type: 'toggle',
          name: 'jest',
          message: 'Add Jest?',
          initial: true,
          active: 'Yes',
          inactive: 'No'
        }
      ]
    ));
  }

  const git = (await prompts([{
    type: 'toggle',
    name: 'git',
    message: 'Add git repo?',
    initial: true,
    active: 'Yes',
    inactive: 'No'
  }])).git;

  require('./create-app')({ cwd, template, options, git });
}

main().catch(e => console.error(e));