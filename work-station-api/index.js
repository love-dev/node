const express = require('express');
const app = express();
const functions = require('./functions/index');
const PORT =  process.env.PORT || 8000;
const cors = require('cors')

app.use(cors())

app.get('/getData',functions.getData)

app.listen(PORT,() => {
    console.log("Connect to the port: ",PORT)
})

