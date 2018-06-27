
let loginBtn = $('#loginBtn');



loginBtn.on('click', function () {
    userInput = $('#userInput').val();
    pwInput = $('#pwInput').val();
    totalValue = 'name=' + userInput + '&pwd=' + pwInput;


    cuihua = {name:"cuihua",age:18};//声明一个对象
    bbcuihua = JSON.stringify(cuihua);//将一个JS对象转换为JSON字符串

    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (xml.readyState==4 && xml.status==200){
            // let loginData = JSON.parse(xml.responseText);
            console.log(xml.responseText);
        }
    };
    // xml.open('POST','http://localhost:12/carrots-admin-ajax/a/login',true);
    // xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    // xml.send(totalValue);//使用POST设置请求头内容类型，传输数据//使用原生FORM内容类型

    // xml.open('POST','http://localhost:12/carrots-admin-ajax/a/login?' + 'name=admin&pwd=123456' ,true);
    // xml.send();//使用post在URL末端传输数据//不符合post的语义规范
    //
    xml.open('GET','http://localhost:12/carrots-admin-ajax/a/login?' + 'name=admin & pwd=123456' ,true);
    xml.send();//使用GET传输数据


    // xml.open('POST','http://localhost:12/carrots-admin-ajax/a/login',true);
    // xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    // xml.send(bbcuihua);//使用原生FORM内容类型传输数据

    // xml.open('POST','http://localhost:12/carrots-admin-ajax/a/login',true);
    // xml.setRequestHeader("Content-type","application/json");
    // xml.send(bbcuihua);//使用application/json内容类型传输数据
});





//
// pwdFalse = $('<div></div>')
//     .text('密码错误')
//     .addClass('redWord');
// loginBtn.on('click',function () {
//     userInput = $('#userInput').val();
//     pwInput = $('#pwInput').val();
//     $.post('http://localhost:12/carrots-admin-ajax/a/login',
//         {
//             name:userInput,
//             pwd:pwInput
//         },
//         function(data){
//             let loginData = JSON.parse(data);
//             console.log(loginData);
//             if  (loginData.message == 'success'){
//                 alert('登陆成功');
//                 window.location.href='../backGround/backGround.html'
//             }
//             else if  (loginData.message == '密码错误'){
//                 loginBtn.before(pwdFalse);
//             }
//             else if (loginData.message == '用户不存在'){
//                 pwdFalse.text('用户不存在');
//                 loginBtn.before(pwdFalse);
//             }
//         });
// });



