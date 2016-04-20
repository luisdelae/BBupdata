myApp.controller('CalendarController', ['$scope', '$http', 'ContactFactory',
  function($scope, $http, ContactFactory) {

    $scope.contactFactory = ContactFactory;


    $scope.uiConfig = {
      calendar:{
        height: 450,
        timezone: 'currentTimezone',
        editable: true,
        header:{
          left: 'month basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        dayClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize
      }
    };
    $scope.events = [];

    var changeBgColor = function(i) {
      if($scope.userReminders[i].status === true) {
        return 'green';
      }
    };

    $scope.contactFactory.factoryGetUserReminders().then(function() {
      $scope.userReminders = $scope.contactFactory.currentUserReminders.list;
      console.log('userReminders from controller: ', $scope.userReminders);
      //return an object with an array of objects
      for(var i = 0; i < $scope.userReminders.length; i++) {
        $scope.events.push({title: (($scope.userReminders[i].name))[0] +
        ': ' + $scope.userReminders[i].subject, start: moment.tz($scope.userReminders[i].date,
          moment.tz.guess()), stick: true, backgroundColor: changeBgColor(i)});
      }
    });

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $scope.eventSources = [$scope.events];


}]);
