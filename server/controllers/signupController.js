const Models = require('../db/dbModels.js')
const { User, GoogleUser } = Models;

const signupController = {}

signupController.signup = (req, res, next) => {
    // console.log('SIGNUP CONTROLLER REQ.BODY', req.body)
    const { username, password } = req.body;
        
    const user = new User({
        username: username,
        password: password,
        favorites: [],
        isGoogle: false,
    });
    user.save()
        .then(() => console.log('User Signed Up Succesfully'))
        .then(() => res.locals.newUser = user)
        .then(() => {return next()})
        .catch((err) => next(err));
}

signupController.googleSignup = (req, res, next) => {
    console.log('Google Signup Req.Body', req.body)
    const { name, email, picture, sub } = req.body

    const googleUser = new GoogleUser({
        _id: sub,
        name: name,
        email: email,
        favorites: [],
        isGoogle: true,
        picture: picture,
    });
    googleUser.save()
        .then(() => console.log('Google User Signed Up Succesfully'))
        .then(() => res.locals.newGoogleUser = googleUser)
        .then(() => {
            return next()
        })
        .catch((err) => {
            return next(err)
        })
}

module.exports = signupController;