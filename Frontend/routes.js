/**
 * Created by KarlisBumans on 02.05.2016.
 */
MeanApp.config( function($routeProvider) {
    
        $routeProvider
    
            .when('/',{
                templateUrl: 'pages/home.html',
                controller: 'HomeController'
            })
    
            .when('/login',{
                templateUrl: 'pages/login.html',
                controller: 'UserController'
            })

            .when('/register',{
                templateUrl: 'pages/register.html',
                controller: 'UserController'
            })
    
    
        
         
    });