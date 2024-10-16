const express = require('express');
const path = require('path'); // Import the path module
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Use path.join to resolve the file path
});

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
