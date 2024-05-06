const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const model = require('../models/userModel');
require('dotenv').config();

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

router.post("/authenticate", (req, res) => {

    model.findOne(req.body)
        .then((result) => {

            if (result) {

                const { name, email, role, _id, avatar } = result;
                const payload = { _id, name, email, role, avatar };

                // create token
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiresIn: '7 days' },
                    (err, token) => {
                        if (err) {
                            console.log(err);
                            res.status(500).json(err);
                        }
                        else res.status(200).json({ token, name, avatar });
                    }
                )
            }
            else res.status(401).json({ status: 'failed' });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// getbyemail
router.get('/getbyemail/:email', (req, res) => {
    model.findOne({ email: req.params.email })
        .then((result) => {
            if (result) res.json(result);
            else res.status(404).json({ message: 'not found' });
        }).catch((err) => {
            console.log(err)
            res.json(err)
        });
});

module.exports = router;
//getall
//getbyid
// update
//delete
//product router



