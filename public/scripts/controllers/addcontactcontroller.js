myApp.controller('AddContactController', ['$scope', '$http', '$mdDialog',
'ContactFactory', function($scope, $http, $mdDialog, ContactFactory) {

  $scope.contactFactory = ContactFactory;
  $scope.contacts = ContactFactory.allContacts;

  var clearForm = function() {
    $scope.name = '';
    $scope.standout = false;
    $scope.convoinit = false;
    $scope.invite = false;
    $scope.challenger = false;
    $scope.pending = false;
    $scope.nevercontact = false;
  };

  clearForm();

  $scope.saveContact = function() {

    var contact = {
      name: $scope.name,
      standout: $scope.standout,
      convoinit: $scope.convoinit,
      invite: $scope.invite,
      challenger: $scope.challenger,
      pending: $scope.pending,
      nevercontact: $scope.nevercontact
    };

    $scope.contactFactory.factorySaveContact(contact).then(function() {
      $scope.contacts = $scope.contactFactory.factoryContactList();
    });

    clearForm();
    $mdDialog.hide();
  };
}]);
