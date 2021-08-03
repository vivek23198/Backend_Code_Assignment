const express = require('express');
const homeRouter = require('./routes/home');
const app = express();

app.use('/api', homeRouter);

app.listen(3000, ()=>{
    console.log("Server is listening on port 3000");
})