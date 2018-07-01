app.controller('articleDetail', function ($scope, $state, $http, $stateParams, Type, Status, Line, Industry) {

    $scope.Type = Type;
    $scope.Status = Status;
    $scope.Line = Line;
    $scope.Industry = Industry;
    // $scope.params = $stateParams;

    $scope.publishArt = function (btnStatus) {
        $http({
            method: "post",
            url: '/carrots-admin-ajax/a/u/article/',
            params: {
                title: $scope.newTitle,
                type: $scope.newType,
                industry: $scope.inIndustry,
                status: btnStatus,
                img: $scope.src,
                content: $scope.content,
                url: $scope.newLink,
            }
        }).then(function callback(response) {
            console.log(response);
            console.log($scope.src);
        });
        $state.go('backGround.artList');
    };


    $scope.addOrEdit = '新增';
    console.log($stateParams.id);
    if ($stateParams.id) {
        $scope.addOrEdit = '编辑';
        $http({
            method: "get",
            url: '/carrots-admin-ajax/a/article/' + $stateParams.id,
            responseType: 'json',
        }).then(function callback(response) {
            $scope.artDetail = response.data.data.article;
            console.log($scope.artDetail);
            $scope.newTitle = $scope.artDetail.title;
            $scope.newType = '' + $scope.artDetail.type;
            $scope.newIndustry = '' + $scope.artDetail.industry;
            $scope.content = $scope.artDetail.content;
            $scope.newLink = $scope.artDetail.url;
            $scope.src = $scope.artDetail.img;
            $scope.nowCreate = $scope.artDetail.createAt;
            console.log($scope.newIndustry);
        });

        $scope.publishArt = function (btnStatus) {
            $http({
                method: "put",
                url: '/carrots-admin-ajax/a/u/article/' + $stateParams.id,
                responseType: 'json',
                params: {
                    title: $scope.newTitle,
                    type: $scope.newType,
                    industry: $scope.newIndustry,
                    status: btnStatus,
                    img: $scope.src,
                    content: $scope.content,
                    url: $scope.newLink,
                    createAt: $scope.nowCreate,
                    updateAt: Date.parse(new Date()),
                    // industry:industry,
                }
            }).then(function callback(response) {
                $scope.artDetail = response.data.data;
                console.log(response.data.code);
                console.log($scope.artDetail);
                if (response.data.code === 0) {
                    alert('编辑成功');
                    $state.go('backGround.artList', {
                        reload: true
                    });
                }
            });
        };
    }//编辑article内容

    $scope.pubOrDraButton = [
        {btnStatus: 2, label: '立即上线'},
        {btnStatus: 1, label: '存为草稿'}
    ];

    $scope.cancelAdd = function () {
        $state.go('backGround.artList',
            {page: $scope.currentPage},
            {reload: true}
        );
    };


    // $scope.fileReader = new FileReader();
    // $scope.fileChanged = function (response) {
    //     $scope.$apply(function () {
    //         console.log(response.files);
    //         $scope.filesAll = response.files;
    //         $scope.files = response.files[0];
    //         $scope.fileName = $scope.files.name;
    //         $scope.fileSize = $scope.files.size / 1024 / 1024;
    //     })
    // };
    // $scope.uploadArt = function () {
    //     var formData = new FormData();
    //
    //     $scope.fileReader.readAsDataURL($scope.files);
    //
    //     formData.append('file', $scope.files);
    //     console.log($scope.files.size);
    //     if ($scope.files.size <= 5242880) {
    //         $http({
    //             method: 'POST',
    //             url: '/carrots-admin-ajax/a/u/img/task',
    //             data: formData,
    //             headers: {'content-Type': undefined},
    //             uploadEventHandlers: {
    //                 progress: function (woqunima) {
    //                     console.log(woqunima);
    //                     $scope.progress = (woqunima.loaded / woqunima.total) * 100;//当完全加载成功后，loaded与total会相等，结果变成1
    //                 }
    //             }
    //         }).then(function (woqunima) {
    //             console.log(woqunima);
    //             $scope.src = woqunima.data.data.url;
    //             $scope.uploadStatus = woqunima.data.message;
    //             console.log($scope.uploadStatus);
    //         });
    //     }
    //     else {
    //         alert('文件大小超过5M');
    //     }
    // };
    // $scope.delete = function () {
    //     $('#img').attr('src', '');
    //     $scope.src = ''; //src删除;
    //     $scope.choiceFile.value = '';
    //     $scope.filesAll = '';
    //     $scope.files = "";
    //     $scope.fileName = "";
    //     $scope.files = "";
    //     $scope.fileSize = "";
    //     $scope.progress = 0;
    //     $scope.uploadStatus = false;
    // };
    // console.log($scope.fileSize);
    // xml = new XMLHttpRequest();
    // xml.onreadystatechange = function () {
    //     if (xml.readyState==4 && xml.status==200){
    //         $scope.$apply(function () {
    //             var imgPost = JSON.parse(xml.responseText);
    //             $scope.src = imgPost.data.url;
    //             console.log($scope.src);
    //         })
    //     }
    // };
    // xml.open('POST','/carrots-admin-ajax/a/u/img/task');
    // xml.send(formData);//原生上传图片方法


});