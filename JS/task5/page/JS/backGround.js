app.controller('backController', function ($http,$scope,$state,sidebar,sidebar1) {
    $scope.quit =function(){
        $http({
            method: "POST",
            url: "/carrots-admin-ajax/a/logout"
        }).then(function (respond) {
            if(respond.data.code == 0) {
                sessionStorage.clear();
                $state.go("login");
            } else {
                alert(respond.data.message);
            }
        })
    };
    $scope.sidebar = sidebar;
    $scope.sidebar1 = sidebar1;

    $scope.first = sessionStorage.getItem("first");
    $scope.second = sessionStorage.getItem("second");

    $scope.toggleList = function (x) {
        $scope.first = ($scope.first == x) ? undefined : x;  // 点击只显示当前项，再次点击隐藏
        console.log(x)
    };
    $scope.currentList = function (y, index) {
        $scope.second = y;
        // 把当前点击的菜单信息存入sessionStorage中
        sessionStorage.setItem("first", index);
        sessionStorage.setItem("second", y);
        console.log(y);
        console.log(index)
    };
    // $scope.state = $state;
    // $scope.openList = function(x){ //点击父系侧边栏时的点击事件
    //     console.log(x); //查看当前点击的选项
    //     $scope.sidebar1.forEach(function (item){ //遍历侧边栏
    //         if (item.firstList === x.firstList){ //如何当前点击的父系选项是现在
    //             x.isShow = !x.isShow;
    //             console.log(item)
    //         } else {
    //             item.isShow = false;
    //         }
    //     })
    // };
    //
    // console.log($scope.sidebar1);
    // angular.forEach($scope.sidebar1,function(item){
    //     item.secondList.some(function(items){
    //         console.log(items.url);
    //         if($state.includes(items.urls)){
    //             item.isShow = true;
    //             return true;
    //             console.log("true");
    //         } else {
    //             item.isShow = false;
    //             return false;
    //             console.log("false");
    //         }
    //     })
    // })

});//welcome paging
