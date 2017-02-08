'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider', '$cookiesProvider',
    function($stateProvider, $urlRouterProvider, $cookiesProvider) {

        var $cookies;
        angular.injector(['ngCookies']).invoke(['$cookies', function(_$cookies_) {
          $cookies = _$cookies_;
        }]);

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('add-client', {
                url: '/',
                views: {
                  'main@': {
                    templateUrl: 'templates/addClient.html',
                    controller: 'AddClientCtrl'
                  }
                }
            })
    }
]);
