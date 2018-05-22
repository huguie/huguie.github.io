
	var word = document.getElementById('changeWord')//输入栏value
	var killerNum = document.getElementById('killerNum')//杀手人数
	var civilianNum = document.getElementById('civilianNum')//平民人数
    var x = document.getElementById("myRange")//获取滑条


function inputWord(){
	if ( word.value <= 18 && word.value >= 4) {
    killerNum.innerHTML = Math.floor(word.value/3);
    civilianNum.innerHTML = Math.ceil(word.value * 2 / 3);}
	else{
		alert("请输入4-18以内的数字");}
	console.log();
}//
function rangeWord(){
	word.value = x.value;//输入栏value等于滑条的value
    killerNum.innerHTML = Math.floor(word.value/3);       
    civilianNum.innerHTML = Math.ceil(word.value * 2 / 3);
    console.log(word.value);
    sessionStorage.setItem("wordStorage",word.value);}

function plus(){
    x.value++;
    word.value = x.value;
    killerNum.innerHTML = Math.floor(word.value/3);
    civilianNum.innerHTML = Math.ceil(word.value * 2 / 3);
    console.log();
    }
function less(){
    x.value--;
    word.value = x.value;
    killerNum.innerHTML = Math.floor(word.value/3);
    civilianNum.innerHTML = Math.ceil(word.value * 2 / 3);
    console.log();
    }
document.getElementById("viewId").onclick = function(){
    window.location.href="../viewId/view.html";
}

