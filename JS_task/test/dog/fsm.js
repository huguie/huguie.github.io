$(document).ready(function () {
    var result=document.getElementById("result");
   var bbb = {
       state:"single",
       flower: function () {
           switch (bbb.state){
               case 'single':
                   result.innerHTML="初恋";
                   alert("送花进度太慢了");
                   bbb.state = 'first';
                   break;
               case 'first':
                   result.innerHTML="热恋";
                   alert("送花进度太慢了");
                   bbb.state = 'hot';
                   break;
               case 'hot':
                   result.innerText="结婚";
                   alert("恭喜你结婚");
                   bbb.state = 'married';
                   break;
               case 'married':
                   alert("老夫老妻还秀恩爱，真恶心");
                   break;
           }
       },
       ring: function () {
           switch (bbb.state){
               case 'single':
                   result.innerHTML="热恋";
                   alert("直接热恋了");
                   bbb.state = 'hot';
                   break;
               case 'first':
                   result.innerHTML="结婚";
                   alert("直接结婚了");
                   bbb.state = 'married';
                   break;
               case 'hot':
                   result.innerText="结婚";
                   alert("浪费了一个大钻戒");
                   bbb.state = 'married';
                   break;
               case 'married':
                   alert("夫人已经变成了指环王");
                   break;
           }
       },
       fight: function () {
           switch (bbb.state){
               case 'single':
                   alert("醒醒吧，你没有女朋友");
                   break;
               case 'first':
                   result.innerHTML="单身狗";
                   alert("好吧，你成功变成了单身狗");
                   bbb.state = 'single';
                   break;
               case 'hot':
                   result.innerText="初恋";
                   alert("你们又变回了初恋关系");
                   bbb.state = 'first';
                   break;
               case 'married':
                   result.innerText="热恋";
                   alert("你们又变回了热恋关系");
                   bbb.state = 'hot';
                   break;
           }
       },
       breakup: function () {
           switch (bbb.state){
               case 'single':
                   alert("别做梦了，你是一直单身狗");
                   break;
               case 'first':
                   result.innerHTML="单身狗";
                   alert("成功变成了一直单身狗");
                   bbb.state = 'single';
                   break;
               case 'hot':
                   result.innerText="单身狗";
                   alert("成功变成了一直单身狗");
                   bbb.state = 'single';
                   break;
               case 'married':
                   result.innerText="单身狗";
                   alert("离婚了");
                   bbb.state = 'single';
                   break;
           }
       }
   };
   $("#send1").click(function () {
       bbb.flower();
   });
    $("#send2").click(function () {
        bbb.ring();
    });
    $("#send3").click(function () {
        bbb.fight();
    });
    $("#send4").click(function () {
        bbb.breakup();
    });
});