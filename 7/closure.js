function makeCounter() {
    let num = 0; // 은닉화

    return function () {
        return num++;
    };
}

// 내부함수에서 외부함수의 변수 num에 접근
// 생성된 이후에 계속 기억하고 있음

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2