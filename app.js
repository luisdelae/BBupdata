var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/bbupdata');
mongoose.model(
  'Contact',
  new Schema({
    "dateadded": {type: Date, default: Date.now},
    "name": String,
    "standout": Boolean,
    "convoinit": Boolean,
    "invite": Boolean,
    "challenger": Boolean,
    "nevercontact": Boolean,
    "occupation": String,
    "family": String,
    "goals": String,
    "struggles": String,
    "notes": String,
    "date1": Date,
    "date2": Date,
    "date3": Date,
    "date4": Date
  },
  {
    collection: 'contacts'
  }
));

var Contact = mongoose.model('Contact');

app.get('/contactlist', function(req, res) {
  Contact.find({}, function(err, data) {
    if (err) {
      console.log('ERROR:', err);
    }
    res.send(data);
  }).sort('-dateadded');
});

app.post('/contactlist', function(req, res) {
  var addContact = new Contact({
    "name": req.body.name,
    "standout": req.body.standout,
    "convoinit": req.body.convoinit,
    "invite": req.body.invite,
    "challenger": req.body.challenger,
    "nevercontact": req.body.nevercontact
  });

  //post new contact
  addContact.save(function(err, data) {
    if(err) {
      console.log('ERROR:', err);
    }

    Contact.find({}, function(err, data) {
      if(err) {
        console.log('ERROR:', err);
      }

      res.send(data);

    });
  });
});

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
