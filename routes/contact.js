var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Contact = require('../models/contact');
var Reminder = require('../models/reminders');
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
  });

  // add new reminder to a certain contact
  app.post('/contactlist/newreminder/', function(req, res) {
    console.log(req.body.userId);
    var addReminder = new Reminder({
      "userId": req.body.userId,
      "contactId": req.body.contactId,
      "name": req.body.name,
      "date": req.body.date,
      "subject": req.body.subject,
      "status": req.body.status
    });
    addReminder.save(
      function(err, data) {
        if (err) {
          console.log('ERROR save:', err);
        }
        Reminder.find({}, function(err, data) {
          if(err) {
            console.log('ERROR find:', err);
          }
          res.send(data);
        });
      }
    );
  });

  //get selected contact
  app.get('/contactlist/selectedContactId/:id/:page', function(req, res) {
    User.findOne({"contactInfo._id": req.params.page,}, function(err, data) {
      if (err) {
        console.log('ERROR: ', err);
      }
      res.send(data);
    });
  });

  app.get('/contactlist/getcontactreminders/:id', function(req, res) {
    Reminder.find({"contactId": req.params.id}, function(err, data) {
        if (err) {
          console.log('ERROR: ', err);
        }
        res.send(data);
    }).sort('status -date');
  });

  //Get all reminders for the current USER, using the userId
  app.get('/contactlist/getuserreminders/:id', function(req, res) {
    console.log('req.params.id: ', req.params.id);
    Reminder.find({"userId": req.params.id}, function(err, data) {
        if (err) {
          console.log('ERROR: ', err);
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

  app.put('/contactlist/pendingtrue/:id', function(req, res) {
    User.update(
      {'contactInfo._id': req.params.id},
      {
        $set: {'contactInfo.$.pending': true}
      },
      function(err, data) {
        if (err) {
          console.log('ERROR:', err);
        }
        res.send(data);
      }
    );
  });

  app.put('/contactlist/pendingfalse/:id', function(req, res) {
    User.update(
      {'contactInfo._id': req.params.id},
      {
        $set: {'contactInfo.$.pending': false}
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

  app.put('/contactlist/reminderstatustrue/:id', function(req, res) {
    // console.log('id for truth status: ', req.params.id);
    Reminder.update(
      {'_id': req.params.id},
      {
        $set: {'status': true}
      },
      function(err, data) {
        if (err) {
          console.log('ERROR:', err);
        }
        res.send(data);
      }
    );
  });

  app.put('/contactlist/reminderstatusfalse/:id', function(req, res) {
    console.log('id for truth status: ', req.params.id);
    Reminder.update(
      {'_id': req.params.id},
      {
        $set: {'status': false}
      },
      function(err, data) {
        if (err) {
          console.log('ERROR:', err);
        }
        res.send(data);
      }
    );
  });

  app.delete('/contactlist/deletereminder/:id', function(req, res) {
    console.log('id to delete: ', req.params.id);
    Reminder.remove(
      {'_id': req.params.id},
      function(err, data) {
        if (err) {
          console.log('ERROR:', err);
        }
        res.send(data);
      }
    );
  });
};
