MeanApp.controller('MainController',['$scope',function($scope){

console.log('This is main controller!');

}]);

MeanApp.controller('HomeController',['$scope', '$routeParams', '$window', '$location', '$http', function($scope, $routeParams, $window, $location, $http){

console.log('This is home controller!');

}]);

MeanApp.controller('UserController',['$scope', '$routeParams', '$window', '$location', 'HttpService', 'LoginService', '$http', function($scope, $routeParams, $window, $location, HttpService,LoginService,$http){
    console.log('This is user controller!');
    $scope.user = {};
    $scope.user._id = null;
    $scope.user.username = null;
    $scope.user.password = null;
    $scope.user.passwordRepeat = null;
    $scope.user.name = null;
    $scope.user.surname = null;
    $scope.userlist={};
    
    
    $scope.createUser = function(){
        if ($scope.user.password==$scope.user.passwordRepeat){
            HttpService.createUser($scope.user);
        }else{
            alert("Passwords does not match, try again!");
        }
    };
    
    $scope.logIn = function(){
        HttpService.logIn($scope.user);
        console.log($rootScope.user.name);
    }

   




}]);


            
        
    
  