myApp.controller('CalendarController', ['$scope', '$http', '$location', 'ContactFactory',
  function($scope, $http, $location, ContactFactory) {

    $scope.uiConfig = {
      calendar:{
        height: 500,
        timezone: 'currentTimezone',
        editable: true,
        header:{
          left: 'month basicWeek basicDay',
          center: 'title',
          right: 'today prev,next'
        },
        eventClick: eventClick,
        eventStartEditable: false
      },
    };
    $scope.events = [];

    var changeBgColor = function(i) {
      if($scope.userReminders[i].status === true) {
        return 'green';
      }
    };

    ContactFactory.factoryGetUserReminders().then(function() {
      $scope.userReminders = ContactFactory.currentUserReminders.list;
      //return an object with an array of objects
      for(var i = 0; i < $scope.userReminders.length; i++) {
        $scope.events.push({contactId: $scope.userReminders[i].contactId, title: $scope.userReminders[i].name +
        ': \n' + $scope.userReminders[i].subject, start: moment.tz($scope.userReminders[i].date,
          moment.tz.guess()), stick: true, backgroundColor: changeBgColor(i)});
      }
    });

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $scope.eventSources = [$scope.events];

    function eventClick(event) {
      ContactFactory.getContactId(event.contactId);
      $location.path('contactinfo');
    }

}]);
