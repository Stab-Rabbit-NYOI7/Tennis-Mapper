const Models = require('../db/dbModels.js')
const { User, GoogleUser } = Models;

const loginController = {}

loginController.login = (req, res, next) => {
    console.log('LOGIN CONTROLLER REQ.BODY', req.body)
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
            next(err)
        })
}

loginController.googleLogin = (req, res, next) => {
    console.log('Google Login Req.Body', req.body)
}

module.exports = loginController;