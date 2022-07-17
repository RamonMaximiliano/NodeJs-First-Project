const LocalStrategy = require('passport-local').strategy 
const bcrypt = require("bcrypt")

function initialize(passport, getUserByEmail){
    const authenticateUser = (email, password, done) => {
        const user = getUserByEmail(email)
    if (user == null){
        return done(null, false, {message: 'No user with this email'})
    }
    
    try {
        if(await bcrypt.compare(password, user.password)){
            return done(null, user) 
        } else {
            return done(null, false, {message: 'Password incorrect'})
        }
    } catch (e){
        return done(e)
    }
    }

    passport.use(new LocalStrategy({usernameField: 'email'}),
    authenticateUser)
    password.serializeUser((user, done) => { })
    password.deserializeUser((id, done) => { })
}

module.exports = initialize