let playerTotalNum = JSON.parse(sessionStorage.getItem('playerNum'));
let startGame = $('.yellow_button');
  console.log(playerTotalNum);
// let oriPlayerTotalNum = sessionStorage.getItem('playerNum');
// let playerTotalNum = oriPlayerTotalNum.split(',');
// console.log(playerTotalNum);



let main = $('#main');
let header = $('.header');

for (i = 0 ; i < playerTotalNum.length ; i++) {
let playerId = $('<div></div>')
    .text(playerTotalNum[i])
    .addClass('player_box');
let playerNum = $('<div></div>')
    .text(i+1)
    .addClass('player_num');
playerId.append(playerNum);
main.append(playerId)
;}

startGame.click(function(){
    window.location.href="../firstDay/firstDay.html"
});