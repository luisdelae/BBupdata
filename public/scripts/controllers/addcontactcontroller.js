myApp.controller('AddContactController', ['$scope', '$http', 'ContactFactory',
'$mdDialog', '$mdMedia', function($scope, $http, ContactFactory, $mdDialog, $mdMedia) {

  $scope.contactFactory = ContactFactory;
  $scope.status = '  ';
  $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
  $scope.contacts = ContactFactory.allContacts.list;

  $scope.saveContact = function() {

    var contact = {
      name: $scope.name,
      standout: $scope.standout,
      convoinit: $scope.convoinit,
      invite: $scope.invite,
      challenger: $scope.challenger,
      nevercontact: $scope.nevercontact
    };
    console.log('saveContact before actually saving', $scope.contacts);

    $scope.contactFactory.factorySaveContact(contact).then(function() {
      $scope.contacts = $scope.contactFactory.factoryContactList();
      console.log($scope.contacts);
    });

    $scope.name = '';
    $scope.standout = false;
    $scope.convoinit = false;
    $scope.invite = false;
    $scope.challenger = false;
    $scope.nevercontact = false;

  };
}]);
