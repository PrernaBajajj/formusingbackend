const express = require('express')
const router = express.Router()

const youtube = require('../model/youtube')

router.post('/', (req, res) => {
    const userEmail = req.body.email
    const userPassword = req.body.password

   youtube.find({email: req.body.email})
    .then(result => {
        if(result.length === 0){
            res.status(400).json({message: 'User does not exist.'})
        }
        else{
            if(userPassword === result[0].password){
                res.status(200).json({message: 'User Authenticated!'})
            }
            else{
                res.status(404).json({message: 'User Authentication Failed! Try again with different email or password'})
            }
        }
    })
    .catch(err => res.status(500).json({message: 'Server encountered an error', error: err}))
})

module.exports = router;