/**
 * AddClient Controller
 */

angular.module('RDash')
    .controller('AddClientCtrl', ['$scope', '$cookies', '$location', function($scope, $cookies, $location) {

        $(function() {
            $(".toggle-one").bootstrapToggle();
            $("#name").focus();
        });

        $scope.priceSum = '0';

        $scope.phoneMaskConfig = {
            mask: ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
            guide: true,
            keepCharPositions: true
        };

        $scope.dateMaskConfig = {
            mask: [/^[0-3]?[0-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
            guide: true,
            keepCharPositions: true
        };


        $scope.emailMaskConfig = {
            mask: emailMask, // ?
            guide: true,
            keepCharPositions: true
        };

        $scope.bussinessIdMaskConfig = {
            mask: [/[0-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
            guide: true,
            keepCharPositions: true
        };

        $scope.cardNumberMaskConfig = {
            mask: [/[0-9]/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
            guide: true,
            keepCharPositions: true
        };

        $scope.card = {
            name: "John Smith",
            number: "4242424242424242",
            expiry: "03/2020",
            cvc: "424"
        };

        $scope.cardPlaceholders = {
            name: 'Your Full Name',
            number: 'xxxx xxxx xxxx xxxx',
            expiry: 'MM/YY',
            cvc: 'xxx'
        };

        $scope.cardMessages = {
            validDate: 'valid\nthru',
            monthYear: 'MM/YYYY',
        };

        $scope.cardOptions = {
            debug: true,
            formatting: true
        };

        $scope.isCreditCard = true;
        $scope.isPayPal = false;

        $scope.togglePayment = function(paymentMethod) {
            if(paymentMethod == 'payPal') {
                $scope.isCreditCard = false;
                $scope.isPayPal = true;
            } else {
                $scope.isCreditCard = true;
                $scope.isPayPal = false;
            }
        };

        $scope.client = {
            packages: [],
            notesLog: [],
            password: Math.floor(Math.random() * 99999) + 10000,
            author: $cookies.get('username')
        };

        $scope.client.isPaying = true;

        $scope.isPayingToggle = function() {
            $scope.client.isPaying = !$scope.client.isPaying;
        };

        $scope.client.errors = [];

        $scope.addClient = function() {

            $scope.client.paymentDetails = {
                cardName: $scope.card.name,
                cardNumber: $scope.card.number,
                expire: $scope.card.expiry.split("/"),
                creditCVC: $scope.card.cvc
            };

            console.log($scope.client.paymentDetails);

            if(!$scope.client.name) {
                $scope.client.errors['name'] = "Please fill";
            }
            if(!$scope.client.last) {
                $scope.client.errors['last'] = "Please fill";
            }
            if(!$scope.client.email) {
                $scope.client.errors['email'] = "Please fill";
            }
            if(!$scope.client.phone) {
                $scope.client.errors['phone'] = "Please fill";
            }
            if(!$scope.client.birthday) {
                $scope.client.errors['birthday'] = "Please fill";
            }
            if(!$scope.client.bussinessId) {
                $scope.client.errors['bussinessId'] = "Please fill";
            }
            if($scope.client.name && $scope.client.last && $scope.client.email && $scope.client.phone && $scope.client.birthday && $scope.client.bussinessId) {
                $scope.client.errors = [];
                swal(
                    $scope.client.name + ' ' + $scope.client.last,
					'Added successfully!',
					'success'
                )
            }
        };

    }]);
