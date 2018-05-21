
	var word = document.getElementById('changeWord')
	var killerNum = document.getElementById('killerNum')
	var civilianNum = document.getElementById('civilianNum')
	var killer = document.getElementById('killer')
	var civilian = document.getElementById('civilian')
	var parent = document.getElementById('playerNum')
    var killerCln = [killer.cloneNode(true),
                     killer.cloneNode(true),
                     killer.cloneNode(true),
                     killer.cloneNode(true),
                     killer.cloneNode(true),
                     killer.cloneNode(true)]
    var civilianCln = [civilian.cloneNode(true),
    				   civilian.cloneNode(true),
    				   civilian.cloneNode(true),
    				   civilian.cloneNode(true),
    				   civilian.cloneNode(true),
    				   civilian.cloneNode(true),
    				   civilian.cloneNode(true),
    				   civilian.cloneNode(true),
    				   civilian.cloneNode(true),
    				   civilian.cloneNode(true),
    				   civilian.cloneNode(true),
    				   civilian.cloneNode(true)]
function changeword(){
	killerNum.innerHTML = Math.floor(word.value/3);
	civilianNum.innerHTML = Math.ceil(word.value * 2 / 3);

	for (var i = 0; i < killerNum.innerHTML; ++i) {
 		parent.appendChild(killerCln[i]);
	}
	for (var i = 0; i < civilianNum.innerHTML; ++i) {
 		parent.appendChild(civilianCln[i]);
	}
	console.log();
	
}
