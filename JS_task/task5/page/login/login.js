let loginBtn = $('#loginBtn');



// loginBtn.on('click', function () {
//     userInput = $('#userInput').val();
//     pwInput = $('#pwInput').val();
//     let xml;
//     // console.log(userInput);
//     // console.log(pwInput);
//     xml = new XMLHttpRequest();
//     xml.onreadystatechange = function () {
//         if (xml.readyState==4 && xml.status==200){
//             let loginData = JSON.parse(xml.responseText);
//             console.log(loginData.message);
//             console.log(xml.responseText.message);
//         }
//     };
//     xml.open('POST','http://localhost:12/carrots-admin-ajax/a/login?'+"name="+userInput+"&pwd="+pwInput,true);
//     xml.send();
// });

pwdFalse = $('<div></div>')
    .text('密码错误')
    .addClass('redWord');
loginBtn.on('click',function () {
    userInput = $('#userInput').val();
    pwInput = $('#pwInput').val();
    $.post('http://localhost:12/carrots-admin-ajax/a/login',
    {
        name:userInput,
        pwd:pwInput
    },
    function(data){
        let loginData = JSON.parse(data);
        console.log(loginData);
        if  (loginData.message == 'success'){
            alert('登陆成功')
        }
        else if  (loginData.message == '密码错误'){
            loginBtn.before(pwdFalse);
        }
        else if (loginData.message == '用户不存在'){
            pwdFalse.text('用户不存在');
            loginBtn.before(pwdFalse);
        }
    });

});


