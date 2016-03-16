var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Contact = require('../models/contact');
var mongoose = require('mongoose');

//get all contacts from db
module.exports = function(app, passport) {

  function isLoggedIn(req, res, next) {
    // console.log('auth.js: ', req.isAuthenticated());
    if (req.isAuthenticated() && req.user.token !== undefined)
      return next();
    // console.log('user logged in::', req.user);
    res.redirect('/');
  }

  app.get('/contactlist/', isLoggedIn, function(req, res) {
    // console.log('req.user: ', req.user);
    User.findById({"_id": req.user._id}, function(err, data) {
      if (err) {
        console.log('ERROR:', err);
      }
      res.send(req.user);
    });
  });

  //save new contact to db
  app.put('/contactlist/newcontact/:id', function(req, res) {
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
  app.get('/contactlist/selectedContactId/:id/:page', function(req, res) {
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

  // app.put('/contactlist/:id', function(req, res) {
  //
  //   var editContact = {
  //     "name": req.body.name,
  //     "occupation": req.body.occupation,
  //     "family": req.body.family,
  //     "goals": req.body.goals,
  //     "struggles": req.body.struggles,
  //     "notes": req.body.notes
  //   };
  //
  //   User.findByIdAndUpdate(
  //     {_id: req.params.id},
  //     {
  //       $set: {name: editContact.name,
  //       occupation: editContact.occupation,
  //       family: editContact.family,
  //       goals: editContact.goals,
  //       struggles: editContact.struggles,
  //       notes: editContact.notes
  //       }
  //     },
  //     function(err, data) {
  //       if (err) {
  //         console.log('ERROR:', err);
  //       }
  //       res.send(data);
  //     }
  //   );
  // });

  app.put('/contactlist/:id', function(req, res) {

    var editContact = {
      "name": req.body.name,
      "occupation": req.body.occupation,
      "family": req.body.family,
      "goals": req.body.goals,
      "struggles": req.body.struggles,
      "notes": req.body.notes
    };

    User.update(
      {'contactInfo._id': req.params.id},
      {
        $set: {'contactInfo.$.name': editContact.name,
        'contactInfo.$.occupation': editContact.occupation,
        'contactInfo.$.family': editContact.family,
        'contactInfo.$.goals': editContact.goals,
        'contactInfo.$.struggles': editContact.struggles,
        'contactInfo.$.notes': editContact.notes
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

  app.put('/contactlist/standouttrue/:id', function(req, res) {
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

  app.put('/contactlist/standoutfalse/:id', function(req, res) {
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

  app.put('/contactlist/convoinittrue/:id', function(req, res) {
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

  app.put('/contactlist/convoinitfalse/:id', function(req, res) {
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

  app.put('/contactlist/invitetrue/:id', function(req, res) {
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

  app.put('/contactlist/invitefalse/:id', function(req, res) {
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

  app.put('/contactlist/challengertrue/:id', function(req, res) {
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

  app.put('/contactlist/challengerfalse/:id', function(req, res) {
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

  app.put('/contactlist/nevercontacttrue/:id', function(req, res) {
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

  app.put('/contactlist/nevercontactfalse/:id', function(req, res) {
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
};
