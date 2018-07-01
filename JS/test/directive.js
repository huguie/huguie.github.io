
app.directive('upLoad',function ($http) {
    return{
        restrict: 'AE',
        scope: true,
        replace: true,
        templateUrl:'html/upLoad.html',
        link: function (scope,element,attr) {

            scope.fileReader = new FileReader();

            scope.choiceFile = document.getElementById('choice');

            scope.img = document.getElementById('img');
            scope.fileChanged = function (response) {
                scope.$apply(function () {
                    console.log(response.files);
                    scope.filesAll = response.files;
                    scope.files = response.files[0];
                    scope.fileName = scope.files.name;
                    scope.fileSize = scope.files.size / 1024 / 1024;
                })
            };

            scope.uploadArt = function () {
                var formData = new FormData();
                scope.fileReader.readAsDataURL(scope.files);
                formData.append('file', scope.files);
                console.log(scope.files.size);
                if (scope.files.size <= 5242880) {
                    $http({
                        method: 'POST',
                        url: '/carrots-admin-ajax/a/u/img/task',
                        data: formData,
                        headers: {'content-Type': undefined},
                        uploadEventHandlers: {
                            progress: function (woqunima) {
                                console.log(woqunima);
                                scope.progress = (woqunima.loaded / woqunima.total) * 100;//当完全加载成功后，loaded与total会相等，结果变成1
                            }
                        }
                    }).then(function (woqunima) {
                        console.log(woqunima);
                        scope.src = woqunima.data.data.url;
                        scope.uploadStatus = woqunima.data.message;
                        console.log(scope.uploadStatus);
                    });
                }
                else {
                    alert('文件大小超过5M');
                }
            };
            scope.delete = function () {
                // angular.ele("#img").attr("src","");
                scope.img.setAttribute("src","");
                scope.src = ''; //src删除;
                scope.choiceFile.value = '';
                scope.filesAll = '';
                scope.files = "";
                scope.fileName = "";
                scope.files = "";
                scope.fileSize = "";
                scope.progress = 0;
                scope.uploadStatus = false;
            };

        }
    }
});





