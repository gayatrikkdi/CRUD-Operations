var app = angular.module("myapp", []);
        app.controller("myCntrl", function($scope,$http) {
            $scope.oPersonDetails = {};          // personal details 
            $scope.aPersonDetails = [];          // personal details response
            $scope.phoneNumber = /^\d{10}$/;     // pattern for phone no validation
            $scope.emailId = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/; // pattern for Email id validation 
            
            /*
            To add new person

            */
            $scope.addNew = function() {        //Add the values in table
                $scope.aPersonDetails.push($scope.oPersonDetails);
                $http.post('/api/create', $scope.oPersonDetails)
                .then(function(docs) {
                        console.log(docs);
                
            })
            };

           var onload=function()                 //Read all the values in the table
            {
                $http.post('/api/getAllData').then(function(data) {
                    console.log(data);
                     $scope.aPersonDetails=data.data;
                });
            }
            onload();

            $scope.edit = function(index) {      //function for edit the table row
                console.log(index);
                $scope.oPersonDetails = angular.copy($scope.aPersonDetails[index]);
                $scope.oPersonDetails['index'] = index;

            };

            $scope.removeRow=function(id)       // function for delete the table row
            {
                console.log("id:"+ id);
                if(confirm("Are you sure want to delete?"))
                $http.get('/api/delete/'+ id).then(function(data){
                     console.log('Employee Deleted Successfully');
                 });
                 
            };
            $scope.updateRow = function(index) {   //function for update the table row
                console.log("Index value:" + index);
                $scope.aPersonDetails[index] = $scope.oPersonDetails;
                console.log($scope.oPersonDetails);
                $http.post('/api/update', $scope.oPersonDetails).then(function(data) {
                    console.log(data);
                  });
            };

    });