myApp.controller('AddReminderController', ['$scope', '$http', 'ContactFactory',
  '$mdDialog', '$mdMedia', function($scope, $http, ContactFactory, $mdDialog, $mdMedia) {

  $scope.contactFactory = ContactFactory;
  $scope.name = $scope.contactFactory.factorySelectedContactData().name;
  $scope.date = new Date();

  var clearForm = function() {
    $scope.date = new Date();
    $scope.subject = "";
  };

  // var makeId = function() {
  //   var id = "";
  //   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //   for( var i = 0; i < 10; i++ ) {
  //       id += possible.charAt(Math.floor(Math.random() * possible.length));
  //     }
  //     console.log(id);
  //   return id;
  // };

  $scope.saveReminder = function() {

    var reminder = {
      contactId: $scope.contactFactory.factorySelectedContactData()._id.toString(),
      name: $scope.name,
      date: $scope.date,
      subject: $scope.subject
    };

    console.log(reminder);

    $scope.contactFactory.factorySaveReminder(reminder);

    clearForm();
    $mdDialog.hide();
  };

}]);
