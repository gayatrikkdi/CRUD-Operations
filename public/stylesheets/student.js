var app = angular.module("myapp", []);
        app.controller("myCntrl", function($scope,$http) {
            $scope.oPersonDetails = {};
            $scope.aPersonDetails = [];
            $scope.phoneNumber = /^\d{10}$/;
            $scope.emailId = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;
            $scope.addNew = function() {
                $scope.aPersonDetails.push($scope.oPersonDetails);
                console.log("Inside the add new function");
                $http.post('/api/students', $scope.oPersonDetails).success(function(data) {
                //$scope.oPersonDetails = {}; // clear the form so our user is ready to enter another
                console.log("After the post method");
                 console.log(data);
                $scope.aPersonDetails = data;
               
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
            };

            $scope.edit = function(index) {
                console.log(index);

                // $scope.index = index;

                // $scope.oPersonDetails['fname'] = $scope.aPersonDetails[index]['fname'];

                // $scope.oPersonDetails['lname'] = $scope.aPersonDetails[index]['lname'];

                // $scope.oPersonDetails['email'] = $scope.aPersonDetails[index]['email'];

                // $scope.oPersonDetails['phone'] = $scope.aPersonDetails[index]['phone'];
               
                $scope.oPersonDetails = angular.copy($scope.aPersonDetails[index]);
               
                $scope.oPersonDetails['index'] = index;

            
        };

            $scope.updateRow = function(index) {
                console.log("Index value:" + index);
                // console.log("object index after update:" + $scope.oPersonDetails['index'])
                // $scope.aPersonDetails[index] = $scope.oPersonDetails;
                console.log($scope.oPersonDetails);
                $http.post('/api/update', $scope.oPersonDetails).success(function(data) {
                console.log(data);
                $scope.aPersonDetails[index]  = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
            };

        });