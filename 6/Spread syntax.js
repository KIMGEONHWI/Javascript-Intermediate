/***************************
 * 전개 구문
 * arr1 을 [4, 5, 6, 1, 2, 3] 으로
 ***************************/

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

//arr2.reverse().forEach(num =>{
//    arr1.unshift(num);
//});

arr1 = [...arr2, ...arr1];

console.log(arr1);
