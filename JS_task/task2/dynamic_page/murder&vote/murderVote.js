let playerTotalNum = JSON.parse(sessionStorage.getItem('playerNum')),
    main = $('#main'),
    confirmBtn = $('#confirm'),
    closePage = $('#closePage'),
    eyesOrVote =$('#eyesOrVote'),
    title = $('#title'),
    selectSb = $('#selectSb'),
    playerStatus = [],
    arrOfkilled = [],
    selected = 0,
    index,
    murderOrVote = sessionStorage.getItem('murderOrVote'),
    statusAfMurOrVo = JSON.parse(sessionStorage.getItem('statusAfMurOrVo'));
// let oriPlayerTotalNum = sessionStorage.getItem('playerNum');
// let playerTotalNum = oriPlayerTotalNum.split(',');
// console.log(playerTotalNum);//使用split将字符串分割为数组

for (i = 0 ; i < playerTotalNum.length ; i++) {
let playerId = $('<div></div>')
    .text(playerTotalNum[i])
    .addClass('player_box')
    ;//创建大格子，依附内容，依附样式
let knife = $('<div></div>')
    .addClass('knife')
    ;//创建刀子，依附样式
let playerNum = $('<div></div>')
    .text(i+1 + "号")
    .addClass('player_num')
    ;//创建小格子，序号，依附样式
playerId.append(knife)
    ;//将刀子依附到大格子上
playerId.append(playerNum)
    ;//将小格子依附到大格子上
main.append(playerId)
    ;//将大格子依附到格子容器中
playerStatus[i] = {
    role: playerTotalNum[i],
    status : 'live',
    num : i+1 }//创建玩家状态.

    }//动态的将获取到的数组变成页面上的玩家数量



let playerId = $('.player_box')
    ;//获取所有的大格子
let playerNum = $('.player_num')
    ;//获取所有的序号
let knife = $('.knife')
    ;//获取所有的刀子
knife.hide()
    ;//隐藏所有的刀子
playerId.click(function () {
    $(this).find(knife).show()
    ;//show当前大格子内部的刀子
    $(this).siblings().find(knife).hide()
    ;//隐藏所有兄弟格子内部的刀子
    index = playerId.index(this);//存储当前点击的下标
    selected = 1;//被选中的角色加个标记
});//在main之下获取所有的大格子，并绑定大格子事件






if (murderOrVote == 'murder'){
    // $(playerId[indexAfvote]).css('background-color','#83b09a');
    // $(playerNum[indexAfvote]).css('width','78px'); //有个问题为什么还要加一个$()进去。
    if  (JSON.parse(sessionStorage.getItem('playerStatusAfCli'))){
    playerStatus = JSON.parse(sessionStorage.getItem('playerStatusAfCli'))
    ;
    arrOfkilled = JSON.parse(sessionStorage.getItem('afPush'))
    ;
    }
    for (i = 0 ; i < arrOfkilled.length ; i++){
        $(playerId[arrOfkilled[i]]).css('background-color','#83b09a')
        ;
        $(playerNum[arrOfkilled[i]]).css('width','78px')
        ;
    }
confirmBtn.click(function(){
    if (playerStatus[index].status == 'killed'){
            confirm('不能鞭尸')
        }
    else if (selected === 1){
            let kill = confirm("确定要杀掉他吗？");
            if (kill === true){
                playerStatus[index].status = 'killed';
                window.location.href = "../firstDay/firstDay.html";
                arrOfkilled.push(index);
            }
        }
    else if (selected == 0) {console.log(playerStatus)
            //不杀人也没警报
        }
    sessionStorage.setItem('playerStatusAfCli',JSON.stringify(playerStatus));
    sessionStorage.setItem('afPush',JSON.stringify(arrOfkilled));
}
);
}



if(murderOrVote == 'vote'){
    eyesOrVote.text('发言结束，请大家投票')
    ;
    title.text('投票')
    ;
    selectSb.text('点击得票数最多的人的头像')
    ;//修改样式
    playerStatus = JSON.parse(sessionStorage.getItem('playerStatusAfCli'))
    ;
    arrOfkilled = JSON.parse(sessionStorage.getItem('afPush'))
    ;
    for (i = 0 ; i < arrOfkilled.length ; i++){
        $(playerId[arrOfkilled[i]]).css('background-color','#83b09a');
        $(playerNum[arrOfkilled[i]]).css('width','78px');
    }
    // $(playerId[indexAfMurder]).css('background-color','#83b09a');
    // $(playerNum[indexAfMurder]).css('width','78px'); //有个问题为什么还要加一个$()进去。
    confirmBtn.click(function(){
        if (playerStatus[index].status == 'killed'){
                confirm('不能鞭尸')
            }
        else if (selected === 1){
            playerStatus[index].status = 'killed';
            window.location.href = "../firstDay/firstDay.html";
            arrOfkilled.push(index);
        }
        else if (selected == 0) {
            confirm('caiji');
        }
        // sessionStorage.setItem('indexAfvote',index);
        sessionStorage.setItem('playerStatusAfCli',JSON.stringify(playerStatus));
        sessionStorage.setItem('afPush',JSON.stringify(arrOfkilled));
}
);
}



closePage.click(function(){
    window.location.href = "../playerdistribution/playerDis.html"
});