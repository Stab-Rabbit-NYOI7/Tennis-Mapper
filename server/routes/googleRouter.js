const express = require('express');
const loginController = require('../controllers/loginController.js')
const signupController = require('../controllers/signupController.js')
const googleRouter = express.Router();
const Models = require('../db/dbModels.js');
const { User, GoogleUser } = Models;

console.log('YOU MADE IT TO THE GOOGLE ROUTER')

googleRouter.post('/', (req, res, next) => {
    const { name, email, picture, sub } = req.body

    GoogleUser.findOne({
        _id : sub
    })
        .then((result) => {
            // console.log('RESULT', result)
            if (result) {
                loginController.googleLogin(req, res, next);
            } else {
                signupController.googleSignup(req, res, next);
            }
        })
        .catch((err) => {
            console.error(`Google User Search Error: ${err}`)
            return next(err)
        })
})



module.exports = googleRouter