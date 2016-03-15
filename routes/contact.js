var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Contact = require('../models/contact');
var mongoose = require('mongoose');

//get all contacts from db
router.get('/:id', function(req, res) {
  // console.log(req.user);
  User.findById({"_id": req.params.id}, function(err, data) {
    if (err) {
      console.log('ERROR:', err);
    }
    res.send(data);
  });
});

//save new contact to db
router.put('/newcontact/:id', function(req, res) {
  var addContact = {
    "_id": new mongoose.Types.ObjectId(),
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
  };

  User.findByIdAndUpdate(
    {_id: req.params.id},
    {
      $push: {"contactInfo": {
        _id: addContact._id,
        dateadded: addContact.dateadded,
        name: addContact.name,
        standout: addContact.standout,
        convoinit: addContact.convoinit,
        invite: addContact.invite,
        challenger: addContact.challenger,
        nevercontact: addContact.nevercontact,
        occupation: addContact.occupation,
        family: addContact.family,
        goals: addContact.goals,
        struggles: addContact.struggles,
        notes: addContact.notes,
      }}
    }, {safe: true, upsert: true, new : true},
    function(err, data) {
      if (err) {
        console.log('ERROR:', err);
      }
      res.send(data);
    }
  );

  // //post new contact
  // addContact.save(function(err, data) {
  //   if(err) {
  //     console.log('ERROR:', err);
  //   }
  //
  //   Contact.find({}, function(err, data) {
  //     if(err) {
  //       console.log('ERROR:', err);
  //     }
  //
  //     res.send(data);
  //
  //   });
  // });
});

//get selected contact
router.get('/selectedContactId/:id/:page', function(req, res) {
  User.findOne({"contactInfo._id": req.params.page,}, function(err, data) {
    if (err) {
      console.log('ERROR:', err);
    }
    res.send(data);
  });
});

// //old get selected contact data
// router.get('/selectedContactId/:id/:page', function(req, res) {
//   console.log('req.params:: ', req.params);
//   Contact.findById({"_id": req.params.id}, function(err, data) {
//     if (err) {
//       console.log('ERROR:', err);
//     }
//     res.send(data);
//   });
// });

router.put('/:id', function(req, res) {

  var editContact = {
    "name": req.body.name,
    "occupation": req.body.occupation,
    "family": req.body.family,
    "goals": req.body.goals,
    "struggles": req.body.struggles,
    "notes": req.body.notes
  };

  User.findByIdAndUpdate(
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
  User.update(
    {'contactInfo._id': req.params.id},
    {
      $set: {'contactInfo.$.standout': true}
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
  User.update(
    {'contactInfo._id': req.params.id},
    {
      $set: {'contactInfo.$.standout': false}
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
  User.update(
    {'contactInfo._id': req.params.id},
    {
      $set: {'contactInfo.$.convoinit': true}
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
  User.update(
    {'contactInfo._id': req.params.id},
    {
      $set: {'contactInfo.$.convoinit': false}
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
  User.update(
    {'contactInfo._id': req.params.id},
    {
      $set: {'contactInfo.$.invite': true}
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
  User.update(
    {'contactInfo._id': req.params.id},
    {
      $set: {'contactInfo.$.invite': false}
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
  User.update(
    {'contactInfo._id': req.params.id},
    {
      $set: {'contactInfo.$.challenger': true}
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
  User.update(
    {'contactInfo._id': req.params.id},
    {
      $set: {'contactInfo.$.challenger': false}
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
  User.update(
    {'contactInfo._id': req.params.id},
    {
      $set: {'contactInfo.$.nevercontact': true}
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
  User.update(
    {'contactInfo._id': req.params.id},
    {
      $set: {'contactInfo.$.nevercontact': false}
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
