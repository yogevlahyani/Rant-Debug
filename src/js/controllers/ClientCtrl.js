/**
 * Client Controller
 */

angular.module('RDash')
    .controller('ClientCtrl', ['$scope', '$cookies', '$location', 'Client', function($scope, $cookies, $location, Client) {

        $scope.isAdmin = function() {
            if($cookies.get('isAdmin') == 'true') {
                return true;
            } else {
                return false;
            }
        }

        Client.getAll($cookies.get('userToken')).then(function(res) {
            $scope.clients = res.data;
        });

        $scope.deleteClient = function(clientId) {
            swal({
                title: 'האם אתה בטוח ?',
                text: clientId,
                showCancelButton: true,
                confirmButtonText: 'כן אני בטוח',
                cancelButtonText: 'ביטול'
            });
        };

}]);
