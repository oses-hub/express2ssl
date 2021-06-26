module.exports = function(request, response, next){

    // App Checking if 'X-Forwarded-Proto' header is https or not
    if (request.headers['X-Forwarded-Proto'] != 'https'.toLocaleLowerCase() || '') {
        response.redirect(`https://${request.headers.host}/${request.originalUrl}`);
    } else {
        next();
    }

}