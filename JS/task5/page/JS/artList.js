app.controller('artList', function ($http, $scope, $state, $stateParams, $filter, Type, Status, Industry, Line) {
    $scope.Type = Type;
    $scope.Status = Status;
    $scope.Line = Line;
    $scope.params = $stateParams;
    $scope.selectedType = $scope.params.type;  // 刷新后能保存类型状态
    $scope.selectedStatus = $scope.params.status;

    $scope.createAt = Number($scope.params.startAt)  || undefined;
    $scope.endAt = Number($scope.params.endAt)  || undefined;


    $http({
        method: 'get',
        url: '/carrots-admin-ajax/a/article/search',
        params: $scope.params,
        responseType: 'json',
    }).then(function calBack(response) {
        console.log(response.data);
        // console.log($scope.params);
        console.log(response.data.data.size);
        $scope.pageSize = response.data.data.size;
        $scope.lists = response.data.data.articleList;
        $scope.totalItems = response.data.data.total;
        $scope.currentPage = $scope.params.page;
    });

    $scope.artPagination = function () {
        $state.go('backGround.artList',
            {page: $scope.currentPage},
            {reload: true}
        );
    };
    $scope.pageConfirm = function () {
        $state.go('backGround.artList',
            {
                page: $scope.pageGo,
                size: $scope.pageSize
            },
            {reload: true}
        );
    };

    $scope.popup1 = {
        opened: false
    };
    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };
    $scope.popup2 = {
        opened: false
    };
    $scope.open2 = function () {
        $scope.popup2.opened = true;
        $scope.endAt = undefined;//初始化结束时间，将86399999减去。
    };//日历组件


    $scope.selectedSearch = function () {
            if (typeof($scope.createAt) === 'object') {
                $scope.createAt = Date.parse($scope.createAt);
            }
            if (typeof ($scope.endAt) === 'object') {
                $scope.endAt = Date.parse($scope.endAt) + 86399999;
            }
        $state.go('backGround.artList',
            {
                startAt: $scope.createAt,
                endAt: $scope.endAt,
                type: $scope.selectedType,
                status: $scope.selectedStatus,
            },
            {reload: true}
        );
        console.log(typeof($scope.createAt));
    };


    $scope.selectedClear = function () {
        $state.go('backGround.artList',
            {
                startAt: undefined,
                endAt: undefined,
                type: undefined,
                status: undefined,
                page: 1,
            },
            {reload: true}
        );
        console.log($scope.params);
    };

    $scope.addArt = function () {
        $state.go('backGround.articleDetail');
    };

    $scope.editArt = function () {
        $state.go('backGround.articleDetail');
    };

    $scope.draOrPub = function (id, status) {
        bootbox.dialog({
            title: '<h4>操作提示</h4>',
            message: '        <div class="text-center">\n' +
            '            <p>' + $scope.Line[status] + '后该图片将在轮播banner中展示。</p>\n' +
            '            <strong>是否执行' + $scope.Line[status] + '操作？</strong>\n' +
            '        </div>',
            buttons: {
                cancel: {
                    label: '取消',
                    className: 'btn-warning',
                },
                ok: {
                    label: '确定',
                    className: 'btn-info',
                    callback: function () {
                        if (status == 1) {
                            status = 2;
                            $http({
                                method: 'put',
                                url: '/carrots-admin-ajax/a/u/article/status',
                                params: {
                                    id: id,
                                    status: status,
                                }
                            }).then(function calback2(response) {
                                console.log(response);
                                $state.go('backGround.artList',
                                    {page: $scope.currentPage},
                                    {reload: true});
                            });
                        }
                        else if (status == 2) {
                            status = 1;
                            $http({
                                method: 'put',
                                url: '/carrots-admin-ajax/a/u/article/status',
                                params: {
                                    id: id,
                                    status: status,
                                }
                            }).then(function calback2(response) {
                                console.log(response);
                                $state.go('backGround.artList',
                                    {page: $scope.currentPage},
                                    {reload: true});
                            });
                        }

                    },
                }
            }
        })
    };
    $scope.editArt = function (id) {
        $scope.editId = id;
        $state.go('backGround.articleDetail',
            {id: id},
            {reload: true}
        );
    };
    $scope.deleteArt = function (id) {
        bootbox.confirm({
            title: "操作",
            message: "是否确认删除",
            buttons: {
                cancel: {
                    label: '取消',
                    className: 'btn-warning',
                },
                confirm: {
                    label: '确认',
                    className: 'btn-info',
                }
            },
            callback: function () {
                $http({
                    method: 'delete',
                    url: "/carrots-admin-ajax/a/u/article/" + id,
                }).then(function calback2(response) {
                    console.log(response);
                });
                $state.go('backGround.artList',
                    {page: $scope.currentPage},
                    {reload: true}
                );
            }
        });
    }
});