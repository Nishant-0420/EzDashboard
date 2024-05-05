const express = require('express');
const router= express.Router();
const model = require('../models/feedbackModel');

router.post('/add', (req, res) => {
    console.log(req.body)
    new model(req.body).save()
        .then((result) => {
            console.log(result);
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.json(err);
        });
});

router.get('/getall', (req, res) => {
    model.find()
        .then((result) => {
            res.json(result);

        }).catch((err) => {
            console.log(err)
            res.json(err)
        });
});

module.exports = router;