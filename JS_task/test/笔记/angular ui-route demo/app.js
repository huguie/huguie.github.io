var app = angular.module('app',['ui.router']);

    app.config(function ($stateProvider) {
        $stateProvider
            .state('c1',{
                url:'/c1',
                template:'<h1 id="h1">进入C1状态</h1>',
                controller:'C1Controller'
            })
            .state('c2',{
                url:'/c2',
                templateUrl:'c2.html',
                controller:'C2Controller'
            })
            .state('c3',{
                url:'/c3',
                templateProvider:function () {
                    return '<h1>进入C3状态</h1>'
                        + '<p>{{t}}</p>';
                },
                controller:function ($scope) {
                    $scope.t = 'C3Controller is on!'
                }
            })
    });

    app.run(function ($state) {
        $state.go('c1');
    });


app.controller('mainController',function () {
    // return alert('hello!')

});

