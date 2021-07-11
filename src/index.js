const express = require('express');

const app = express();

app.use(() => {
    console.log("Server starting...");
});

app.listen(4000);