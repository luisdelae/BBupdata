myApp.controller('ContactListController', ['$scope', '$http', 'ContactFactory', '$filter',
'ngTableParams', function($scope, $http, ContactFactory, $filter, ngTableParams) {

  $scope.contacts = [];

  var getContactList = function() {
    var promise = $http.get('/contactlist').then(function(response) {
      console.log(response.data);
      $scope.contacts = response.data;
    });
    return promise;
  };

  getContactList();

  $scope.tableParams = new ngTableParams({
    // page: 1,
    count: $scope.contacts.length
  }, {
      counts: [],
      total: 1,
      getData: function($defer, params) {
          $scope.data = params.sorting() ? $filter('orderBy')($scope.contacts, params.orderBy()) : $scope.contacts;
          $scope.data = params.filter() ? $filter('filter')($scope.data, params.filter()) : $scope.data;
          $defer.resolve($scope.data);
      }
  });

}]);
