myApp.controller('AddContactController', ['$scope', '$http', 'ContactFactory',
'$mdDialog', '$mdMedia', function($scope, $http, ContactFactory, $mdDialog, $mdMedia) {

  $scope.contactFactory = ContactFactory;
  $scope.status = '  ';
  $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
  $scope.contacts = [];

  $scope.saveContact = function() {

    var contact = {
      name: $scope.name,
      standout: $scope.standout,
      convoinit: $scope.convoinit,
      invite: $scope.invite,
      challenger: $scope.challenger,
      nevercontact: $scope.nevercontact
    };
    console.log(contact);

    //add it to db
    //refresh the table

    $scope.contactFactory.factorySaveContact(contact).then(function() {
      $scope.contactFactory.factoryGetContactList().then(function() {
        $scope.contacts = $scope.contactFactory.factoryContactList();
      });
    });

    $scope.name = '';
    $scope.standout = false;
    $scope.convoinit = false;
    $scope.invite = false;
    $scope.challenger = false;
    $scope.nevercontact = false;

  };
}]);
