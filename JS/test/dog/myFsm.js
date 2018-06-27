let result = $("#result");
let bbb = {
    state:"single",
    flower: function(){
        switch (bbb.state) {
            case 'single':
                result.html('初恋');
                alert('第一次见面就送花？');
                bbb.state = 'first';
                break;
            case 'first':
                result.html('热恋');
                alert('gf:又是送花，送点实际的呗');
                bbb.state = 'hot'
                break;
            case 'hot':
                result.html('结婚');
                alert('gf:"死狗，又送花"');
                bbb.state = 'married';
                break;
        }
    },
    ring: function () {
        switch (bbb.state){
            case 'single':
                result.html('热恋RING');
                alert('吼吼！！好大的钻戒');
                bbb.state = 'first';
                break;
            case 'first':
                result.html('结婚RING');
                alert('嗯嗯!! 这个戒指也挺好看');
                bbb.state = 'marraied';
                break;
        }
    }
};

$('#send1').click(function(){
    bbb.flower();
});
$('#send2').click(function(){
    bbb.ring();
});
$('#send3').click(function(){
    bbb.fight();
});
$('#send4').click(function(){
    bbb.breakup();
});