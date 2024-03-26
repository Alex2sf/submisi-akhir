/**
 * @TODO
 * 1. Kembalikan fungsi `main` dengan child process yang menjalankan berkas `run-me.js`.
 * 2. Di mana, child process tersebut **hanya** menetapkan environment variable dengan nama `MY_ENV_VAR`.
 * 3. Nilai dari environment variable tersebut diambil dari argumen `myEnvVar`.
 *
 * Catatan:
 * 1. Jangan ubah kode apa pun di luar dari tanda yang diberikan.
 * 2. Jangan menuliskan "node" secara hard-coded, gunakanlah `process.execPath`.
 * 3. Anda bisa menggunakan varian fungsi `spawn` atau `exec` untuk menyelesaikan tantangan ini.
 */

// Tulis kode impor di bawah ini

const { spawn } = require('child_process');

function main(myEnvVar) {
  const child = spawn(process.execPath, ['run-me.js'], {
    env: {
      ...process.env,
      MY_ENV_VAR: myEnvVar
    }
  });

  child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}

module.exports = main;
