myApp.factory('ContactFactory', ['$http', function($http) {

  var allContacts = {};
  var selectedContactId;
  var selectedContactData;
  var currentUserId;
  var currentContactReminders = {};
  var currentUserReminders = {};

  var getContactList = function() {
    var promise = $http.get('/contactlist/').then(function(response) {
      currentUserId = response.data._id;
      allContacts.list = response.data.contactInfo;
    });
    return promise;
  };

  var saveContact = function(contact) {
    var promise = $http.put('/contactlist/newcontact/' + currentUserId, contact).then(function(response) {
      allContacts.list = response.data.contactInfo;
    });
    return promise;
  };

  var saveReminder = function(reminder) {
    var promise = $http.post('/contactlist/newreminder/', reminder).then(function(response) {
    });
    return promise;
  };

  var getContactReminders = function() {
    var promise = $http.get('/contactlist/getcontactreminders/' + selectedContactId).then(function(response) {
      currentContactReminders.list = response.data;
    });
    return promise;
  };

  var getUserReminders = function() {
    var promise = $http.get('/contactlist/getuserreminders/' + currentUserId).then(function(response) {
      currentUserReminders.list = response.data;
      // currentUserReminders = response.data;
      console.log(currentUserReminders.list);
    });
    return promise;
  };

  var getSelectedContact = function() {
    var promise = $http.get('/contactlist/selectedContactId/' + currentUserId + '/' + selectedContactId).then(function(response){
      // selectedContactData = response.data;
      var selectedContactDataArray = response.data.contactInfo;
      for (var i = 0 ; i < selectedContactDataArray.length; i++) {
        if (selectedContactDataArray[i]._id == selectedContactId) {
          selectedContactData = selectedContactDataArray[i];
        }
      }
    });
    return promise;
  };

  var editContact = function(contact) {
    $http.put('/contactlist/' + selectedContactId, contact).then(function(response) {});
  };

  var standoutTrue = function(id) {
    var promise = $http.put('/contactlist/standouttrue/' + id).then(function(response) {});
    return promise;
  };

  var standoutFalse = function(id) {
    var promise = $http.put('/contactlist/standoutfalse/' + id).then(function(response) {});
    return promise;
  };

  var convoinitTrue = function(id) {
    var promise = $http.put('/contactlist/convoinittrue/' + id).then(function(response) {});
    return promise;
  };

  var convoinitFalse = function(id) {
    var promise = $http.put('/contactlist/convoinitfalse/' + id).then(function(response) {});
    return promise;
  };

  var inviteTrue = function(id) {
    var promise = $http.put('/contactlist/invitetrue/' + id).then(function(response) {});
    return promise;
  };

  var inviteFalse = function(id) {
    var promise = $http.put('/contactlist/invitefalse/' + id).then(function(response) {});
    return promise;
  };

  var challengerTrue = function(id) {
    var promise = $http.put('/contactlist/challengertrue/' + id).then(function(response) {});
    return promise;
  };

  var challengerFalse = function(id) {
    var promise = $http.put('/contactlist/challengerfalse/' + id).then(function(response) {});
    return promise;
  };

  var pendingTrue = function(id) {
    var promise = $http.put('/contactlist/pendingtrue/' + id).then(function(response) {});
    return promise;
  };

  var pendingFalse = function(id) {
    var promise = $http.put('/contactlist/pendingfalse/' + id).then(function(response) {});
    return promise;
  };

  var nevercontactTrue = function(id) {
    var promise = $http.put('/contactlist/nevercontacttrue/' + id).then(function(response) {});
    return promise;
  };

  var nevercontactFalse = function(id) {
    var promise = $http.put('/contactlist/nevercontactfalse/' + id).then(function(response) {});
    return promise;
  };

  var reminderStatusTrue = function(id) {
    var promise = $http.put('/contactlist/reminderstatustrue/' + id).then(function(response){});
    return promise;
  };

  var reminderStatusFalse = function(id) {
    var promise = $http.put('/contactlist/reminderstatusfalse/' + id).then(function(response){});
    return promise;
  };

  var deleteReminder = function(id) {
    var promise = $http.delete('/contactlist/deletereminder/' + id).then(function(response){});
    console.log(currentContactReminders);
    return promise;
  };

  var publicFunctions = {
    factoryContactList: function() {
      return allContacts.list;
    },
    //added this to try to get selected contact's name to addreminder controller
    factorySelectedContactData: function() {
      return selectedContactData;
    },
    //added this to try to get current user's ID
    factoryCurrentUserId: function() {
      return currentUserId;
    },
    factorySaveContact: function(contact) {
      return saveContact(contact);
    },
    factorySaveReminder: function(reminder) {
      return saveReminder(reminder);
    },
    factoryGetContactList: function() {
      return getContactList();
    },
    factoryGetSelectedContact: function() {
      return getSelectedContact();
    },
    factoryGetSelectedContactData: function() {
      return selectedContactData;
    },
    getContactId: function(id) {
      selectedContactId = id;
      return selectedContactId;
    },
    factoryEditContact: function(contact) {
      return editContact(contact);
    },
    factoryCallReminderForm: function(ev) {
      callReminderForm(ev);
    },
    factoryStandoutTrue: function(id) {
      return standoutTrue(id);
    },
    factoryStandoutFalse: function(id) {
      return standoutFalse(id);
    },
    factoryConvoinitTrue: function(id) {
      return convoinitTrue(id);
    },
    factoryConvoinitFalse: function(id) {
      return convoinitFalse(id);
    },
    factoryInviteTrue: function(id) {
      return inviteTrue(id);
    },
    factoryInviteFalse: function(id) {
      return inviteFalse(id);
    },
    factoryChallengerTrue: function(id) {
      return challengerTrue(id);
    },
    factoryChallengerFalse: function(id) {
      return challengerFalse(id);
    },
    factoryPendingTrue: function(id) {
      return pendingTrue(id);
    },
    factoryPendingFalse: function(id) {
      return pendingFalse(id);
    },
    factoryNevercontactTrue: function(id) {
      return nevercontactTrue(id);
    },
    factoryNevercontactFalse: function(id) {
      return nevercontactFalse(id);
    },
    factoryGetContactReminders: function() {
      return getContactReminders();
    },
    factoryReminderComplete: function(id) {
      return reminderStatusTrue(id);
    },
    factoryReminderIncomplete: function(id) {
      return reminderStatusFalse(id);
    },
    factoryDeleteReminder: function(id) {
      return deleteReminder(id);
    },
    factoryGetUserReminders: function() {
      return getUserReminders();
    },
    allContacts: allContacts,
    selectedContactData: selectedContactData,
    currentUserId: currentUserId,
    currentContactReminders: currentContactReminders,
    currentUserReminders: currentUserReminders
  };

  return publicFunctions;

}]);
