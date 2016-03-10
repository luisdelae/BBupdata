myApp.factory('ContactFactory', ['$http','$mdDialog', '$mdMedia',
function($http, $mdDialog, $mdMedia) {

  var allContacts;
  var selectedContactId;
  var selectedContactData;

  var saveContact = function(contact) {
    console.log('Entered saveContact()');
     var promise = $http.post('/contactlist', contact).then(function(response) {
    });
    return promise;
  };

  var getContactList = function() {
    console.log('Entered getContactList()');
    var promise = $http.get('/contactlist').then(function(response) {
      allContacts = response.data;
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
      return SelectedContactData;
    },
    factoryEditContact: function(contact) {
      return editPost(contact);
    },
    factoryCallContactForm: function(ev) {
      callContactForm(ev);
    }
  };

  return publicFunctions;

}]);
