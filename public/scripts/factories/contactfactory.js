myApp.factory('ContactFactory', ['$http','$mdDialog', '$mdMedia',
function($http, $mdDialog, $mdMedia) {

  var allContacts;
  var selectedContactId;
  var selectedContactData;

  var getContactList = function() {
    console.log('Entered getContactList()');
    var promise = $http.get('/contactlist').then(function(response) {
      allContacts = response.data;
    });
    return promise;
  };

  var saveContact = function(contact) {
    console.log('Entered saveContact()');
    var promise = $http.post('/contactlist', contact).then(function(response) {
    allContacts = response.data;

    console.log(allContacts);
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
    console.log('id from standouttrue: ', id);
    var promise = $http.put('/contactlisticon/' + id).then(function(response) {
    });
    return promise;
  };

  var publicFunctions = {
    factoryContactList: function() {
      return allContacts;
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
    }
  };

  return publicFunctions;

}]);
