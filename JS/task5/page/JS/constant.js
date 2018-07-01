app
.constant('Type',{
    0: '首页Banner',
    1: '找职位Banner',
    2: '找精英Banner',
    3: '行业大图'
})

.constant('Status',{
    1: '草稿',
    2: '上线'
})

.constant('Line',{
    1: '上线',
    2: '下线'
})

.constant('Industry',{
    0:'移动互联网',
    1:'电子商务',
    2:'企业服务',
    3:'O2O',
    4:'教育',
    5:'金融',
    6:'游戏'
})

.constant("sidebar",[
        {
            firstLevel: "信息管理",
            secondLevel:[
                {title: "欢迎", url: "backGround.dashBoard"},
                {title: "职位列表", url: ""}
            ]
        },
        {
            firstLevel: "Article管理",
            secondLevel:[
                {title: "Article列表", url: "backGround.artList"},
                {title: "文章管理", url: ""}
            ]
        },
        {
            firstLevel: "用户管理",
            secondLevel:[
                {title: "用户列表", url: ""}
            ]
        },
    ])

.constant("sidebar1",[
    {
        firstList:"信息管理",
        secondList:[
            {title: "公司列表", url: ".dashBoard" , urls: "*.dashBoard"},
            {title: "职位列表", url: ".dashBoard" , urls: "*.dashBoard"}
        ],
        isShow : false
    },
    {
        firstList:"Article管理",
        secondList:[
            {title: "Article列表", url: ".artList" , urls: "*.artList"},
            {title: "文章管理", url: ".artList" , urls: "*.artList"}
        ],
        isShow : false
    }
]);


// app.filter('changeIndutry', function () {
//     return function (inputData) {
//         var changed;
//         switch (inputData) {
//             case 0 :
//                 changed = '移动互联网';
//                 break;
//             case 1 :
//                 changed = '电子商务';
//                 break;
//             case 2 :
//                 changed = '企业服务';
//                 break;
//             case 3 :
//                 changed = 'O2O';
//                 break;
//             case 4 :
//                 changed = '教育';
//                 break;
//             case 5 :
//                 changed = '金融';
//                 break;
//             case 6 :
//                 changed = '游戏';
//                 break;
//         }
//         return changed;
//     }
// });


// app.filter('changeStatus', function () {
//     return function (inputData) {
//         var changed;
//         switch (inputData) {
//             case 1 :
//                 changed = '草稿';
//                 break;
//             case 2 :
//                 changed = '上线';
//                 break;
//         }
//         return changed;
//     }
// });


// app.filter('draOrpub', function () {
//     return function (inputData) {
//         var changed;
//         switch (inputData) {
//             case 1 :
//                 changed = '上线';
//                 break;
//             case 2 :
//                 changed = '下线';
//                 break;
//         }
//         return changed;
//     }
// });



// app.filter('changeType', function () {
//     return function (inputData) {
//         var changed;
//         switch (inputData) {
//             case 0 :
//                 changed = '首页banner';
//                 break;
//             case 1 :
//                 changed = '找职位banner';
//                 break;
//             case 2 :
//                 changed = '找精英banner';
//                 break;
//             case 3 :
//                 changed = '行业大图';
//                 break;
//         }
//         return changed;
//     }
// });
