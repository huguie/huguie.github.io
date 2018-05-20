
	var word = document.getElementById('changeWord')
	var killerNum = document.getElementById('killerNum')
	var civilianNum = document.getElementById('civilianNum')

function changeword(){
	if ( word.value < 18) {
	killerNum.innerHTML = Math.floor(word.value/3);
	civilianNum.innerHTML = Math.ceil(word.value * 2 / 3);}
	else{
		alert('laji');
	}
	console.log();
}
