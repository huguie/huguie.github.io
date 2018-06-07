var app = angular.module('app',['ui.router']);

app.controller('mainController',function () {
    
});

app.config(function ($stateProvider) {
    $stateProvider
    .state('login',{
        url:'/login',
        templateUrl:'login.html',
        controller:'loginController'
    })
    .state('backGround',{
        url:'/backGround',
        templateUrl:'backGround.html',
        controller:'backController'
    })
});

app.run(function($state){
    $state.go('login')
});
