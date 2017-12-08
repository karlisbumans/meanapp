var MeanApp = angular.module('MeanApp',['ngRoute','ngResource']);

MeanApp.controller('MeanAppCtrl',['$scope','$rootScope',function($scope, $rootScope){
    
    $rootScope.user={id: '', name: '', surname: ''};
    
    console.log('This is main controller!', $rootScope.user);
    
    var user = sessionStorage.getItem('loggedInUser');
    console.log('MainController variable User: ', user);
    if(user!== undefined && user !== null){
        $rootScope.user.id = user.id;
        $rootScope.user.name = user.name;
        $rootScope.user.surname = user.surname;
    }
    
    
}]);
    
