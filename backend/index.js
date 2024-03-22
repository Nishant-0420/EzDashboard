const express = require('express');
const cors= require('cors')
const app= express();
app.use(cors({
    origin:'http://localhost:3000'
}))
const port= 5000
app.listen(port,()=>console.log('server working'))