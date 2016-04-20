myApp.controller('AddReminderController', ['$scope', '$http', 'ContactFactory',
  '$mdDialog', '$mdMedia', function($scope, $http, ContactFactory, $mdDialog, $mdMedia) {

  $scope.contactFactory = ContactFactory;
  $scope.contactReminders = ContactFactory.currentContactReminders;
  $scope.name = $scope.contactFactory.factorySelectedContactData().name;
  $scope.date = new Date();

  var clearForm = function() {
    $scope.date = new Date();
    $scope.subject = "";
  };

  $scope.saveReminder = function() {

    var remSubject;
    if($scope.subject !== undefined){remSubject =  $scope.subject;} else {remSubject = "No subject";}

    var reminder = {
      userId: $scope.contactFactory.factoryCurrentUserId().toString(),
      contactId: $scope.contactFactory.factorySelectedContactData()._id.toString(),
      name: $scope.name,
      date: $scope.date,
      subject: remSubject,
      status: false
    };

    console.log('reminder: ', reminder);

    $scope.contactFactory.factorySaveReminder(reminder).then(function() {
      $scope.contactReminders = $scope.contactFactory.factoryGetContactReminders();
    });

    clearForm();
    $mdDialog.hide();
  };

}]);
