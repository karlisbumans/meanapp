MeanApp.controller('MainController',['$scope',function($scope){

console.log('This is main controller!');

}]);

MeanApp.controller('HomeController',['$scope', '$routeParams', '$window', '$location', '$http', function($scope, $routeParams, $window, $location, $http){

console.log('This is home controller!');
console.log('My user:', $rootScope.user);
}]);

MeanApp.controller('UserController',['$scope', '$rootScope', '$routeParams', '$window', '$location', 'HttpService', 'LoginService', '$http', function($scope,$rootScope, $routeParams, $window, $location, HttpService,LoginService,$http){
    console.log('This is user controller!');
    console.log('My user:', $rootScope.user);
    $scope.user = {};
    $scope.user._id = null;
    $scope.user.username = null;
    $scope.user.password = null;
    $scope.user.passwordRepeat = null;
    $scope.user.name = null;
    $scope.user.surname = null;
    $scope.userlist={};
    $scope.isUserLoggedIn = LoginService.isUserLoggedIn();
    
    $scope.createUser = function(){
        if ($scope.user.password==$scope.user.passwordRepeat){
            HttpService.createUser($scope.user);
        }else{
            alert("Passwords does not match, try again!");
        }
    };
    
    $scope.logIn = function(){
        HttpService.logIn($scope.user);
       
    };

    $scope.logout = function(){
        LoginService.currentUserID = null;
        sessionStorage.removeItem('loggedInUser');
        console.log('logOut');
        $location.path("/");
    };
   




}]);


            
        
    
  