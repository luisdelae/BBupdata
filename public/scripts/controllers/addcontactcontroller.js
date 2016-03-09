myApp.controller('AddContactController', ['$scope', '$http', 'ContactFactory',
'$mdDialog', '$mdMedia', function($scope, $http,
  ContactFactory, $mdDialog, $mdMedia) {

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

    $http.post('/savecontact', contact).then(function(response) {
      console.log('from post:: ', response);
    });

    $scope.name = '';
    $scope.standout = false;
    $scope.convoinit = false;
    $scope.invite = false;
    $scope.challenger = false;
    $scope.nevercontact = false;

  };
}]);
