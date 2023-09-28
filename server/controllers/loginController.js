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
                return next()
            } else {
                console.log('Google Login Error')
                return next('Google Login Error')
            }
        })
        .catch((err) => {
            console.error(`Google Login Error: ${err}`)
            return next(err)
        })
}
module.exports = loginController;