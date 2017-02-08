/**
 * Master Controller
 */

angular.module('RDash')
    .controller('MasterCtrl', ['$scope', '$cookieStore', '$cookies', '$state', '$interval', function ($scope, $cookieStore, $cookies, $state, $interval) {

    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;

    $scope.getWidth = function() {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = ! $cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }

    });

    $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function() {
        $scope.$apply();
    };

    $scope.menu = [
      {
        name: 'Dashboard',
        link: 'dashboard',
        icon: 'fa fa-tachometer'
      },
      {
        name: 'Tables',
        link: 'dashboard.tables',
        icon: 'fa fa-table'
      },
      {
        name: 'Clients',
        link: 'dashboard.clients',
        icon: 'fa fa-user'
      }
    ];

/*
    function getBreadcrumbs() {
        for(var i = 0; i < $scope.menu.length; i++) {
          if($scope.menu[i].link == $state.current.name) {
              $scope.breadcrumbs = $scope.menu[i];
              break;
          }
        }
    }

    $scope.$watch(function() {
        return $state.current.name;
    }, function() {
        getBreadcrumbs();
        $scope.title = "RDash - " + $scope.breadcrumbs.name;
    });
    */

    //$interval(getBreadcrumbs, 10); // Temp solution

    //document.addEventListener('deviceready', getBreadcrumbs(), false);
}]);
