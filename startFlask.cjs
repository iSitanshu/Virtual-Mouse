const { exec } = require('child_process');

// Start the Flask backend server
const flaskProcess = exec('python app.py', { cwd: __dirname });

flaskProcess.stdout.on('data', (data) => {
  console.log(`[Flask] ${data}`);
});

flaskProcess.stderr.on('data', (data) => {
  console.error(`[Flask Error] ${data}`);
});

flaskProcess.on('close', (code) => {
  if (code === 0) {
    console.log(`[Flask] Process exited successfully with code ${code}`);
  } else {
    console.error(`[Flask] Process exited with error code ${code}`);
  }
});

flaskProcess.on('error', (err) => {
  console.error(`[Flask] Failed to start process: ${err.message}`);
});

// Start the React frontend (Vite dev server)
const viteProcess = exec('npm run dev', { cwd: __dirname });

viteProcess.stdout.on('data', (data) => {
  console.log(`[Vite] ${data}`);
});

viteProcess.stderr.on('data', (data) => {
  console.error(`[Vite Error] ${data}`);
});

viteProcess.on('close', (code) => {
  if (code === 0) {
    console.log(`[Vite] Process exited successfully with code ${code}`);
  } else {
    console.error(`[Vite] Process exited with error code ${code}`);
  }
});

viteProcess.on('error', (err) => {
  console.error(`[Vite] Failed to start process: ${err.message}`);
});