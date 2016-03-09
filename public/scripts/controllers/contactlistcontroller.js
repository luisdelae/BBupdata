myApp.controller('ContactListController', ['$scope', '$http', 'ContactFactory',
'$filter', 'ngTableParams','$mdDialog', '$mdMedia', function($scope, $http,
  ContactFactory, $filter, ngTableParams, $mdDialog, $mdMedia) {

  $scope.contactFactory = ContactFactory;
  $scope.contacts = [];

  var getContactList = function() {
    var promise = $http.get('/contactlist').then(function(response) {
      console.log(response.data);
      $scope.contacts = response.data;
    });
    return promise;
  };

  getContactList().then(function(){
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
  });

  $scope.status = '  ';
  $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

  $scope.addContact = function(ev) {
    console.log('clicked addContact button');
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;

    $mdDialog.show({
      controller: DialogController,
      templateUrl: '../views/templates/addcontact.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: useFullScreen,
    }).then(function(){console.log('inside mdDialog');});
  };

}]);

function DialogController($scope, $http) {
  $scope.saveContact = function() {

    var contact = {
      name: $scope.name,
      standout: $scope.standout,
      convoinit: $scope.convoinit,
      invite: $scope.invite,
      challenger: $scope.challenger,
      nevercontact: $scope.nevercontact
    };
    console.log(contact);

    //add it to db
    //refresh the table

    $http.post('/savecontact', contact).then(function(response) {
      console.log('from post:: ', response);
    });

    $scope.name = '';
    $scope.standout = false;
    $scope.convoinit = false;
    $scope.invite = false;
    $scope.challenger = false;
    $scope.nevercontact = false;
  };
}
