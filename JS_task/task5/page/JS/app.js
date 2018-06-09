var app = angular.module('app',['ui.router','ngMessages']);

app.config(function ($stateProvider ) {
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
    .state('backGround.dashBoard',{
        url:'/dashBoard',
        templateUrl:'dashBoard.html'
    })
    .state('backGround.artList',{
        url:'/artList',
        templateUrl:'artList.html',
        controller:'artList'
    })
});

app.run(function($state){
    $state.go('login')
});
app.controller('mainController',function () {

});

