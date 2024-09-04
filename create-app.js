//@ts-check
const fs = require('fs-extra');
const path = require('path');
const execSync = require('child_process').execSync;

module.exports = function ({ destination, template, options }) {


  // RegExp.prototype.toJSON = RegExp.prototype.toString;
  fs.copySync(path.resolve(__dirname, 'cli-templates/readme.md'), `${destination}/readme.md`);

  const source = path.resolve(__dirname, `cli-templates/${template}`);
  fs.copySync(source, destination);

  if (template === 4) options.compiler = 9; // apprun-site


  if (template > 1) {
    const package_json = path.resolve(destination, 'package.json');
    if (!fs.existsSync(package_json)) {
      console.log(' * Creating package.json');
      execSync('npm init -y', { cwd: destination });
    }

    if (options.compiler === 0 /* esbuild */) {
      console.log(' * Installing esbuild');
      execSync('npm install -D apprun esbuild', { cwd: destination });
    } else if (options.compiler === 1 /* webpack */) {
      console.log(' * Installing webpack');
      execSync('npm install -D apprun typescript webpack webpack-cli webpack-dev-server ts-loader source-map-loader', { cwd: destination });
    } else if (options.compiler === 2 /* vite */) {
      console.log(' * Installing vite');
      execSync('npm install -D apprun vite', { cwd: destination });
    } else if (options.compiler === 9 /* apprun-site */) {
      console.log(' * Installing AppRun Site');
      execSync('npm install apprun apprun-site postcss tailwindcss autoprefixer', { cwd: destination });
    }

    const package_info = require(package_json);
    if (!package_info.scripts) package_info["scripts"] = {}
    if (options.compiler === 0 /* esbuild */) {

      if (!package_info.scripts['start']) {
        package_info["scripts"]["start"] = 'esbuild src/main.tsx --outfile=public/dist/main.js --bundle --watch --servedir=public';
      }
      if (!package_info.scripts['build']) {
        package_info["scripts"]["build"] = 'esbuild src/main.tsx --outfile=public/dist/main.js --bundle --minify';
      }
    } else if (options.compiler === 1 /* webpack */) {
      fs.copySync(path.resolve(__dirname, 'cli-templates/webpack.config.js'), `${destination}/webpack.config.js`);
      if (!package_info.scripts['start']) {
        package_info["scripts"]["start"] = 'webpack serve --mode development';
      }
      if (!package_info.scripts['build']) {
        package_info["scripts"]["build"] = 'webpack --mode production';
      }
    } else if (options.compiler === 2 /* vite */) {
      if (!package_info.scripts['start']) {
        package_info["scripts"]["start"] = 'vite dev --port 8080';
      }
      if (!package_info.scripts['build']) {
        package_info["scripts"]["build"] = 'vite build --outDir public';
      }
      fs.removeSync(path.resolve(destination, 'public'));
    } else if (options.compiler === 9 /* apprun-site */) {
      package_info.type = 'module';
      if (!package_info.scripts['start']) {
        package_info["scripts"]["start"] = 'node ./server.js';
      }
      if (!package_info.scripts['dev']) {
        package_info["scripts"]["dev"] = 'apprun-site dev';
      }
      if (!package_info.scripts['build']) {
        package_info["scripts"]["build"] = 'apprun-site build -c';
      }
    }

    if (options.jest) {
      console.log(' * Installing jest');
      execSync('npm install -D jest ts-jest', { cwd: destination });
      package_info["scripts"]["test"] = 'jest';
      fs.copySync(path.resolve(__dirname, 'cli-templates/jest.config.js'), `${destination}/jest.config.js`);
    }

    fs.writeFileSync(package_json, JSON.stringify(package_info, null, 2));
  }

  if (options.git) {
    if (!fs.existsSync(path.resolve(destination, '.git'))) {
      console.log(' * Initializing git');
      execSync('git init', { cwd: destination });
      fs.copySync(path.resolve(__dirname, 'cli-templates/_gitignore'), `${destination}/.gitignore`);
    } else {
      console.log(' * Skip git init. .git exsits');
    }
  }
  console.log('\nProject created in: ', destination);

  console.log('Please go to the project directory and run:')
  console.log('\n\tnpm start\n')
  console.log('And then, you can visit the project at: http://localhost:8080\n');
}
