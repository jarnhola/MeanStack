var module = angular.module('MeanStack',['ngRoute','ngResource','ngAnimate']);

module.config(function($routeProvider){
    

    $routeProvider.when('/',{
        templateUrl:'partials/login.html',
        controller:'LoginController'
    });
    
    $routeProvider.when('/user',{
        templateUrl:'partials/userdata.html',
        controller:'MessageController',
        //resolve:{loginRequired:loginRequired}
    })
    
    $routeProvider.otherwise({redirectTo: '/'});
});

function loginRequired($location, $q,LoginFactory){
    
    var deferred = $q.defer();
    console.log(LoginFactory.isAuthenticated);
    if(!LoginFactory.isAuthenticated) {
        deferred.reject()
        $location.path('/');
    } else {
        deferred.resolve()
    }

    return deferred.promise;
}

