/******************************
 arr.reduce()
 인수로 함수를 받음
 (누적 계산값, 현재값) => { return 계산값 };
 *******************************/

//배열의 모든 수 합치기

let arr = [1, 2, 3, 4, 5];

// for, for of, forEach

const result = arr.reduce((prev, cur) =>{
    return prev + cur;
}, 0)

console.log(result);