myApp.controller('ContactInfoController', ['$scope', '$http', '$mdDialog', '$mdMedia', 'ContactFactory',
  function($scope, $http, $mdDialog, $mdMedia, ContactFactory, AddReminderController) {

  $scope.contactFactory = ContactFactory;
  $scope.contact = {};
  $scope.contactReminders;

  $scope.addReminder = function(ev) {
    // ContactFactory.factoryCallReminderForm(ev);
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;

    $mdDialog.show({
      templateUrl: '../views/templates/addreminder.html',
      controller: 'AddReminderController',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: useFullScreen,
    });
  };

  $scope.contactFactory.factoryGetSelectedContact().then(function() {
    $scope.contact = $scope.contactFactory.factoryGetSelectedContactData();
    console.log('selectedContactData: ', $scope.contact);
    enterData();
  });

  $scope.contactFactory.factoryGetContactReminders().then(function() {
    $scope.contactReminders = ContactFactory.currentContactReminders;
  });

  function enterData() {
    $scope.standout = $scope.contact.standout;
    $scope.convoinit = $scope.contact.convoinit;
    $scope.invite = $scope.contact.invite;
    $scope.challenger = $scope.contact.challenger;
    $scope.pending = $scope.contact.pending;
    $scope.nevercontact = $scope.contact.nevercontact;
    $scope.name = $scope.contact.name;
    $scope.occupation = $scope.contact.occupation;
    $scope.family = $scope.contact.family;
    $scope.goals = $scope.contact.goals;
    $scope.struggles = $scope.contact.struggles;
    $scope.notes = $scope.contact.notes;
  }

  $scope.editPost = function(ev) {
    var contact = {
      name: $scope.name,
      occupation: $scope.occupation,
      family: $scope.family,
      goals: $scope.goals,
      struggles: $scope.struggles,
      notes: $scope.notes
    };

    $scope.contactFactory.factoryEditContact(contact);

    //alert starts here
    $scope.status = '  ';
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Success!')
        .textContent('Contact information has been updated.')
        .ariaLabel('Alert success')
        .ok('OK')
        .targetEvent(ev)
    );
    //alert ends gere

  };

  $scope.standoutTrue = function(id) {
    $scope.contactFactory.factoryStandoutTrue(id).then(function() {
      $scope.contactFactory.factoryGetSelectedContact().then(function() {
        $scope.contact = $scope.contactFactory.factoryGetSelectedContactData();
      });
    });
  };

  $scope.standoutFalse = function(id) {
    $scope.contactFactory.factoryStandoutFalse(id).then(function() {
      $scope.contactFactory.factoryGetSelectedContact().then(function() {
        $scope.contact = $scope.contactFactory.factoryGetSelectedContactData();
      });
    });
  };

  $scope.convoinitTrue = function(id) {
    $scope.contactFactory.factoryConvoinitTrue(id).then(function() {
      $scope.contactFactory.factoryGetSelectedContact().then(function() {
        $scope.contact = $scope.contactFactory.factoryGetSelectedContactData();
      });
    });
  };

  $scope.convoinitFalse = function(id) {
    $scope.contactFactory.factoryConvoinitFalse(id).then(function() {
      $scope.contactFactory.factoryGetSelectedContact().then(function() {
        $scope.contact = $scope.contactFactory.factoryGetSelectedContactData();
      });
    });
  };

  $scope.inviteTrue = function(id) {
    $scope.contactFactory.factoryInviteTrue(id).then(function() {
      $scope.contactFactory.factoryGetSelectedContact().then(function() {
        $scope.contact = $scope.contactFactory.factoryGetSelectedContactData();
      });
    });
  };

  $scope.inviteFalse = function(id) {
    $scope.contactFactory.factoryInviteFalse(id).then(function() {
      $scope.contactFactory.factoryGetSelectedContact().then(function() {
        $scope.contact = $scope.contactFactory.factoryGetSelectedContactData();
      });
    });
  };

  $scope.challengerTrue = function(id) {
    $scope.contactFactory.factoryChallengerTrue(id).then(function() {
      $scope.contactFactory.factoryGetSelectedContact().then(function() {
        $scope.contact = $scope.contactFactory.factoryGetSelectedContactData();
      });
    });
  };

  $scope.challengerFalse = function(id) {
    $scope.contactFactory.factoryChallengerFalse(id).then(function() {
      $scope.contactFactory.factoryGetSelectedContact().then(function() {
        $scope.contact = $scope.contactFactory.factoryGetSelectedContactData();
      });
    });
  };

  $scope.pendingTrue = function(id) {
    $scope.contactFactory.factoryPendingTrue(id).then(function() {
      $scope.contactFactory.factoryGetSelectedContact().then(function() {
        $scope.contact = $scope.contactFactory.factoryGetSelectedContactData();
      });
    });
  };

  $scope.pendingFalse = function(id) {
    $scope.contactFactory.factoryPendingFalse(id).then(function() {
      $scope.contactFactory.factoryGetSelectedContact().then(function() {
        $scope.contact = $scope.contactFactory.factoryGetSelectedContactData();
      });
    });
  };

  $scope.nevercontactTrue = function(id) {
    $scope.contactFactory.factoryNevercontactTrue(id).then(function() {
      $scope.contactFactory.factoryGetSelectedContact().then(function() {
        $scope.contact = $scope.contactFactory.factoryGetSelectedContactData();
      });
    });
  };

  $scope.nevercontactFalse = function(id) {
    $scope.contactFactory.factoryNevercontactFalse(id).then(function() {
      $scope.contactFactory.factoryGetSelectedContact().then(function() {
        $scope.contact = $scope.contactFactory.factoryGetSelectedContactData();
      });
    });
  };

  $scope.setComplete = function(id) {
    $scope.contactFactory.factoryReminderComplete(id).then(function() {
      $scope.contactFactory.factoryGetContactReminders().then(function() {
        $scope.contactReminders = ContactFactory.currentContactReminders;
      });
    });
  };

  $scope.setIncomplete = function(id) {
    $scope.contactFactory.factoryReminderIncomplete(id).then(function() {
      $scope.contactFactory.factoryGetContactReminders().then(function() {
        $scope.contactReminders = ContactFactory.currentContactReminders;
      });
    });
  };

  $scope.deleteReminder = function(id, ev) {

    var confirm = $mdDialog.confirm()
      .clickOutsideToClose(true)
      .title('Delete Reminder')
      .textContent('Are you sure you want to delete this reminder?')
      .ariaLabel('Delete Reminder')
      .ok('OK')
      .cancel('Cancel')
      .targetEvent(ev);

      $mdDialog.show(confirm).then(function() {
        $scope.contactFactory.factoryDeleteReminder(id).then(function() {
          $scope.contactFactory.factoryGetContactReminders().then(function() {
            $scope.contactReminders = ContactFactory.currentContactReminders;
          });
        });
      });
  };

}]);
