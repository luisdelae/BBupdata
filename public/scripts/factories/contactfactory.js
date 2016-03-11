myApp.factory('ContactFactory', ['$http','$mdDialog', '$mdMedia',
function($http, $mdDialog, $mdMedia) {

  var allContacts = {};
  var selectedContactId;
  var selectedContactData;

  var getContactList = function() {
    console.log('Entered getContactList()');
    var promise = $http.get('/contactlist').then(function(response) {
      allContacts.list = response.data;
    });
    return promise;
  };

  var saveContact = function(contact) {
    console.log('Entered saveContact()');
    var promise = $http.post('/contactlist', contact).then(function(response) {
      allContacts.list = response.data;
      console.log('from saveContact:', allContacts.list);
    });
    return promise;
  };

  var callContactForm = function(ev) {
    console.log('clicked addContact button');
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;

    $mdDialog.show({
      templateUrl: '../views/templates/addcontact.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: useFullScreen,
    });
  };

  var getSelectedContact = function() {
    console.log('id received by getSelectedContact: ', selectedContactId);
    var promise = $http.get('/contactlist/' + selectedContactId).then(function(response){
      selectedContactData = response.data;
      console.log('selectedContactData: ', selectedContactData);

    });
    return promise;
  };

  var editContact = function(contact) {
    $http.put('/contactlist/' + selectedContactId, contact).then(function(response) {
    });
  };

  var standoutTrue = function(id) {
    var promise = $http.put('/contactliststandouttrue/' + id).then(function(response) {
    });
    return promise;
  };

  var standoutFalse = function(id) {
    var promise = $http.put('/contactliststandoutfalse/' + id).then(function(response) {
    });
    return promise;
  };

  var convoinitTrue = function(id) {
    var promise = $http.put('/contactlistconvoinittrue/' + id).then(function(response) {
    });
    return promise;
  };

  var convoinitFalse = function(id) {
    var promise = $http.put('/contactlistconvoinitfalse/' + id).then(function(response) {
    });
    return promise;
  };

  var inviteTrue = function(id) {
    var promise = $http.put('/contactlistinvitetrue/' + id).then(function(response) {
    });
    return promise;
  };

  var inviteFalse = function(id) {
    var promise = $http.put('/contactlistinvitefalse/' + id).then(function(response) {
    });
    return promise;
  };

  var challengerTrue = function(id) {
    var promise = $http.put('/contactlistchallengertrue/' + id).then(function(response) {
    });
    return promise;
  };

  var challengerFalse = function(id) {
    var promise = $http.put('/contactlistchallengerfalse/' + id).then(function(response) {
    });
    return promise;
  };

  var nevercontactTrue = function(id) {
    var promise = $http.put('/contactlistnevercontacttrue/' + id).then(function(response) {
    });
    return promise;
  };

  var nevercontactFalse = function(id) {
    var promise = $http.put('/contactlistnevercontactfalse/' + id).then(function(response) {
    });
    return promise;
  };

  var publicFunctions = {
    factoryContactList: function() {
      return allContacts.list;
    },
    factorySaveContact: function(contact) {
      return saveContact(contact);
    },
    factoryGetContactList: function() {
      return getContactList();
    },
    factoryGetSelectedContact: function() {
      return getSelectedContact();
    },
    factoryGetSelectedConactData: function() {
      return selectedContactData;
    },
    getContactId: function(id){
      selectedContactId = id;
      return selectedContactId;
    },
    factoryEditContact: function(contact) {
      return editContact(contact);
    },
    factoryCallContactForm: function(ev) {
      callContactForm(ev);
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
    factoryNevercontactTrue: function(id) {
      return nevercontactTrue(id);
    },
    factoryNevercontactFalse: function(id) {
      return nevercontactFalse(id);
    },
    allContacts: allContacts
  };

  return publicFunctions;

}]);
