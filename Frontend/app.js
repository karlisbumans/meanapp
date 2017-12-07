var MeanApp = angular.module('MeanApp',['ngRoute','ngResource']);

$rootScope.user={id: '', name: '', surname: ''};
user = sessionStorage.getItem('loggedInUser'); 

if(user!== undefined && user !== null){
$rootScope.user.id = user.id;
$rootScope.user.name = user.name;
$rootScope.user.surname = user.surname;
}
