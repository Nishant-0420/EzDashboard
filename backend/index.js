const express = require('express');
const contactRouter = require('./routers/contactRouter');
const userRouter = require('./routers/userRouter');
const feedbackRouter = require('./routers/feedbackRouter');
const contributionRouter = require('./routers/contributionRouter');
const utilRouter = require('./routers/util');

const cors= require('cors')
const app= express();

app.use(cors({
    origin:'http://localhost:3000'
}))
app.use(express.json());

app.use('/user', userRouter);
app.use('/contact', contactRouter);
app.use('/feedback', feedbackRouter);
app.use('/contribution', contributionRouter);
app.use('/util', utilRouter);

const port= 5000
app.listen(port,()=>console.log('server working'))