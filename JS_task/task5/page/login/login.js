let userInput = $('#userInput'),
    pwInput = $('#pwInput'),
    loginBtn = $('#loginBtn');


loginBtn.on('click',function () {
    console.log(pwInput.val());
    console.log(userInput.val());
});

