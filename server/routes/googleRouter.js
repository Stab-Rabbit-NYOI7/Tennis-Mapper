const express = require('express');
const googleRouter = express.Router();
const loginController = require('../controllers/loginController.js')
const cookieController = require('../controllers/cookieController.js')


googleRouter.post('/', loginController.googleLogin, cookieController.setCookie, (req, res, next) => {
    // console.log('THE INFO WE NEED TO PASS TO COOKIE', res.locals.googleUserInfo)
    const { _id } = res.locals.googleUserInfo

    return res.status(200).json(_id);
})



module.exports = googleRouter