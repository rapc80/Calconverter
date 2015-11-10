// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {
console.log("1 inpopup ctrl");
// Triggered on a button click, or some other target
$scope.showPopup = function() {
	console.log("2");
  $scope.data = {}
console.log("3");
  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input type="password" ng-model="data.wifi">',
    title: 'Enter Wi-Fi Password',
    subTitle: 'Please use normal things',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.wifi) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return $scope.data.wifi;
          }
        }
      }
    ]
  });
  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });
  $timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 3000);
 };
 // A confirm dialog
 $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Consume Ice Cream',
     template: 'Are you sure you want to eat this ice cream?'
   });
   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };

 // An alert dialog
 $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Help',
     template: '* Its easy.<br>*Do your regular calculations and when you need the answer to be converted simply press the CONVERTER button.<br>*You will be shown different Unit conversion options.<br>*Click the corresponding button and you can see lot of conversion buttons.<br>*Click the appropriate conversion button.<br>*Now you get the converted value.<br>* Now Press the HOME buttom at the bottom left.You will get to the main page and continue with the calculation.<br>* When you want to save a value press SAVE VALUE button.<br>* When you want to use the saved value for further calculations press GET VALUE button.<br>* If your Calculations are long and exceeds the display bar or the answer is longer than the display bar  you might not see the entries. To see them you have to scroll the display bar sidewards.'
   });
   alertPopup.then(function(res) {
     console.log(' ');
   });
 };
});

	