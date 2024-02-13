let arr = [27, 8, 5, 13];

// 8, 27, 5, 13
// 5, 8, 27, 13
//

arr.sort((a, b) => {
    console.log(a, b);
    return a- b;
});
//a 와 b를 비교하여 작은 숫자를 왼쪽으로 보냄

console.log(arr); //[ 5, 8, 13, 27 ]
