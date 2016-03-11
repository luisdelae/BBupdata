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
    "nevercontact": req.body.nevercontact,
    "occupation": "",
    "family": "",
    "goals": "",
    "struggles": "",
    "notes": ""
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

app.get('/contactlist/:id', function(req, res) {
  Contact.findById({"_id": req.params.id}, function(err, data) {
    if (err) {
      console.log('ERROR:', err);
    }
    res.send(data);
  });
});

app.put('/contactlist/:id', function(req, res) {

  var editContact = {
    "name": req.body.name,
    "occupation": req.body.occupation,
    "family": req.body.family,
    "goals": req.body.goals,
    "struggles": req.body.struggles,
    "notes": req.body.notes
  };

  Contact.findByIdAndUpdate(
    {_id: req.params.id},
    {
      $set: {name: editContact.name,
      occupation: editContact.occupation,
      family: editContact.family,
      goals: editContact.goals,
      struggles: editContact.struggles,
      notes: editContact.notes
      }
    },
    function(err, data) {
      if (err) {
        console.log('ERROR:', err);
      }
      res.send(data);
    }
  );
});

app.put('/contactliststandouttrue/:id', function(req, res) {

  Contact.findByIdAndUpdate(
    {_id: req.params.id},
    {
      $set: {standout: true}
    },
    function(err, data) {
      if (err) {
        console.log('ERROR:', err);
      }
      res.send(data);
    }
  );
});

app.put('/contactliststandoutfalse/:id', function(req, res) {

  Contact.findByIdAndUpdate(
    {_id: req.params.id},
    {
      $set: {standout: false}
    },
    function(err, data) {
      if (err) {
        console.log('ERROR:', err);
      }
      res.send(data);
    }
  );
});

app.put('/contactlistconvoinittrue/:id', function(req, res) {

  Contact.findByIdAndUpdate(
    {_id: req.params.id},
    {
      $set: {convoinit: true}
    },
    function(err, data) {
      if (err) {
        console.log('ERROR:', err);
      }
      res.send(data);
    }
  );
});

app.put('/contactlistconvoinitfalse/:id', function(req, res) {

  Contact.findByIdAndUpdate(
    {_id: req.params.id},
    {
      $set: {convoinit: false}
    },
    function(err, data) {
      if (err) {
        console.log('ERROR:', err);
      }
      res.send(data);
    }
  );
});

app.put('/contactlistinvitetrue/:id', function(req, res) {

  Contact.findByIdAndUpdate(
    {_id: req.params.id},
    {
      $set: {invite: true}
    },
    function(err, data) {
      if (err) {
        console.log('ERROR:', err);
      }
      res.send(data);
    }
  );
});

app.put('/contactlistinvitefalse/:id', function(req, res) {

  Contact.findByIdAndUpdate(
    {_id: req.params.id},
    {
      $set: {invite: false}
    },
    function(err, data) {
      if (err) {
        console.log('ERROR:', err);
      }
      res.send(data);
    }
  );
});

app.put('/contactlistchallengertrue/:id', function(req, res) {

  Contact.findByIdAndUpdate(
    {_id: req.params.id},
    {
      $set: {challenger: true}
    },
    function(err, data) {
      if (err) {
        console.log('ERROR:', err);
      }
      res.send(data);
    }
  );
});

app.put('/contactlistchallengerfalse/:id', function(req, res) {

  Contact.findByIdAndUpdate(
    {_id: req.params.id},
    {
      $set: {challenger: false}
    },
    function(err, data) {
      if (err) {
        console.log('ERROR:', err);
      }
      res.send(data);
    }
  );
});

app.put('/contactlistnevercontacttrue/:id', function(req, res) {

  Contact.findByIdAndUpdate(
    {_id: req.params.id},
    {
      $set: {nevercontact: true}
    },
    function(err, data) {
      if (err) {
        console.log('ERROR:', err);
      }
      res.send(data);
    }
  );
});

app.put('/contactlistnevercontactfalse/:id', function(req, res) {

  Contact.findByIdAndUpdate(
    {_id: req.params.id},
    {
      $set: {nevercontact: false}
    },
    function(err, data) {
      if (err) {
        console.log('ERROR:', err);
      }
      res.send(data);
    }
  );
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
