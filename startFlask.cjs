import { exec } from 'child_process';

// Command to run your Flask app
const command = 'python C:\\Users\\Sitanshu\\Virtual_Mouse\\Virtual-Mouse\\app.py';

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error}`);
    return;
  }
  if (stderr) {
    console.error(`Error: ${stderr}`);
    return;
  }
  console.log(`Output: ${stdout}`);
});
