var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var contactlist = require('./routes/contact');
var passport = require('passport');
var auth = require('./routes/auth');
var session = require('express-session');

require('./config/passport')(passport); // pass passport for configuration

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/bbupdata');

// app.use('/contactlist', contactlist);

//added this to try to get user info from server
// app.use('/userinfo', userinfo);

// app.get('https://www.googleapis.com/calendar/v3/calendars/primary/events?key=AIzaSyC4PNGZG8mwGGge4cMpxV0Dxn3OKHe8Ohs', function(req, res) {
//   console.log('calendar event list: ', res);
//   (function sendData (err, data) {
//     if (err) {
//       console.log('ERROR:', err);
//     }
//     res.send(data);
//   }());
// });


// Passport Session Configuration //
app.use(session({
   secret: 'secret',
   key: 'user',
   resave: 'true',
   saveUninitialized: false,
   cookie: {maxage: 60000, secure: false}
}));

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());


require('./routes/auth.js')(app, passport); // load our routes and pass in our app and fully configured passport
require('./routes/contact.js')(app, passport);

// Routes
// app.use('/register', register);
// app.use('/user', home);
// app.use('/', index);

app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/scripts/controllers'));
app.use(express.static('public/scripts/factories'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
