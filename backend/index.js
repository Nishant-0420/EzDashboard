const express = require('express');
const contactRouter = require('./routers/contactRouter');
const userRouter = require('./routers/userRouter');

const cors= require('cors')
const app= express();

app.use(cors({
    origin:'http://localhost:3000'
}))
app.use(express.json());

app.use('/user', userRouter);
app.use('/contact', contactRouter);

const port= 5000
app.listen(port,()=>console.log('server working'))