myApp.controller('ContactListController', ['$scope', '$http', '$location', 'ContactFactory',
'$filter', 'ngTableParams', function($scope, $http, $location,
  ContactFactory, $filter, ngTableParams) {

  var vm = this;
  $scope.contactFactory = ContactFactory;
  $scope.contacts = [];
  $scope.contacts = ContactFactory.allContacts;

  $scope.contactFactory.factoryGetContactList().then(function() {
    // $scope.contacts = $scope.contactFactory.factoryContactList();
    $scope.contacts = ContactFactory.allContacts;

    $scope.tableParams = new ngTableParams({
      // page: 1,
      count: $scope.contacts.list.length
    },{
      counts: [],
      total: 1,
      getData: function($defer, params) {
        $scope.data = params.sorting() ? $filter('orderBy')($scope.contacts.list, params.orderBy()) : $scope.contacts.list;
        $scope.data = params.filter() ? $filter('filter')($scope.data, params.filter()) : $scope.data;
        $defer.resolve($scope.data);
      }
    });
  });

  $scope.$watch(
    "vm.$scope.contacts",
    function handleFooChange( newValue, oldValue ) {
      console.log( "$scope.contacts OLD", oldValue );
      console.log( "$scope.contacts NEW", newValue );
      $scope.data = false ? $filter('orderBy')(newValue.list, params.orderBy()) : newValue.list;
      $scope.data = false ? $filter('filter')($scope.data, params.filter()) : $scope.data;
    }
  );

  $scope.addContact = function(ev) {
    ContactFactory.factoryCallContactForm(ev);
  };

  $scope.contactInfo = function(id) {
    console.log('Clicked contactInfo for: ', id);
    $scope.contactFactory.getContactId(id);
    $location.path('contactinfo');
  };

  $scope.standoutTrue = function(id) {
    $scope.contactFactory.factoryStandoutTrue(id).then(function() {
      $scope.contactFactory.factoryGetContactList().then(function() {
        $scope.contacts = ContactFactory.allContacts;
      });
    });
  };

  $scope.standoutFalse = function(id) {
    $scope.contactFactory.factoryStandoutFalse(id).then(function() {
      $scope.contactFactory.factoryGetContactList().then(function() {
        $scope.contacts = ContactFactory.allContacts;
      });
    });
  };

  $scope.convoinitTrue = function(id) {
    $scope.contactFactory.factoryConvoinitTrue(id).then(function() {
      $scope.contactFactory.factoryGetContactList().then(function() {
        $scope.contacts = ContactFactory.allContacts;
      });
    });
  };

  $scope.convoinitFalse = function(id) {
    $scope.contactFactory.factoryConvoinitFalse(id).then(function() {
      $scope.contactFactory.factoryGetContactList().then(function() {
        $scope.contacts = ContactFactory.allContacts;
      });
    });
  };

  $scope.inviteTrue = function(id) {
    $scope.contactFactory.factoryInviteTrue(id).then(function() {
      $scope.contactFactory.factoryGetContactList().then(function() {
        $scope.contacts = ContactFactory.allContacts;
      });
    });
  };

  $scope.inviteFalse = function(id) {
    $scope.contactFactory.factoryInviteFalse(id).then(function() {
      $scope.contactFactory.factoryGetContactList().then(function() {
        $scope.contacts = ContactFactory.allContacts;
      });
    });
  };

  $scope.challengerTrue = function(id) {
    $scope.contactFactory.factoryChallengerTrue(id).then(function() {
      $scope.contactFactory.factoryGetContactList().then(function() {
        $scope.contacts = ContactFactory.allContacts;
      });
    });
  };

  $scope.challengerFalse = function(id) {
    $scope.contactFactory.factoryChallengerFalse(id).then(function() {
      $scope.contactFactory.factoryGetContactList().then(function() {
        $scope.contacts = ContactFactory.allContacts;
      });
    });
  };

  $scope.nevercontactTrue = function(id) {
    $scope.contactFactory.factoryNevercontactTrue(id).then(function() {
      $scope.contactFactory.factoryGetContactList().then(function() {
        $scope.contacts = ContactFactory.allContacts;
      });
    });
  };

  $scope.nevercontactFalse = function(id) {
    $scope.contactFactory.factoryNevercontactFalse(id).then(function() {
      $scope.contactFactory.factoryGetContactList().then(function() {
        $scope.contacts = ContactFactory.allContacts;
      });
    });
  };

}]);
