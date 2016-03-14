myApp.factory('ContactFactory', ['$http','$mdDialog', '$mdMedia',
function($http, $mdDialog, $mdMedia) {

  var allContacts = {};
  var selectedContactId;
  var selectedContactData;

  var getContactList = function() {
    var promise = $http.get('/contactlist').then(function(response) {
      allContacts.list = response.data;
    });
    return promise;
  };

  var saveContact = function(contact) {
    var promise = $http.post('/contactlist', contact).then(function(response) {
      allContacts.list = response.data;
    });
    return promise;
  };

  var callContactForm = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;

    $mdDialog.show({
      templateUrl: '../views/templates/addcontact.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: useFullScreen,
    });
  };

  var getSelectedContact = function() {
    var promise = $http.get('/contactlist/' + selectedContactId).then(function(response){
      selectedContactData = response.data;

    });
    return promise;
  };

  var editContact = function(contact) {
    $http.put('/contactlist/' + selectedContactId, contact).then(function(response) {
    });
  };

  var standoutTrue = function(id) {
    var promise = $http.put('/contactlist/standouttrue/' + id).then(function(response) {
    });
    return promise;
  };

  var standoutFalse = function(id) {
    var promise = $http.put('/contactlist/standoutfalse/' + id).then(function(response) {
    });
    return promise;
  };

  var convoinitTrue = function(id) {
    var promise = $http.put('/contactlist/convoinittrue/' + id).then(function(response) {
    });
    return promise;
  };

  var convoinitFalse = function(id) {
    var promise = $http.put('/contactlist/convoinitfalse/' + id).then(function(response) {
    });
    return promise;
  };

  var inviteTrue = function(id) {
    var promise = $http.put('/contactlist/invitetrue/' + id).then(function(response) {
    });
    return promise;
  };

  var inviteFalse = function(id) {
    var promise = $http.put('/contactlist/invitefalse/' + id).then(function(response) {
    });
    return promise;
  };

  var challengerTrue = function(id) {
    var promise = $http.put('/contactlist/challengertrue/' + id).then(function(response) {
    });
    return promise;
  };

  var challengerFalse = function(id) {
    var promise = $http.put('/contactlist/challengerfalse/' + id).then(function(response) {
    });
    return promise;
  };

  var nevercontactTrue = function(id) {
    var promise = $http.put('/contactlist/nevercontacttrue/' + id).then(function(response) {
    });
    return promise;
  };

  var nevercontactFalse = function(id) {
    var promise = $http.put('/contactlist/nevercontactfalse/' + id).then(function(response) {
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
    factoryGetSelectedContactData: function() {
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
