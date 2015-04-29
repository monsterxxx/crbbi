'use strict';

angular.module('crbbiApp')
  .controller('OrganizationCtrl', function ($scope, $http, socket) {
    $scope.orgainzations = [];

    $http.get('/api/organizations').success(function(orgainzations) {
      $scope.orgainzations = orgainzations;
      //socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/organizations', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(orgainzation) {
      $http.delete('/api/organizations/' + orgainzation._id);
    };


    // $scope.$on('$destroy', function () {
    //   socket.unsyncUpdates('thing');
    // });
  });
