angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('DevicesCtrl', function($scope, Devices) {
  $scope.devices = Devices.all;
})

.controller('SearchCtrl', function($scope) {
})

.controller('DeviceInfoCtrl', function($scope, $stateParams, Devices) {
  $scope.devices = Devices.get($stateParams.deviceId);
})

.controller('CategoriesCtrl', function($scope,Categories) {
  $scope.categories = Categories.all;
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
