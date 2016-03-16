myApp.controller('CalendarController', ['$scope', '$http','ContactFactory', function($scope, $http, ContactFactory, Calendar) {

  var eventListUrl = '';
  var eventList;

  $scope.getEventList = function() {
    var promise = $http.get('https://www.googleapis.com/calendar/v3/calendars/primary/events?key=AIzaSyCFvSdVmtOo90Ix46P280K_n7zr5iyh6ZM').then(function(response) {
      eventList = response;
      console.log(eventList);
    });
    return promise;
  };

  $scope.getEventList();

}]);
