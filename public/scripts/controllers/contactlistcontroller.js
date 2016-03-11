myApp.controller('ContactListController', ['$scope', '$http', '$location', 'ContactFactory',
'$filter', 'ngTableParams', function($scope, $http, $location,
  ContactFactory, $filter, ngTableParams) {

    console.log('Hello from ContactListController!');

  $scope.contactFactory = ContactFactory;
  $scope.contacts = [];
  // $scope.contacts = ContactFactory.allContacts.list;

  $scope.contactFactory.factoryGetContactList().then(function() {
    // $scope.contacts = $scope.contactFactory.factoryContactList();
    $scope.contacts = ContactFactory.allContacts.list;
    console.log('from ContactListController: ', $scope.contacts);

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
    $scope.contactFactory.getContactId(id);
    $location.path('contactinfo');
  };

  $scope.standoutTrue = function(id) {
    $scope.contactFactory.factoryStandoutTrue(id).then(function() {
      $scope.contactFactory.factoryGetContactList().then(function() {
        $scope.contacts = $scope.contactFactory.factoryContactList();
        console.log($scope.contacts);
        $scope.tableParams.reload();
      });
    });
  };

  $scope.standoutFalse = function(id) {
    $scope.contactFactory.factoryStandoutFalse(id).then(function() {
      $scope.contactFactory.factoryGetContactList().then(function() {
        $scope.contacts = $scope.contactFactory.factoryContactList();
        console.log($scope.contacts);
        $scope.tableParams.reload();
      });
    });
  };

  $scope.convoinitTrue = function(id) {
    $scope.contactFactory.factoryConvoinitTrue(id).then(function() {
      $scope.contactFactory.factoryGetContactList().then(function() {
        $scope.contacts = $scope.contactFactory.factoryContactList();
        console.log($scope.contacts);
        $scope.tableParams.reload();
      });
    });
  };

  $scope.convoinitFalse = function(id) {
    $scope.contactFactory.factoryConvoinitFalse(id).then(function() {
      $scope.contactFactory.factoryGetContactList().then(function() {
        $scope.contacts = $scope.contactFactory.factoryContactList();
        console.log($scope.contacts);
        $scope.tableParams.reload();
      });
    });
  };

  $scope.inviteTrue = function(id) {
    $scope.contactFactory.factoryInviteTrue(id).then(function() {
      $scope.contactFactory.factoryGetContactList().then(function() {
        $scope.contacts = $scope.contactFactory.factoryContactList();
        console.log($scope.contacts);
        $scope.tableParams.reload();
      });
    });
  };

  $scope.inviteFalse = function(id) {
    $scope.contactFactory.factoryInviteFalse(id).then(function() {
      $scope.contactFactory.factoryGetContactList().then(function() {
        $scope.contacts = $scope.contactFactory.factoryContactList();
        console.log($scope.contacts);
        $scope.tableParams.reload();
      });
    });
  };

  $scope.challengerTrue = function(id) {
    $scope.contactFactory.factoryChallengerTrue(id).then(function() {
      $scope.contactFactory.factoryGetContactList().then(function() {
        $scope.contacts = $scope.contactFactory.factoryContactList();
        console.log($scope.contacts);
        $scope.tableParams.reload();
      });
    });
  };

  $scope.challengerFalse = function(id) {
    $scope.contactFactory.factoryChallengerFalse(id).then(function() {
      $scope.contactFactory.factoryGetContactList().then(function() {
        $scope.contacts = $scope.contactFactory.factoryContactList();
        console.log($scope.contacts);
        $scope.tableParams.reload();
      });
    });
  };

  $scope.nevercontactTrue = function(id) {
    $scope.contactFactory.factoryNevercontactTrue(id).then(function() {
      $scope.contactFactory.factoryGetContactList().then(function() {
        $scope.contacts = $scope.contactFactory.factoryContactList();
        console.log($scope.contacts);
        $scope.tableParams.reload();
      });
    });
  };

  $scope.nevercontactFalse = function(id) {
    $scope.contactFactory.factoryNevercontactFalse(id).then(function() {
      $scope.contactFactory.factoryGetContactList().then(function() {
        $scope.contacts = $scope.contactFactory.factoryContactList();
        console.log($scope.contacts);
        $scope.tableParams.reload();
      });
    });
  };

}]);
