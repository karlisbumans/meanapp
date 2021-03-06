MeanApp.service('HttpService',['$resource','$http', '$location',function($resource,$http, $location) {

    this.currentUserId=null;

    this.createUser = function(user){
        console.log("Function: UserService.createUser");
            $http.post('http://localhost:8080/api/user/adduser', user).then(function successCallback(response) {
            console.log("Lietotājs veiksmīgi pievienots");
            $location.path("/login");
  
          }, function errorCallback(response) {
              
        });
    };

    this.logIn = function(user){
        
         $http.get('http://localhost:8080/api/user/findUserByUsername/'+ user.username).then(function successCallback(response) {
         this.userlist = response;
         this.currentUserUsername = null;
         this.currentUserName = null;
         this.currentUserSurname = null;
 
            if (this.userlist.data.length>0 ) {
                 realPassword = userlist.data[0].password;
 
                if (realPassword == user.password) {
                     currentUserUsername = user.username;
                     currentUserName = user.name;
                     currentUserSurname = user.surname;
                     sessionStorage.removeItem('loggedInUser');
                     sessionStorage.setItem('loggedInUser',  JSON.stringify(response.data[0]));
                     $location.path("/");
                 
                 }
                 else {
                     alert("Password is not correct, try again!");
                     $location.path("/login");
                 }
                }
                else {
                 alert("Username does not exist!");
                 $location.path("/login");
                 }
 
            }, function errorCallback(response) {
                $location.path("/login");
        });
    };
}]);

MeanApp.service('LoginService',['$resource','$http', '$location',function($resource,$http, $location) {
    this.isUserLoggedIn = function(){
        console.log('LoginService function: isUserLoggedIn');
        
        var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
        //console.log(user);
        if(user!==null){
            this.currentUserID = user._id;
                
            return true;
        } else {
        console.log('false');
            return false;   
             
        }
    };
      
}]);