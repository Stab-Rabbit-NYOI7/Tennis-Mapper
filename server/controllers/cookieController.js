const cookieController = {};

cookieController.setCookie = (req, res, next) => {
    const { _id } = res.locals.googleUserInfo
    res.cookie('Users ID' , _id)
    return next()
}

module.exports = cookieController;