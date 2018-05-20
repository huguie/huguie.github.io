
var haha = [1, 2, 3, 4, 5, 6];
function shuffle(array) {
    var x, y, z;
    x = array.length;
    while (x) {
        y = Math.floor(Math.random()*x--);
        z = array[x];
        array[x] = array[y];
        array[y] = z;
    }
    return array;
}
console.log(shuffle(haha));
console.log(haha)

//有一个数组，通过洗牌算法来打乱
//造一个函数，里面造三个变量
//一个变量代表数组的length，
//一个变量代表随机值
//一个变量代表数组最后的值
/*取随机值，random取得的是一个0-1区间（不包括1）的随机浮点数,
 *通过floor向下取整，可以通过向random乘以倍数来取得整数值，假设乘以6，
 *那么会随机取得0-5的整数值,这个值，跟数组没有关系，
 *只是通过这个值来做索引值获取数组的相对位置的具体数字*/
//数组的最后一个值，直接用索引值赋值给一个变量就可以了
//让随机到的值跟最后一个值互换
//然后让最后一个数，赋值给随机到的这个位置
//length--，从后往前遍历，遍历到开头这个数字，结束循环
//然后返回打乱后的数组