let killerNum = sessionStorage.getItem('killerNum');// 获
let civilianNum = sessionStorage.getItem('civilianNum');
let idButton = document.getElementById('idButton');
let hiddenButton = document.getElementById('hiddenButton');
let hiddenId = document.getElementById('hiddenId');
let identity = document.getElementById('identity');
let headerNum = document.getElementById('headerNum');
let kilOrCil = document.getElementById('kilOrCil');
let player = [];
let num1 = 1;
let num2 = 1;

console.log(killerNum);

for (let i = 0; i<killerNum; i++){
    player.push('杀手');}//获取动态杀手数量

for (let i = 0; i<civilianNum; i++){
    player.push('平民');}//获取动态动态平民数量

let w = player.length;
let x,y;
for( ; w ; ){
    y = Math.floor(Math.random()*(w--));
    x = player[w];
    player[w] = player[y];
    player[y] = x;}//洗牌算法，将数组打乱


idButton.onclick = function (){
    kilOrCil.innerHTML = player[num1-1];
    if (num1 < player.length) {
        hiddenId.style.zIndex = 2;
        headerNum.style.zIndex = 3;
        hiddenButton.innerHTML = '隐藏并传递给' + ++num1 + '号';
          }
    else if (num1 = player.length) {
        hiddenId.style.zIndex = 2;
        hiddenButton.innerHTML = '法官';
        headerNum.innerHTML;
    }
    console.log(num1);
    console.log(player);
};

hiddenButton.onclick = function(){
    if (num2 < player.length) {
        hiddenId.style.zIndex = 1;
        identity.style.zIndex = 2;
        headerNum.style.zIndex = 3;
        idButton.innerHTML = '查看' + ++num2 + '号身份';
        headerNum.innerHTML++;
    }
};


