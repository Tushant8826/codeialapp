module.exports.profile = function(req,res) {
    return res.render('user_profile',{
        title:"User Profile"
    })
}
module.exports.signIn = function(req,res) {
    return res.render('user_sign_in',{
        title:"Sign in"
    })
}
module.exports.signUp = function(req,res) {
    return res.render('user_sign_up',{
        title:"Sign up"
    })
}
module.exports.create = function(req,res) {
    
}
module.exports.createSession = function(req,res) {
    
}