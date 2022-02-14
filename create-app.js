const fs = require('fs-extra');
const path = require('path');
const execSync = require('child_process').execSync;

module.exports = function ({ destination, template, options, git }) {

  RegExp.prototype.toJSON = RegExp.prototype.toString;

  const source = path.resolve(__dirname, `cli-templates/${template}`);
  fs.copySync(source, destination);

/*
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  const package_json = path.resolve(cwd, 'package.json');
  const tsconfig_json = path.resolve(cwd, 'tsconfig.json');
  const webpack_config_js = path.resolve(cwd, 'webpack.config.js');
  const git_ignore_file = path.resolve(cwd, '.gitignore');
  const eslint_file = path.resolve(cwd, '.eslintrc.js');
  const index_html = path.resolve(cwd, 'public/index.html');
  const index_cdn_html = path.resolve(cwd, 'index.html');
  const main_js = path.resolve(cwd, 'dist/main.js');
  const main_tsx = path.resolve(cwd, 'src/main.tsx');
  const spa_index = path.resolve(cwd, 'public/index.html');
  const spa_main_tsx = path.resolve(cwd, 'src/main.tsx');
  const spa_layout_tsx = path.resolve(cwd, 'src/Layout.tsx');
  const readme_md = path.resolve(cwd, 'README.md');

  const dir_src = path.resolve(cwd, 'src');
  const dir_tests = path.resolve(cwd, 'tests');
  const dir_stories = path.resolve(cwd, 'stories')

  function read(name) {
    return fs.readFileSync(path.resolve(__dirname + '/cli-templates', name), 'utf8');
  }

  function write(file_name, text, title = ' * Creating', overwrite = false) {
    const file = path.resolve(file_name);
    const dirname = path.dirname(file_name);
    if (!fs.existsSync(dirname)) fs.mkdirSync(dirname);

    if (!fs.existsSync(file) || overwrite) {
      process.stdout.write(`${title}: ${file} ... `);
      fs.writeFileSync(
        file,
        text
      );
      process.stdout.write('Done\n');
    } else {
      process.stdout.write(` *  No change made. File exists: ${file}\n`);
    }
  }

  function component(name) {
    const fn = path.resolve(dir_src + '/' + name + '.tsx');
    const component_template = read('component.ts_');
    write(fn, component_template.replace(/\#name/g, name),
      `Creating component ${name}`);
  }

  if (template === 0) {
    console.log(' * Creating HTML');
    write(index_cdn_html, read('index.html'));
    write(main_js, read('main.js'));
  } else if (template === 1) {
    // Blank App
    console.log(' * Creating blank app');
    write(index_html, read('index.html'));
    write(main_tsx, read('main.ts_'));
    write(readme_md, read('readme.md'));

  } else if (template === 2) {
    // Single Page App
    console.log(' * Creating single page app');

    write(spa_index, read('spa_index.html'), 'Creating', true);
    write(spa_main_tsx, read('spa_main.ts_'), 'Creating', true);
    write(spa_layout_tsx, read('Layout.ts_'), 'Creating', true);
    component('Home');
    component('About');
    component('Contact');
    write(readme_md, read('readme.md'));
  }

*/

  // if (options.compiler === 'esbuild') {
  //   console.log(' * Installing esbuild');
  //   execSync('npm i esbuild --save-dev');
  // } else if (options.compiler === 'webpack') {
  // }


}
