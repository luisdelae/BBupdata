// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {
    'googleAuth' : {
        'clientID'         : '160476768363-pf4jt0hjvij31s4c8r9rbh7tfh2dbhm4.apps.googleusercontent.com',
        'clientSecret'     : '_yl5ZZHIidZEadcJVNR0imMo',
        // 'callbackURL'      : 'http://blooming-beyond-90461.herokuapp.com/auth/google/callback'
        'callbackURL'      : 'http://localhost:3000/auth/google/callback'
    }
};
