const express = require('express');

const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

// Static Files
app.use(express.static(__dirname));

// Route
app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'index.html'));

});

// Start Server
app.listen(PORT, () => {

    console.log(`Server Running on Port ${PORT}`);

});