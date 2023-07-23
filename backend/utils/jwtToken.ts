// Create, send and save token in cookie
const sendToken = (user, statusCode, res) => {
    // create jwt token
    const token = user.getJwtToken();

    // options for cookie
    const options = {
        expires: new Date(
            Date.now() + Number(process.env.COOKIE_EXPIRES_TIME) * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }
    // "httpOnly" to "true" to ensure the cookie is only accessible through HTTP(S)
    // requests and not by JavaScript code running in the browser.

    res.status(statusCode)
        .cookie('token', token, options)
        .json({
            status: "success",
            token,
            user
        })
}

module.exports = sendToken;