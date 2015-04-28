'use strict';

angular.module('crbbiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('organization', {
        url: '/organization',
        templateUrl: 'app/organization/organization.html',
        controller: 'OrganizationCtrl'
      });
  });