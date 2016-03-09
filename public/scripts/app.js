var myApp = angular.module('myApp', ['ngRoute', 'ngTable', 'ngMaterial', 'ngMessages']);

myApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider
  // .when('/login', {
  //   templateUrl: '/views/templates/login.html',
  //   // controller: 'LogInController'
  // })
    .when('/contactslist', {
      templateUrl: '/views/templates/contactslist.html',
      controller: 'ContactListController'
    })
    .when('/calendar', {
      templateUrl: '/views/templates/calendar.html',
      controller: 'CalendarController'
    })
    .when('/contactinfo', {
      templateUrl: '/views/templates/contactinfo',
      // controller: 'ContactInfoController'
    })
    .otherwise({
      redirectTo: 'contactslist'
    });
}]);
