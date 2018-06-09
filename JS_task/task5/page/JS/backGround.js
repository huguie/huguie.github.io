app.controller('backController',function ($state) {
    $state.go('backGround.dashBoard');
});



app.controller('artList',function ($http,$scope) {
    $http({
        method:'GET',
        url:'http://localhost:12/carrots-admin-ajax/a/article/search'
    }).then(function (response) {
        console.log(response.data.data.articleList);
        $scope.lists = response.data.data.articleList;
        // console.log($scope.lists[0].type)
    })
});


