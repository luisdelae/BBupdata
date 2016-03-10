myApp.controller('ContactInfoController', ['$scope', '$http', 'ContactFactory',
function($scope, $http, ContactFactory) {

  console.log("Hello from ContactInfoController");

  $scope.contactFactory = ContactFactory;
  $scope.contact = {};

  $scope.contactFactory.factoryGetSelectedContact().then(function() {
    $scope.contact = $scope.contactFactory.factoryGetSelectedConactData();
    console.log($scope.contact);
    enterData();
  });

  function enterData() {
    $scope.standout = $scope.contact.standout;
    $scope.convoinit = $scope.contact.convoinit;
    $scope.invite = $scope.contact.invite;
    $scope.challenger = $scope.contact.challenger;
    $scope.nevercontact = $scope.contact.nevercontact;
    $scope.name = $scope.contact.name;
    $scope.occupation = $scope.contact.occupation;
    $scope.family = $scope.contact.family;
    $scope.goals = $scope.contact.goals;
    $scope.struggles = $scope.contact.struggles;
    $scope.notes = $scope.contact.notes;
  }

  $scope.editPost = function() {
  var contact = {
    standout: $scope.standout,
    convoinit: $scope.convoinit,
    invite: $scope.invite,
    challenger: $scope.challenger,
    nevercontact: $scope.nevercontact,
    name: $scope.name,
    occupation: $scope.occupation,
    family: $scope.family,
    goals: $scope.goals,
    struggles: $scope.struggles,
    notes: $scope.notes
  };

  $scope.contactFactory.factoryEditContact(contact);

  alert('Contact has been updated');

};

}]);
