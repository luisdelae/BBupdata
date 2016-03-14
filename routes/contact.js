var express = require('express');
var router = express.Router();
var Contact = require('../models/contact');

router.get('/', function(req, res) {
  Contact.find({}, function(err, data) {
    if (err) {
      console.log('ERROR:', err);
    }
    res.send(data);
  });
});

router.post('/', function(req, res) {
  var addContact = new Contact({
    "dateadded": new Date(),
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

router.get('/:id', function(req, res) {
  Contact.findById({"_id": req.params.id}, function(err, data) {
    if (err) {
      console.log('ERROR:', err);
    }
    res.send(data);
  });
});

router.put('/:id', function(req, res) {

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

router.put('/standouttrue/:id', function(req, res) {

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

router.put('/standoutfalse/:id', function(req, res) {

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

router.put('/convoinittrue/:id', function(req, res) {

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

router.put('/convoinitfalse/:id', function(req, res) {

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

router.put('/invitetrue/:id', function(req, res) {

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

router.put('/invitefalse/:id', function(req, res) {

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

router.put('/challengertrue/:id', function(req, res) {

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

router.put('/challengerfalse/:id', function(req, res) {

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

router.put('/nevercontacttrue/:id', function(req, res) {

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

router.put('/nevercontactfalse/:id', function(req, res) {

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

module.exports = router;
