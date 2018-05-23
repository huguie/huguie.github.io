let word = document.getElementById('changeWord');//输入栏value
let killerNum = document.getElementById('killerNum');//杀手人数
let civilianNum = document.getElementById('civilianNum');//平民人数
let  x = document.getElementById("myRange");//获取滑条
let less = document.getElementById('less');
let plus = document.getElementById('plus');


function inputWord(){
	if ( word.value <= 18 && word.value >= 4) {}
	else{
		alert("请输入4-18以内的数字");}
	x.value = word.value;
	console.log(word.value);
}//获取输入栏value,并超限报警

function rangeWord(){
	word.value = x.value;//输入栏value等于滑条的value
    killerNum.innerHTML = Math.floor(word.value/3);
    civilianNum.innerHTML = Math.ceil(word.value * 2 / 3);
    sessionStorage.setItem("wordStorage",word.value);
    sessionStorage.setItem('killerNum',killerNum.innerHTML);
    sessionStorage.setItem('civilianNum',civilianNum.innerHTML);
    console.log(word.value);
}//获取滑条value，并关联输入栏value。

 plus.onclick = function (){
    x.value++;
    word.value = x.value;
    console.log();
    };//按钮事件，点击一次，滑条value增加，关联输入栏value

 less.onclick = function (){
    x.value--;
    word.value = x.value;
    console.log();
    };//按钮事件，点击一次，滑条value减少，关联输入栏value

document.getElementById("viewId").onclick = function(){
    window.location.href="../viewId/view.html";
};//点击跳转事件

