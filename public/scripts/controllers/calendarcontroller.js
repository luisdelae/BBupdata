myApp.controller('CalendarController', ['$scope', '$http','ContactFactory', function($scope, $http, ContactFactory, Calendar) {

  var eventListUrl = 'https://www.googleapis.com/calendar/v3/calendars/primary/events?key=AIzaSyC4PNGZG8mwGGge4cMpxV0Dxn3OKHe8Ohs';
  var eventList;

  $scope.getEventList = function() {
    var promise = $http.get(eventListUrl).then(function(response) {
      eventList = response.data;
    });
    return promise;
  };

  $scope.getEventList();

}]);
