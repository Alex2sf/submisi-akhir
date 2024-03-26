const { spawn } = require('child_process');

function main(myEnvVar) {
  const options = {
    env: {
      MY_ENV_VAR: myEnvVar
    }
  };

  const childProcess = spawn(process.execPath, ['run-me.js'], options);
  return childProcess.stdout;
}

module.exports = main;
