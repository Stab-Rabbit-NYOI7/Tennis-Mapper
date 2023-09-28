const Models = require('../db/dbModels.js')
const { User, GoogleUser } = Models;

const loginController = {}

loginController.login = (req, res, next) => {
    // console.log('LOGIN CONTROLLER REQ.BODY', req.body)
    const { username, password } = req.body;

    User.findOne({
        username : username,
        password: password,
    })
        .then((result) => {
            if (result) {
                res.locals.userInfo = result
                return next()
            } else {
                console.log(`Username or Password not found`)
                return next('Login Failed')
            }
        })
        .catch((err) => {
            console.error(`Login Error: ${err}`)
            return next(err)
        })
}

loginController.googleLogin = (req, res, next) => {
    console.log('Google Login Req.Body', req.body)
    const { name, email, picture, sub } = req.body

    GoogleUser.findOne({
        _id : sub
    })
        .then((result) => {
            if (result) {
                res.locals.googleUserInfo = result
                console.log('RESULT IN LOGIN', result)
                
                return next()
            } else {
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
                    .then(() => res.locals.googleUserInfo = googleUser)
                    .then(() => {
                        return next()
                    })
                    .catch((err) => {
                        return next(err)
                    })
            }
        })
        .catch((err) => {
            console.error(`Google Login Error: ${err}`)
            return next(err)
        })
}
module.exports = loginController;