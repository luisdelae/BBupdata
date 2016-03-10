myApp.controller('ContactListController', ['$scope', '$http', '$location', 'ContactFactory',
'$filter', 'ngTableParams', function($scope, $http, $location,
  ContactFactory, $filter, ngTableParams) {

    console.log('Hello from ContactListController!');

  $scope.contactFactory = ContactFactory;
  $scope.contacts = [];

  $scope.contactFactory.factoryGetContactList().then(function() {
    $scope.contacts = $scope.contactFactory.factoryContactList();
    $scope.tableParams = new ngTableParams({
      // page: 1,
      count: $scope.contacts.length
    },{
      counts: [],
      total: 1,
      getData: function($defer, params) {
        $scope.data = params.sorting() ? $filter('orderBy')($scope.contacts, params.orderBy()) : $scope.contacts;
        $scope.data = params.filter() ? $filter('filter')($scope.data, params.filter()) : $scope.data;
        $defer.resolve($scope.data);
      }
    });
  });

  $scope.addContact = function(ev) {
    $scope.contactFactory.factoryCallContactForm(ev);
  };

  $scope.contactInfo = function(id) {
    console.log('Clicked contactInfo for: ', id);
    $location.path('contactinfo');
  };

}]);
