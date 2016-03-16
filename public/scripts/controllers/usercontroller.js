myApp.controller('UserController', ['$scope', '$http', '$location', 'ContactFactory', '$mdDialog',
  function($scope, $http, $location, $mdDialog, ContactFactory) {

  console.log('loaded UserController');

  $scope.contactFactory = ContactFactory;

  $scope.contacts = [];
  $scope.displayedCollection = $scope.contacts.list;

  $scope.contactFactory.factoryGetContactList().then(function() {
    $scope.userFirstName = ContactFactory.currentUserFirstName;
  });

}]);
