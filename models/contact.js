var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema =
  new Schema({
    "_id": Schema.Types.ObjectId,
    "dateadded": Date,
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
);


module.exports = mongoose.model('Contact', ContactSchema);
