let day = $('.day'),
    dayContent = $('.dayContent'),
    murder = $('.murder'),
    daytimeMurder = $(murder[0]),
    lastWords =  $(murder[1]),
    speak =  $(murder[2]),
    vote =  $(murder[3]),
    daytimeMurderStatus = {status:'cli,ck'},
    lastWordsStatus = {status:'click'},
    speakStatus = {status:'click'},
    voteStatus = {status:'click'},
    triangle = $('.left_triangle'),
    firstTriangle = $(triangle[0]),
    secondTriangle = $(triangle[1]),
    thirdTriangle = $(triangle[2]),
    forthTriangle = $(triangle[3]),
    days = sessionStorage.getItem('afterVoteDays'),
    // afterClick = $('.greenBack'),
    playerStatusAfCli = JSON.parse(sessionStorage.getItem('playerStatusAfCli')),
    afPush = JSON.parse(sessionStorage.getItem('afPush')),
    index = sessionStorage.getItem('index'),
    murderOrVote = {step:'murder'};

for (let i = 0; i <= days-1 ; i++ ) {
    day.before(
        $('  <div class="day-1">第' + (i+1) + '天</div>\n' +
            '    <div class="dayContent-1">\n' +
            '            <div class="top_triangle-1"></div>\n' +
            '            <div class="greyline-1"></div>\n' +
            '            <div class="content-1">\n' +
            '                <div class="night-1">\n' +
            '                    <img class="moon-1" src="../../images/19.png" alt="">\n' +
            '                    <div class="greenBack-1">\n' +
            '                        <div>杀手杀人</div>\n' +
            '                        <div class="triangle_greenback-1"></div>\n' +
            '                    </div>\n' +
            '                    <div class="underMurder-1">' + index + '号被杀手杀死，真是身份是平民</div>\n' +
            '                </div>\n' +
            '                <div class="night-1">\n' +
            '                    <img class="sun-1" src="../../images/20.png" alt="">\n' +
            '                    <div class="greenBack-1">\n' +
            '                        <div>亡灵发表遗言</div>\n' +
            '                        <div class="triangle_greenback-1"></div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div class="night-1">\n' +
            '                    <div class="greenBack-1">\n' +
            '                        <div>玩家依次发言</div>\n' +
            '                        <div class="triangle_greenback-1"></div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div class="night-1">\n' +
            '                    <div class="greenBack-1">\n' +
            '                        <div>全民投票</div>\n' +
            '                        <div class="triangle_greenback-1"></div>\n' +
            '                    </div>\n' +
            '                    <div class="underMurder-1">某个傻叉被投死了。真实身份是</div>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>')
    );
    // $($('.dayContentOne')[i-1]).hide();
}


let dayContentOne = $('.dayContent-1'),
    dayOne = $('.day-1');

dayContentOne.hide();
dayOne.click(function(){
    $(this).next(dayContentOne).toggle();
});//结束页面中的页面折叠，当前页面的切换

day.text('第' + (days+1) + '天');


day.click(function(){
  dayContent.toggle();
});//页面折叠


daytimeMurder.click(function(){
  window.location.href="../murder&vote/murderVote.html"
    ;
  murderOrVote.step = 'murder'
    ;
  daytimeMurderStatus.status = 'afterClick'
    ;
  sessionStorage.setItem('afterDaytimeMurder',daytimeMurderStatus.status)
    ;
  sessionStorage.setItem('murderOrVote',murderOrVote.step)
    ;
});//杀手杀人

let afterDaytimeMurder = sessionStorage.getItem('afterDaytimeMurder');

if (afterDaytimeMurder == 'afterClick'){
daytimeMurder.removeClass('murder')
  ;
daytimeMurder.addClass('greenBack')
  ;
firstTriangle.removeClass('left_triangle')
  ;
daytimeMurder.after($('<div></div>').text(index + '号被杀手杀死，真是身份是平民').addClass('underMurder'))
}//存储杀人状态


console.log(lastWordsStatus.status);


lastWords.click(function(){
    lastWordsStatus.status = 'afterClick'
      ;
    confirm('请死者亮明身份并发表遗言')
      ;
    lastWords.removeClass('murder')
      ;
    lastWords.addClass('greenBack')
      ;
    secondTriangle.removeClass('left_triangle')
      ;
    sessionStorage.setItem('afterLastWords',lastWordsStatus.status)
      ;
});//修改当前状态

let afterLastWords = sessionStorage.getItem('afterLastWords');

if(afterLastWords == 'afterClick'){
    lastWords.removeClass('murder')
      ;
    lastWords.addClass('greenBack')
      ;
    secondTriangle.removeClass('left_triangle')
      ;
}//储存当前状态


speak.click(function(){
  speakStatus.status = 'afterClick'
    ;
  speak.removeClass('murder')
    ;
  speak.addClass('greenBack')
    ;
  thirdTriangle.removeClass('left_triangle')
    ;
  alert('玩家依次发言');
  sessionStorage.setItem('afterspeak',speakStatus.status)
    ;
});

let afterspeak = sessionStorage.getItem('afterspeak');

if(afterspeak == 'afterClick'){
  speakStatus.status = 'afterClick'
    ;
  speak.removeClass('murder')
    ;
  speak.addClass('greenBack')
    ;
  thirdTriangle.removeClass('left_triangle')
    ;
}//储存当前状态

vote.click(function(){
    murderOrVote.step = 'vote'
      ;
    voteStatus.status = 'afterClick'
      ;
    sessionStorage.setItem('murderOrVote',murderOrVote.step)
      ;
    sessionStorage.setItem('afterVote',voteStatus.status)
      ;
    days++
      ;
    sessionStorage.setItem('afterVoteDays',days)
      ;
    sessionStorage.removeItem('afterspeak');
      ;
    sessionStorage.removeItem('afterLastWords')
      ;
    sessionStorage.removeItem('afterDaytimeMurder')
      ;
    window.location.href="../murder&vote/murderVote.html"
      ;

});



// vote.css('background','green');
// fourthTriangle.css('border-right','15px solid green');
// vote.after($('<div></div>').text(' i号被投死了，真实身份是平民').addClass('underMurder'));

