var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReminderSchema =
  new Schema({
    "userId": String,
    "contactId": String,
    "name": String,
    "date": Date,
    "subject": String,
    "status": Boolean
  },
  {
    collection: 'reminders'
  }
);


module.exports = mongoose.model('Reminder', ReminderSchema);
