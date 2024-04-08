require('dotenv').config();
import jwt from 'jsonwebtoken';






router.post('/authenticate',(req, res) => {
    Model.findOne(req.body)
    .then((result) => {
        const payload={ _id: result._id, email: result.email, role: result.role};
        // create jwt token
        jwt.sign(
            payload, 
            process.env.SECRET_KEY, 
            {expiresIn: '2 days'},
            (err, token) => {
                if(err) {
                    res.status(500).json(err);
                } else {
                    res.status(500).json({
                        token: token,
                        avatar: result.avatar,
                    });
                }
            }
    }).catch((err) => {
        res.status(500).json({ error: err.message });
        console.log(err);
        res
    });
})